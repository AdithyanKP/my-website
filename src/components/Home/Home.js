import React, { useState } from "react";
import styles from "./Home.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import awardImage from "../../assets/team_player_award.jfif";
import resumePdf from "../../assets/AdithyanKP_Resume_2026_4yrs.pdf";

const experience = [
  {
    role: "Software Engineer",
    company: "NeoITO",
    location: "Kochi, India",
    timeframe: "July 2022 - Present",
    bullets: [
      "Led the design and rollout of an AI-ready agentic chat solution that layers LangChain, OpenAI, and Qdrant for contextual conversations.",
      "Built a polygon-aware area sensing system that automates Google Maps drawing and zip code extraction for geo-precise analytics.",
      "Delivered a flexible workflow builder with Google Sheets OAuth integrations so business teams can compose and configure chat flows without code.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Infospica",
    location: "Remote, India",
    timeframe: "Nov 2021 - June 2022",
    bullets: [
      "Developed frontend and backend features for collaborative web applications, including REST API integrations and data orchestration.",
      "Implemented reusable services that accelerated delivery while improving test coverage and documentation handoffs.",
    ],
  },
];

const projects = [
  {
    name: "Happilee.io",
    tagline: "WhatsApp Business platform",
    description:
      "Multi-feature SaaS for WhatsApp automation with chatbot services, broadcasts, scheduling, and admin analytics.",
    stack: ["React", "Node", "Express", "PostgreSQL"],
    link: "https://happilee.io",
    ctaLabel: "View Live",
  },
  {
    name: "AppBlocks",
    tagline: "Composable app blocks framework",
    description:
      "Backend engineer for an open-source toolkit that standardizes reusable blocks for collaborative developer workflows.",
    stack: ["Go", "PostgreSQL", "Docker", "Redis"],
    link: "https://www.appblocks.com/",
    ctaLabel: "Explore",
  },
  {
    name: "E Plant",
    tagline: "Server-side e-commerce for indoor plants",
    description:
      "Node.js + MySQL shop with Razorpay checkout, admin dashboards, and customer-friendly browsing to sell curated plants and pots.",
    stack: ["Node", "MySQL", "Express", "Razorpay"],
    link: "https://github.com/AdithyanKP/E-PLANT",
    ctaLabel: "View GitHub",
  },
  {
    name: "ReplyFlow",
    tagline: "Nested comment system API",
    description:
      "Dockerized REST API with JWT-powered auth, pagination, and multi-level replies built on Node.js, Express, and PostgreSQL.",
    stack: ["Node", "Express", "PostgreSQL", "JWT"],
    link: "https://github.com/AdithyanKP/ReplyFlow",
    ctaLabel: "See Repo",
  },
];

const skills = [
  "JavaScript",
  "GoLang",
  "Node.js",
  "React",
  "TypeScript",
  "Redux",
  "Express",
  "Git",
  "Tailwind CSS",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Prisma",
  "AWS S3",
  "AWS EC2",
  "AWS ECR",
  "RabbitMQ",
  "Docker",
  "Jest",
  "AWS Lambda",
  "RAG",
];

const Home = () => {
  const [copied, setCopied] = useState("");

  const copyValue = async (value, label) => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(""), 1800);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.overline}>
            Full-stack engineer &amp; AI practitioner
          </p>
          <h1>
            Adithyan <span className={styles.highlight}>KP</span>
          </h1>
          <p className={styles.heroLead}>
            I design and ship scalable full-stack systems across consumer
            platforms, enterprise tooling, and conversational products, always
            aligning deliveries with measurable business outcomes.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href={resumePdf} download>
              Download resume
            </a>
            <a
              className={styles.secondaryCta}
              href="mailto:adithyan.k.p777@gmail.com"
            >
              Say hello
            </a>
          </div>
          <div className={styles.heroAward}>
            <a
              href={awardImage}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroAwardLink}
            >
              <img src={awardImage} alt="Team Player Award" />
            </a>
            <div>
              <p className={styles.awardTitle}>Team Player Award</p>
              <p className={styles.awardDetail}>
                Recognized at NeoITO for collaborative excellence.
              </p>
            </div>
          </div>
          <div className={styles.socials}>
            <IconButton
              aria-label="github"
              onClick={() => window.open("https://github.com/AdithyanKP/")}
              className={styles.iconButton}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/adithyan-k-p/")
              }
              className={styles.iconButton}
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div>
            <p className={styles.statValue}>5+</p>
            <p className={styles.statLabel}>Years shipping web platforms</p>
          </div>
          <div>
            <p className={styles.statValue}>2x</p>
            <p className={styles.statLabel}>
              generational AI workflows delivered
            </p>
          </div>
          <div>
            <p className={styles.statValue}>NeoITO</p>
            <p className={styles.statLabel}>Current full-time role in Kochi</p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Experience</p>
          <h2>Impact in production</h2>
        </div>
        <div className={styles.cardGrid}>
          {experience.map((item) => (
            <article key={item.company} className={styles.card}>
              <header>
                <p className={styles.role}>{item.role}</p>
                <h3>
                  {item.company}
                  <span className={styles.location}> · {item.location}</span>
                </h3>
                <p className={styles.timeframe}>{item.timeframe}</p>
              </header>
              <ul className={styles.bullets}>
                {item.bullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <p>Projects</p>
          <h2>Story-driven builds</h2>
        </div>
        <div className={styles.cardGrid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectCard}>
              <div>
                <p className={styles.role}>{project.name}</p>
                <h3>{project.tagline}</h3>
                <p className={styles.projectBody}>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <a
                className={styles.projectCta}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Skills</p>
          <h2>Technology fluency</h2>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <p>Let&apos;s build</p>
          <h2>Open to collaboration</h2>
        </div>
        <p className={styles.ctaCopy}>
          I enjoy collaborating on ambitious product experiences and scalable
          systems that move business goals forward. Ping me to explore a
          partnership.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <div className={styles.contactRow}>
              <span className={styles.contactValue}>+91 62385 31028</span>
              <button
                type="button"
                className={styles.copyButton}
                onClick={() => copyValue("+91 62385 31028", "phone")}
              >
                {copied === "phone" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <div className={styles.contactRow}>
              <span className={styles.contactValue}>
                adithyan.k.p777@gmail.com
              </span>
              <button
                type="button"
                className={styles.copyButton}
                onClick={() => copyValue("adithyan.k.p777@gmail.com", "email")}
              >
                {copied === "email" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroActions}>
          <a
            className={styles.primaryCta}
            href="mailto:adithyan.k.p777@gmail.com"
          >
            Start a convo
          </a>
          <a className={styles.secondaryCta} href="tel:+916238531028">
            +91 62385 31028
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
