import Author from "../../ui/Author";
import Tag from "../../ui/Tag";

const author = {
  name: "نگار ملکی",
  img: "https://randomuser.me/api/portraits/women/28.jpg",
  date: "۱۴۰۴ مهر ۲۲",
};

const ArticleCard = () => {
  return (
    <div className="container">
      <div className="article-card rounded-2xl p-16 text-white">
        <Tag>تکنولوژی</Tag>
        <h1 className="text-white text-6xl font-semibold mt-6 mb-1.5 w-1/2">
          ۵ دستور غذای سریع و سالم برای روزهای شلوغ
        </h1>
        <Author author={author} />
      </div>
    </div>
  );
};

export default ArticleCard;
