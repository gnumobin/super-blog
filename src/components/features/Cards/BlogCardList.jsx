import { Link } from "react-router";
import BlogCard from "./BlogCard";

const BlogCardList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      <div className="my-20 gap-8 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
        {data.map((data, i) => (
          <Link to={"/post"} state={{ postData: data }} key={i}>
            <BlogCard data={data} />
          </Link>
        ))}
      </div>
      <button className="border w-fit m-auto font-medium text-2xl text-secondary py-5 px-8 rounded-xl cursor-pointer">
        بارگذاری بقیه
      </button>
    </section>
  );
};

export default BlogCardList;
