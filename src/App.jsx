import ArticleCard from "./components/features/Cards/ArticleCard";
import BlogCardList from "./components/features/Cards/BlogCardList";
import "./styles/general.css";

function App() {
  return (
    <div className="container">
      <ArticleCard />
      <BlogCardList />
    </div>
  );
}

export default App;
