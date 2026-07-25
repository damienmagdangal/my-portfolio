import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusPill from "@/components/StatusPill";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { getReadingTime } from "@/lib/readingTime";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = await getPostBySlug(slug);
    return {
      title: `${meta.title} | zchown`,
      description: meta.description,
    };
  } catch {
    return { title: "Post Not Found | zchown" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof getPostBySlug>>;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content, markdown } = post;
  const readingTime = getReadingTime(markdown);

  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <Link
          href="/blog"
          className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
        >
          ← back to write-ups
        </Link>

        <header className="mx-auto mt-8 max-w-[65ch] border-b border-border pb-8">
          <h1 className="font-mono text-2xl font-medium leading-tight md:text-3xl">
            {meta.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-text-muted">
            <span>{formatDate(meta.date)}</span>
            <span>·</span>
            <span>{readingTime}</span>
            {meta.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <StatusPill key={tag} tone="accent">
                      {tag}
                    </StatusPill>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <article
          className="prose-post mx-auto mt-8 max-w-[65ch] font-sans text-text-primary"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
