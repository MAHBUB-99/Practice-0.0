import ArticleCard from "@/components/ArticleCard";
import Sorting from "@/components/Sorting";
import data from "@/data/data.json";

export default function Home({ searchParams }) {
  let contents = data;
  const sortBy = searchParams.sort || "latest";
  console.log(sortBy);

  contents = contents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    switch (sortBy) {
      case "latest":
        return dateB - dateA;
      case "oldest":
        return dateA - dateB;
      default:
        return 0;
    }
  });

  return (
    <>
      <div class="lg:w-2/3 lg:pr-12">
        <Sorting selected={sortBy}/>
        {contents.map((content) => (
          <ArticleCard key={content?.title} content={content} />
        ))}
      </div>
    </>
  );
}
