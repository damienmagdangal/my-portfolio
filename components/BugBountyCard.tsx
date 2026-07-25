import StatusPill from "@/components/StatusPill";
import type { BugBountyFinding } from "@/data/labs";

type BugBountyCardProps = {
  finding: BugBountyFinding;
};

const severityTone: Record<
  BugBountyFinding["severity"],
  "critical" | "danger" | "warning" | "neutral"
> = {
  Critical: "critical",
  High: "danger",
  Medium: "warning",
  Low: "neutral",
};

export default function BugBountyCard({ finding }: BugBountyCardProps) {
  return (
    <article className="border border-border bg-surface p-5 transition-colors hover:border-border-hover">
      <div className="flex flex-wrap items-start gap-3">
        <StatusPill as="code" tone={severityTone[finding.severity]} className="shrink-0">
          {finding.severity}
        </StatusPill>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-sm text-text-primary">
            {finding.category}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {finding.detail}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
            <span>Platform: {finding.platform}</span>
            <span>Status: {finding.status}</span>
            {finding.reportLink && (
              <a
                href={finding.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Report →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
