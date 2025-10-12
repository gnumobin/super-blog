import ArticleCard from "./components/features/Cards/ArticleCard";
import BlogCardList from "./components/features/Cards/BlogCardList";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import AdsCard from "./components/ui/AdsCard";
import "./styles/general.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <ArticleCard />
      <BlogCardList />
      <AdsCard />
    </div>
  );
}

export default App;
