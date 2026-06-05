import type { Cert } from "@/data/certifications";

type CertCardProps = {
  cert: Cert;
};

export default function CertCard({ cert }: CertCardProps) {
  const isCompleted = cert.status === "completed";

  return (
    <div className="border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-sm font-bold leading-snug text-text-primary">
          {cert.name}
        </h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 font-mono text-xs ${
            isCompleted
              ? "border border-accent text-accent"
              : "border border-amber-500 text-amber-500"
          }`}
        >
          {isCompleted ? "Completed" : "In Progress"}
        </span>
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
    </div>
  );
}
