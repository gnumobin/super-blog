import { Link } from "react-router";
import Author from "../../ui/Author";
import Tag from "../../ui/Tag";
import { LuPen } from "react-icons/lu";

const BlogCard = ({ data, edit = false }) => {
  const { tag, title, author, img } = data;
  return (
    <figure className="border border-card-border rounded-3xl p-6 flex flex-col justify-between relative">
      <img
        src={img}
        alt="picture of blog post"
        className="rounded-xl w-full h-76 object-cover"
        draggable="false"
      />
      <figcaption className="mt-9 text-secondary">
        <Tag>{tag}</Tag>
        <h3 className="text-black text-4xl mt-8 font-semibold">{title}</h3>
        <Author author={author} />
      </figcaption>
      {edit && (
        <div className="bg-primary w-fit flex justify-center items-center text-3xl rounded-full text-white p-4 absolute -top-8 -right-8">
          <LuPen />
        </div>
      )}
    </figure>
  );
};

export default BlogCard;
