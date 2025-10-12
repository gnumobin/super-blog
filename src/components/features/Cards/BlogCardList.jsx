import { Link } from "react-router";
import BlogCard from "./BlogCard";

const BlogCardList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      {/* Blog grid */}
      <div
        className="
          my-20 gap-6 
          grid grid-cols-[repeat(auto-fit,minmax(28rem,1fr))]
          sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))]
        "
      >
        {data.map((post, index) => (
          <Link
            to="/post"
            state={{ postData: post }}
            key={index}
            className="
              relative
              rounded-3xl
              transform transition-all duration-400 ease-out
              hover:scale-105 
              hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]
              hover:z-10
            "
          >
            <BlogCard data={post} />
            {/* iOS-style shimmer glow on hover */}
            <span className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
          </Link>
        ))}
      </div>

      {/* Load more button */}
      <button
        type="button"
        className="
          relative
          border border-gray-300
          w-fit m-auto mt-8
          font-medium text-2xl text-secondary 
          py-5 px-8 rounded-xl 
          bg-white
          transition-all duration-300 ease-out
          hover:bg-primary hover:text-white
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
          active:scale-95
          cursor-pointer
        "
      >
        بارگذاری بقیه
      </button>
    </section>
  );
};

export default BlogCardList;
