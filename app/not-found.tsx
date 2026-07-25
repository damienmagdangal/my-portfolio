import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-start justify-center px-4 py-16">
        <p className="font-mono text-sm text-text-muted">
          {"// 404: route not found"}
        </p>
        <h1 className="mt-4 font-mono text-3xl font-medium leading-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
