import Link from "next/link";

export default function Sidebar({ categories }) {
  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                href="#"
                className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
            {[
              "Help",
              "Status",
              "Writers",
              "Blog",
              "Careers",
              "Privacy",
              "Terms",
              "About",
            ].map((a) => (
              <a href="#" className="hover:text-gray-700">
                {a}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
