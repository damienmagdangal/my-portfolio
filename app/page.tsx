import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/damienmagdangal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jdmagdangal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "HackTheBox",
    href: "https://profile.hackthebox.com/profile/019c414e-edfd-707b-9e6d-a9e44dbea67f",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18zM12 8.5L6.5 11.25v5.5L12 19.5l5.5-2.75v-5.5L12 8.5z" />
      </svg>
    ),
  },
];

const credentials = ["CRTA", "MCRTA", "WEB-RTA", "C3SA", "ISC2 CC"];

const currentlyStats = [
  { label: "Pursuing", value: "HTB CWES" },
  { label: "Latest Certification", value: "MCRTA — April 2026" },
  { label: "Active On", value: "HackTheBox & CyberWarfare Labs" },
  { label: "Bug Bounty", value: "Active (Freelance)" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 2);

  return (
    <main className="bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="animate-fade-in-up">
          <h1 className="font-mono text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Jean Damien Magdangal
          </h1>
          <p className="mt-2 font-mono text-text-muted">@zchown</p>
          <p className="mt-4 text-lg text-text-primary md:text-xl">
            Offensive Security Enthusiast
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {credentials.map((cert) => (
              <code
                key={cert}
                className="rounded border border-accent bg-surface px-2 py-1 font-mono text-xs text-text-primary sm:text-sm"
              >
                {cert}
              </code>
            ))}
          </div>

          <p className="mt-6 max-w-2xl leading-relaxed text-text-muted">
            Cybersecurity practitioner focused on offensive security - primarily on web application penetration testing and red team operations. Active on
            HackTheBox, pursuing the CPTS certification. Based in the
            Philippines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/labs"
              className="border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
            >
              View Labs & Write-ups →
            </Link>
            <Link
              href="/blog"
              className="border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
            >
              Read Blog →
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-muted transition-colors hover:text-accent"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <p className="mb-6 font-mono text-sm text-text-muted">{"// currently"}</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
            {currentlyStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 ${
                  index > 0 ? "sm:border-l sm:border-border sm:pl-6" : ""
                }`}
              >
                <span className="text-xs text-text-muted">{stat.label}</span>
                <span className="font-mono text-sm text-accent sm:text-base">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Write-ups */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-sm text-text-muted">
              {"// latest write-ups"}
            </p>
            <Link
              href="/blog"
              className="text-sm text-accent hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
