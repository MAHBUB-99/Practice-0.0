import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ content }) {
  
    function getFirstSentence(description) {
    if (!description) return null;
    const text = description.replace(/<[^>]>/g, "");
    const index = text.indexOf(".");
    return text.slice(0, index + 1).trim();
  }
  const shortDescription = getFirstSentence(content?.description);

  return (
    <article class="mb-10 pb-10 border-b border-gray-200">
      <div class="flex items-center mb-4">
        <Image
          src={content?.author?.avatar}
          alt="Author"
          class="h-6 w-6 rounded-full mr-2"
          width={48}
          height={48}
        />
        <span class="text-sm font-medium">Sumit Saha</span>
      </div>
      <Link
        href="/"
        class="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {content?.title}
      </Link>
      <p class="text-gray-700 mb-4">
        {shortDescription}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center text-gray-500 text-sm">
          <span>{content?.date}</span>
          <span class="mx-1">·</span>
          <span class="bg-gray-100 px-2 py-1 rounded-full">
            {content?.category}
          </span>
        </div>
        <button class="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
