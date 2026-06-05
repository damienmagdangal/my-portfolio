export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Bug Bounty Hunter",
    company: "Freelance",
    period: "April 2025 – Present",
    bullets: [
      "Reported 1 high-severity bug (OWASP A01:2025 – Broken Access Control): missing authorization check on an endpoint leading to unauthorized data modification and content takeover.",
      "Built Z-Lab JWT Attacks: a personal cybersecurity web app using Next.js + Express demonstrating JWT vulnerabilities (no-signature token, claims manipulation, KID-based self-signed HS256). Dockerized and open source on GitHub.",
      "Published Docker scripts to easily deploy WeLearnSec labs (OWASP 2021 Top 10 vulnerable web app).",
      "Won HackTheBox VIP+ subscription at the 5th HackTheBox Meetup: Philippines (live hacking challenge).",
    ],
  },
  {
    role: "Assistant Vice President – Data Quality Senior Analyst",
    company: "Citibank N.A. – ROHQ",
    period: "July 2024 – Present",
    bullets: [
      "Manages all retail products for APAC and EMEA. Leads end-to-end data acquisition and data warehouse upgrades.",
      "Spearheads automated testing pipeline for data ingested into the global regulatory reporting warehouse.",
      "Coordinates critical deliverables across data sources and consumers to mitigate data quality risk.",
    ],
  },
  {
    role: "Manager – Data Integration Intermediate Analyst",
    company: "Citibank N.A. – ROHQ",
    period: "January 2022 – June 2024",
    bullets: [
      "Developed VBA + SQL automation reducing data processing time from 1 hour to 2 minutes.",
      "SME for Retail Credit Cards. Led data warehouse impact analysis, data controls, and BRD/FRD review for production sign-off.",
    ],
  },
  {
    role: "Assistant Manager – Data Management Analyst",
    company: "Citibank N.A. – ROHQ",
    period: "November 2020 – December 2021",
    bullets: [
      "End-to-end data investigation, extractions, and validation.",
      "Partnered with Risk and Finance for regulatory and internal management reporting requirements.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Tata Consultancy Services",
    period: "April 2019 – November 2020",
    bullets: [
      "Deployed to Citibank N.A. ROHQ. Led a team of 3 to build a centralized Finance attributes database using MS Access and SQL — later adopted globally.",
    ],
  },
  {
    role: "Web Developer Lead",
    company: "Technological Institute of the Philippines – QC",
    period: "November 2018 – April 2019",
    bullets: [
      "Full-stack internship at ITSO. Built with Laravel, Vue.js, and MSSQL. Led a back-end team of 3 developers.",
    ],
  },
  {
    role: "Mobile Development Lead",
    company: "Cryptors Cybersecurity Inc.",
    period: "October 2017 – October 2018",
    bullets: [
      "Led mobile dev team at a Philippines-based cybersecurity awareness company. Built projects using Ionic, Laravel APIs, and MySQL.",
    ],
  },
];
