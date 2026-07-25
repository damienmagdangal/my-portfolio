"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-start justify-center px-4 py-16">
        <p className="font-mono text-sm text-text-muted">
          {"// error: something broke"}
        </p>
        <h1 className="mt-4 font-mono text-3xl font-medium leading-tight sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
          An unexpected error occurred. You can try again, or head back home.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
