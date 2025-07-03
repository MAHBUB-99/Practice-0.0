"use client";
import data from "@/data/data.json";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const categories = [...new Set(data.map((d) => d.category))];

  const searchParams = useSearchParams();

  const activeCategories = searchParams.getAll("category");

  const buildCatHref = (category) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const existingCatParams = currentParams.getAll("category");
    let newCatParams = [];

    if (existingCatParams.length > 0) {
      newCatParams = [...existingCatParams];
    }

    if (newCatParams.includes(category)) {
      newCatParams = newCatParams.filter((cat) => cat != category);
    } else {
      newCatParams.push(category);
    }

    currentParams.delete("category");
    newCatParams.forEach((cat) => {
      currentParams.append("category", cat);
    });

    const currentSortParam = searchParams.get("sort");
    if (currentSortParam) {
      currentParams.set("sort", currentSortParam);
    } else {
      currentParams.delete("sort");
    }
    return `/?${currentParams.toString()}`;
  };

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
                key={cat}
                href={buildCatHref(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategories.includes(cat)
                    ? "bg-green-200"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
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
