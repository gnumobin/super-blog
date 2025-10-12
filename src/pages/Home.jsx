import ArticleCard from "../components/features/Cards/ArticleCard";
import BlogCardList from "../components/features/Cards/BlogCardList";
import Hero from "../components/layouts/Hero";
import AdsCard from "../components/ui/AdsCard";

const Home = ({ data }) => {
  return (
    <section>
      <Hero />
      <ArticleCard />
      <BlogCardList data={data} />
      <AdsCard />
    </section>
  );
};

export default Home;
