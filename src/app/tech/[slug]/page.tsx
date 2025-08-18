import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllTechSlugs, getTechPostHtml } from "@/lib/techPosts";

export async function generateStaticParams() {
  const slugs = await getAllTechSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TechPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getTechPostHtml(slug);
  if (!result) {
    notFound();
  }

  const { meta, html } = result!;

  return (
    <div className="a4-container landscape">
      <div className="font-sans py-8">
        <div className="mb-6">
          <Link href="/tech" className="text-blue-600 hover:underline">
            ← 목록으로 돌아가기
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        {meta.repository && (
          <div className="mb-4">
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
