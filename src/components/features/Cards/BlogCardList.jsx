import { Link } from "react-router";
import BlogCard from "./BlogCard";

/**
 * BlogCardList Component
 * Renders a responsive grid of BlogCard components with hover effects.
 */
const BlogCardList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      {/* Blog grid */}
      <div
        className="
          my-20 gap-6 
          grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]
        "
      >
        {data.map((post, index) => (
          <Link
            to="/post"
            state={{ postData: post }}
            key={index}
            className="
              transform transition-all duration-300 
              hover:scale-105 hover:shadow-xl 
              rounded-3xl
            "
          >
            <BlogCard data={post} />
          </Link>
        ))}
      </div>

      {/* Load more button */}
      <button
        type="button"
        className="
          border border-gray-300
          w-fit m-auto mt-8
          font-medium text-2xl text-secondary 
          py-5 px-8 rounded-xl 
          hover:bg-primary hover:text-white transition-all
          active:scale-95 cursor-pointer
        "
      >
        بارگذاری بقیه
      </button>
    </section>
  );
};

export default BlogCardList;
