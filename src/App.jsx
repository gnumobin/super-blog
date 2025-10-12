import ArticleCard from "./components/features/Cards/ArticleCard";
import BlogCardList from "./components/features/Cards/BlogCardList";
import AdsCard from "./components/ui/AdsCard";
import "./styles/general.css";

function App() {
  return (
    <div className="container">
      <div className="mb-24">
        <h1 className="text-black text-center font-semibold text-5xl">
          عنوان صفحه
        </h1>
        <ul className="flex justify-center text-secondary text-2xl cursor-pointer mt-3">
          <li className="text-black border-l px-5">اینجا</li>
          <li className="border-l px-5">بریدکرامب</li>
          <li className="px-5">هست</li>
        </ul>
      </div>
      <ArticleCard />
      <BlogCardList />
      <AdsCard />
    </div>
  );
}

export default App;
