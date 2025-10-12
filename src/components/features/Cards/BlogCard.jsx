import Author from "../../ui/Author";
import Tag from "../../ui/Tag";
import { LuPen } from "react-icons/lu";

/**
 * BlogCard Component
 * Displays a blog preview with image, tag, title, author info,
 * and an optional edit button (when edit mode is enabled).
 */
const BlogCard = ({ data, edit = false }) => {
  const { tag, title, author, img } = data;

  return (
    <figure
      className="
        border border-card-border 
        rounded-3xl p-6 
        flex flex-col justify-between 
        relative
      "
    >
      {/* Blog cover image */}
      <img
        src={img}
        alt={`Cover for ${title}`}
        className="rounded-xl w-full h-76 object-cover"
        draggable="false"
      />

      {/* Blog info: tag, title, author */}
      <figcaption className="mt-9 text-secondary">
        <Tag>{tag}</Tag>
        <h3 className="text-black text-4xl mt-8 font-semibold">{title}</h3>
        <Author author={author} />
      </figcaption>

      {/* Edit icon (only visible in edit mode) */}
      {edit && (
        <button
          type="button"
          className="
            bg-primary 
            w-fit flex justify-center items-center 
            text-3xl rounded-full text-white p-4 
            absolute -top-8 -right-8
            shadow-md hover:scale-105 transition-transform
          "
          aria-label="Edit blog post"
        >
          <LuPen />
        </button>
      )}
    </figure>
  );
};

export default BlogCard;
