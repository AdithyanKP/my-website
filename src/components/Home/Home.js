import React, { memo, useCallback, useState } from "react";
import styles from "./Home.module.css";

const projects = [
  { id: "01", title: "Workflow execution engine", type: "PRODUCT SYSTEM / 2022—NOW", summary: "A configurable runtime for turning business rules, API calls, schedules, and human handoffs into dependable workflows.", facts: ["300+ businesses", "10k+ daily interactions", "14% faster publish path"], tags: ["Node.js", "RabbitMQ", "PostgreSQL", "Redis"] },
  { id: "02", title: "Order fulfillment pipeline", type: "RELIABILITY / BACKEND", summary: "A fault-tolerant order path designed around retries, visibility, and recovery—not the happy path.", facts: ["78% fewer failures", "async recovery", "traceable state"], tags: ["Queues", "AWS", "Webhooks", "Idempotency"] },
  { id: "03", title: "Multimodal knowledge retrieval", type: "APPLIED AI / SEARCH", summary: "A retrieval system that combines documents, images, OCR, and LLMs into answers grounded in a company’s own knowledge.", facts: ["hybrid retrieval", "image + text", "grounded answers"], tags: ["RAG", "Qdrant", "CLIP", "LangChain"] },
];
const notes = [
  { no: "CONTRIB_001", date: "WORKFLOW SYSTEMS", title: "Built the execution layer behind 10,000+ daily customer interactions", text: "Designed a configurable low-code workflow platform with reusable nodes for Meta Cloud API, Google Sheets, webhooks, and REST integrations. RabbitMQ handles asynchronous execution, scheduling, and event orchestration across 300+ businesses.", topic: "SCALE / ORCHESTRATION", outcome: "300+ BUSINESSES · 10K+ INTERACTIONS / DAY" },
  { no: "CONTRIB_002", date: "APPLIED AI", title: "Made product knowledge searchable across text and images", text: "Designed a multimodal RAG pipeline with LangChain, OpenAI, Qdrant, OCR, and CLIP. Asynchronous ingestion through RabbitMQ improved embedding throughput and enabled AI-powered product identification; also built intent-driven conversational agents for multi-turn workflows.", topic: "RETRIEVAL / AGENTS", outcome: "TEXT + IMAGE RETRIEVAL · ASYNC INGESTION" },
  { no: "CONTRIB_003", date: "RELIABILITY + PERFORMANCE", title: "Removed bottlenecks from data export and fulfillment paths", text: "Reduced a PostgreSQL-backed, 40,000-record contact export from approximately 10.5 seconds to 1.5 seconds through data-access and batching improvements. Built an order pipeline spanning validation, rates, processing, Shiprocket, and tracking—cutting failures by 78%.", topic: "MEASURABLE IMPROVEMENT", outcome: "~7× FASTER EXPORT · 78% FEWER FAILURES" },
];
const capabilities = [["01", "Backend systems", "APIs, async processing, queues, stateful workflows"], ["02", "Applied AI", "RAG, agent workflows, evaluation, multimodal retrieval"], ["03", "React interfaces", "Product-facing interfaces and reusable frontend features when the system needs them"], ["04", "Production craft", "AWS, Docker, delivery pipelines, observability"]];

const ProjectCard = memo(function ProjectCard({ project }) {
  return <article className={styles.project}><div className={styles.projectMeta}><span>{project.id}</span><span>{project.type}</span></div><div className={styles.projectBody}><h3>{project.title}</h3><p>{project.summary}</p></div><ul className={styles.facts}>{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className={styles.caseLink} href="mailto:adithyankp777@gmail.com?subject=Case%20study%20request">REQUEST CASE STUDY <b>↗</b></a></article>;
});

const ContributionCard = memo(function ContributionCard({ contribution }) {
  return <article className={styles.note}><div><span>{contribution.no}</span><time>{contribution.date}</time></div><p className={styles.noteTopic}>{contribution.topic}</p><h3>{contribution.title}</h3><p>{contribution.text}</p><strong className={styles.outcome}>{contribution.outcome}</strong></article>;
});

const Capability = memo(function Capability({ item }) {
  const [number, title, copy] = item;
  return <div><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>;
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((isOpen) => !isOpen), []);
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Main navigation">
      <a className={styles.mark} href="#top" onClick={closeMenu}>A<span>.</span>K</a>
      <button className={styles.menuButton} onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="site-links">{menuOpen ? "CLOSE" : "MENU"}</button>
      <div id="site-links" className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}><a href="#work" onClick={closeMenu}>WORK</a><a href="#notes" onClick={closeMenu}>CONTRIBUTIONS</a><a href="#about" onClick={closeMenu}>ABOUT</a></div>
    </nav>
    <section id="top" className={styles.hero}>
      <p className={styles.kicker}>INDEPENDENT ENGINEERING PORTFOLIO / INDIA / 2026</p>
      <div className={styles.heroGrid}><h1>Build<br />things that<br /><span>hold up.</span></h1><div className={styles.intro}><p>I’m <strong>Adithyan KP</strong>—a backend-first software engineer working on distributed systems, applied AI, and the infrastructure in between.</p><p>I also build product-facing interfaces with React when they help make the system useful. My focus remains the unglamorous work: failure modes, measurable improvements, and software that stays understandable as it grows.</p><a href="#work" className={styles.arrowLink}>EXPLORE SELECTED WORK <b>↓</b></a></div></div>
      <div className={styles.signalPanel} aria-label="Current engineering focus"><span>NOW WORKING ON</span><b>reliable systems for people and products</b><i>●</i></div>
    </section>
    <section className={styles.manifesto}><p className={styles.sectionCode}>[ 00 / POSITION ]</p><p className={styles.largeStatement}>I make software for the moment after launch—when it needs to handle <em>load, ambiguity, and real people.</em></p></section>
    <section id="work" className={styles.section}>
      <header className={styles.sectionHead}><p>[ 01 / SELECTED WORK ]</p><h2>Case files</h2><span>Each project is a system, not just a screen.</span></header>
      <div className={styles.projects}>{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
    <section id="notes" className={`${styles.section} ${styles.notesSection}`}><header className={styles.sectionHead}><p>[ 02 / TOP CONTRIBUTIONS ]</p><h2>Engineering record</h2><span>Selected production contributions and their measurable outcomes.</span></header><div className={styles.notes}>{notes.map((contribution) => <ContributionCard key={contribution.no} contribution={contribution} />)}</div><p className={styles.noteFoot}>CONTRIBUTIONS SUMMARIZED FROM MY PROFESSIONAL EXPERIENCE. DETAILED CASE STUDIES ARE AVAILABLE ON REQUEST.</p></section>
    <section id="about" className={`${styles.section} ${styles.about}`}><header className={styles.sectionHead}><p>[ 03 / PRACTICE ]</p><h2>What I bring</h2></header><div className={styles.capabilities}>{capabilities.map((item) => <Capability key={item[0]} item={item} />)}</div></section>
    <section className={styles.contact}><p>[ END / START A CONVERSATION ]</p><h2>Have a system<br />worth <span>solving?</span></h2><a href="mailto:adithyankp777@gmail.com">adithyankp777@gmail.com <b>↗</b></a></section>
  </main>;
}
