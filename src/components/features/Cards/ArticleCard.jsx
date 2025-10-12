import Author from "../../ui/Author";
import Tag from "../../ui/Tag";

// Default author data (used if no props are provided)
const defaultAuthor = {
  name: "نگار ملکی",
  img: "https://randomuser.me/api/portraits/women/28.jpg",
  date: "۱۴۰۴ مهر ۲۲",
};

/**
 * ArticleCard Component
 * Displays an article preview with hover effect.
 */
const ArticleCard = ({
  title = "۵ دستور غذای سریع و سالم برای روزهای شلوغ",
  tag = "تکنولوژی",
  author = defaultAuthor,
}) => {
  return (
    <section className="container">
      <article
        className="
          article-card 
          rounded-2xl 
          p-16 
          text-white 
          bg-gradient-to-b from-gray-800 to-gray-900
          transform transition-all duration-300
          hover:scale-105 hover:shadow-2xl
          lg:p-8
        "
      >
        {/* Article tag */}
        <Tag>{tag}</Tag>

        {/* Article title */}
        <h1
          className="
            mt-6 mb-2
            text-6xl font-semibold w-1/2 
            lg:text-4xl lg:w-full
          "
        >
          {title}
        </h1>

        {/* Author info */}
        <Author author={author} />
      </article>
    </section>
  );
};

export default ArticleCard;
