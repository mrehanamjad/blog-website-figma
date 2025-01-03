import BlogHeroCard from "@/components/BlogHeroCard";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import PostCardLg from "@/components/PostCardLg";
import data from "@/data/data.json";
import PostCardContainer from "@/components/PostCardContainer";

export default function Home() {

      const recent = data.articles.filter((article,i) => i+1 > 6 && i+1 < 10 );
      const popular = data. articles.filter((article,i) => i+1 <= 6 );

  return (
    <div className="font-[family-name:var(--font-raleway)] bg-white">
     <Hero />
     <BlogHeroCard />
   <PostCardContainer heading="Our Recent Post">
   <PostCardLg />
      <div className="px-6 py-10 mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {recent.map(article => (
          <PostCard key={article.id} {...article} />
        ))}
      </div>
   </PostCardContainer>

   <PostCardContainer>
   <div className="px-6 py-10 mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {popular.map(article => (
          <PostCard key={article.id} {...article} />
        ))}
      </div>
   </PostCardContainer>

    </div>
  );
}
