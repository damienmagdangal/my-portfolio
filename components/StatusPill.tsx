type PillTone = "accent" | "warning" | "danger" | "critical" | "neutral";

type StatusPillProps = {
  tone: PillTone;
  children: React.ReactNode;
  as?: "span" | "code";
  className?: string;
};

const toneStyles: Record<PillTone, string> = {
  accent: "border-accent text-accent",
  warning: "border-amber-500 text-amber-500",
  danger: "border-red-500 text-red-500",
  critical: "border-red-600 text-red-600",
  neutral: "border-purple-500 text-purple-500",
};

export default function StatusPill({
  tone,
  children,
  as = "span",
  className = "",
}: StatusPillProps) {
  const Tag = as;

  return (
    <Tag
      className={`rounded border px-2 py-0.5 font-mono text-xs ${toneStyles[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
