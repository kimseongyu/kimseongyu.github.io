import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogSlugs, getBlogPostHtml } from "@/lib/blogPosts";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getBlogPostHtml(slug);
  if (!result) {
    notFound();
  }

  const { meta, html } = result!;

  return (
    <div className="a4-container landscape">
      <div className="font-sans py-8">
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← 목록으로 돌아가기
          </Link>
        </div>
        <div className="mb-2">
          {meta.tag === "open source" && (
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Open Source
            </span>
          )}
          {meta.tag === "tech" && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Tech
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <div className="flex flex-col gap-1 mb-4">
          {meta.tag === "tech" && meta.repository && (
            <div>
              <a
                href={meta.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Repository 바로가기 ↗
              </a>
            </div>
          )}
          {meta.tag === "open source" && (
            <div className="flex gap-4">
              {meta.issue && (
                <a
                  href={meta.issue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Issue 바로가기 ↗
                </a>
              )}
              {meta.pr && (
                <a
                  href={meta.pr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Pull Request 바로가기 ↗
                </a>
              )}
            </div>
          )}
        </div>
        {meta.date && (
          <div className="text-sm text-gray-500 mb-8">
            {new Date(meta.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}
        <article
          className="md-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
