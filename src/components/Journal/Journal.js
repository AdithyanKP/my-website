import React, { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { getJournalEntry, journalEntries } from "../../content/journal";
import styles from "./Journal.module.css";

const Diagram = memo(function Diagram({ label, nodes }) {
  return <figure className={styles.diagram}><figcaption>{label}</figcaption><div className={styles.diagramNodes}>{nodes.map((node, index) => <React.Fragment key={node}><span>{node}</span>{index < nodes.length - 1 && <i aria-hidden="true">→</i>}</React.Fragment>)}</div></figure>;
});

const Visual = memo(function Visual({ visual }) {
  if (!visual) return null;
  if (visual.type === "image") return <figure className={styles.image}><img src={visual.src} alt={visual.alt || "Journal visual"} /><figcaption>{visual.caption}</figcaption></figure>;
  return <Diagram label={visual.label} nodes={visual.nodes} />;
});

const EntryCard = memo(function EntryCard({ entry }) {
  return <article className={styles.entryCard}><div className={styles.entryMeta}><span>{entry.status}</span><time dateTime={entry.date}>{entry.displayDate}</time></div><h2><Link to={`/journal/${entry.slug}`}>{entry.title}</Link></h2><p>{entry.excerpt}</p><Visual visual={entry.visual} /><div className={styles.entryBottom}><div>{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link to={`/journal/${entry.slug}`}>OPEN ENTRY <b>→</b></Link></div></article>;
});

function JournalNav() {
  return <nav className={styles.nav}><Link className={styles.mark} to="/">A<span>.</span>K</Link><div><Link to="/">HOME</Link><Link to="/journal">JOURNAL</Link><a href="mailto:adithyankp777@gmail.com">CONTACT</a></div></nav>;
}

export function JournalIndex() {
  return <main className={styles.page}><JournalNav /><section className={styles.hero}><p>[ ENGINEERING JOURNAL / FIELD NOTES ]</p><h1>Notes from<br /><span>the workbench.</span></h1><div><p>A growing record of systems I’m learning, building, testing, and trying to understand more clearly.</p><span>{journalEntries.length.toString().padStart(2, "0")} ENTRIES / MORE TO COME</span></div></section><section className={styles.entries} style={{ borderBottom: "none" }}>{journalEntries.map((entry) => <EntryCard key={entry.slug} entry={entry} />)}</section></main>;
}

function Block({ block }) {
  switch (block.type) {
    case "heading": return <h2 className={styles.articleHeading}>{block.text}</h2>;
    case "paragraph": return <p className={styles.paragraph}>{block.text}</p>;
    case "callout": return <aside className={styles.callout}><span>{block.label}</span><p>{block.text}</p></aside>;
    case "code": return <pre className={styles.code}><code>{block.code}</code><span>{block.language || "TEXT"}</span></pre>;
    case "quote": return <blockquote className={styles.quote}><p>“{block.text}”</p><cite>{block.attribution}</cite></blockquote>;
    case "list": return <ul className={styles.list}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    case "image": return <Visual visual={block} />;
    case "diagram": return <Diagram label={block.label} nodes={block.nodes} />;
    default: return null;
  }
}

export function JournalArticle() {
  const { slug } = useParams();
  const entry = getJournalEntry(slug);
  if (!entry) return <main className={styles.page}><JournalNav /><section className={styles.notFound}><p>[ 404 / ENTRY NOT FOUND ]</p><h1>Nothing<br />here <span>yet.</span></h1><Link to="/journal">RETURN TO JOURNAL →</Link></section></main>;
  return <main className={styles.page}><JournalNav /><article className={styles.article}><Link className={styles.back} to="/journal">← ALL ENTRIES</Link><header><p>{entry.status}</p><h1>{entry.title}</h1><div><time dateTime={entry.date}>{entry.displayDate}</time><span>{entry.readingTime}</span></div></header><Visual visual={entry.visual} /><div className={styles.articleBody}>{entry.blocks.map((block, index) => <Block key={`${block.type}-${index}`} block={block} />)}</div><footer><span>END OF ENTRY</span><Link to="/journal">EXPLORE MORE NOTES →</Link></footer></article></main>;
}
