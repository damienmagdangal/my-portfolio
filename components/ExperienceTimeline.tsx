import type { Experience } from "@/data/experience";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-accent" />

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={`${exp.role}-${exp.period}`} className="relative">
            <div className="absolute -left-6 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
            <h3 className="font-mono text-sm font-bold text-text-primary">
              {exp.role}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {exp.company} · {exp.period}
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-text-muted">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
