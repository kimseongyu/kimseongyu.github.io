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
          href="/tech"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Tech
        </Link>
        <Link
          href="/wasm"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Wasm Labs
        </Link>
      </div>
    </nav>
  );
};
