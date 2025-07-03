"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sorting({ selected }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSorting = (e) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort",newSort);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div class="mb-6 flex justify-between items-center">
      <h2 class="text-2xl font-bold">Articles</h2>
      <div>
        <label for="sort" class="text-sm font-medium text-gray-700 mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          name="sort"
          value={selected}
          onChange={handleSorting}
          class="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most Popular</option>
          <option value="read-time">Shortest Read Time</option>
        </select>
      </div>
    </div>
  );
}
