import type { SecurityProject } from "@/data/labs";

type SecurityProjectCardProps = {
  project: SecurityProject;
};

export default function SecurityProjectCard({
  project,
}: SecurityProjectCardProps) {
  return (
    <article className="border border-border bg-surface p-5 transition-colors hover:border-border-hover">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-mono text-sm font-bold text-text-primary">
          {project.name}
        </h3>
        <span className="text-sm text-text-muted">{project.year}</span>
        <code className="rounded border border-accent px-2 py-0.5 font-mono text-xs text-accent">
          {project.type}
        </code>
      </div>

      <p className="mt-2 font-mono text-xs text-text-muted">
        {project.language}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
        >
          → View on GitHub
        </a>
      )}
    </article>
  );
}
