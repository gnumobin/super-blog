import ArticleCard from "../components/features/Cards/ArticleCard";
import BlogCardList from "../components/features/Cards/BlogCardList";
import Hero from "../components/layouts/Hero";
import AdsCard from "../components/ui/AdsCard";

const Home = () => {
  return (
    <section>
      <Hero />
      <ArticleCard />
      <BlogCardList />
      <AdsCard />
    </section>
  );
};

export default Home;
