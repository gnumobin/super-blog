import Author from "../../ui/Author";
import Tag from "../../ui/Tag";

const BlogCard = ({ data }) => {
  const { tag, title, author, img } = data;
  return (
    <figure className="border border-card-border rounded-3xl p-6 flex flex-col justify-between">
      <img
        src={img}
        alt="picture of blog post"
        className="rounded-xl w-full h-full"
        draggable="false"
      />
      <figcaption className="mt-9">
        <Tag>{tag}</Tag>
        <h3 className="text-black text-4xl mt-8 font-semibold">{title}</h3>
        <Author author={author} />
      </figcaption>
    </figure>
  );
};

export default BlogCard;
