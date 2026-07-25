import type { Cert } from "@/data/certifications";
import StatusPill from "@/components/StatusPill";

type CertCardProps = {
  cert: Cert;
};

export default function CertCard({ cert }: CertCardProps) {
  const isCompleted = cert.status === "completed";

  return (
    <article className="border border-border bg-surface p-5 transition-colors hover:border-border-hover">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-sm font-bold leading-snug text-text-primary">
          {cert.name}
        </h3>
        <StatusPill tone={isCompleted ? "accent" : "warning"} className="shrink-0">
          {isCompleted ? "Completed" : "In Progress"}
        </StatusPill>
      </div>
      <p className="mt-2 text-sm text-text-muted">{cert.issuer}</p>
      <p className="mt-1 text-sm text-text-muted">{cert.date}</p>
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-mono text-xs text-accent hover:underline"
        >
          ↗ Verify
        </a>
      )}
    </article>
  );
}
