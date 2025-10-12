import BlogCard from "./BlogCard";

const data = [1, 1, 1];

const BlogCardList = () => {
  return (
    <div className="flex gap-10">
      {data.map(() => (
        <BlogCard />
      ))}
    </div>
  );
};

export default BlogCardList;
