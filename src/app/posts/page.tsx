import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Tech() {
  const posts = await getPosts();

  return (
    <div className="a4-container">
      <div className="font-sans py-8">
        <h1 className="text-4xl font-bold mb-8">Tech</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">아직 게시물이 없습니다.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  {post.tag === "open source" && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Open Source
                    </span>
                  )}
                  {post.tag === "tech" && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Posts
                    </span>
                  )}
                </div>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-600 hover:underline text-lg font-medium"
                >
                  {post.title}
                </Link>
                {post.date && (
                  <div className="text-sm text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
