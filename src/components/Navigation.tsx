import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link
        href="/"
        className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Seongyu&apos;s Blog
      </Link>
      <div className="flex space-x-6">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};
