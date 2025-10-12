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
      className={`
        border rounded-3xl p-6 flex flex-col justify-between relative
        transition-all duration-300
        ${
          edit
            ? "border-2 border-primary bg-primary/10 hover:scale-105 edit-shake"
            : "border-card-border"
        }
      `}
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
        <div
          className="
            absolute -top-6 -right-6
            p-4 bg-primary rounded-full shadow-xl
            animate-pulse flex items-center justify-center
            text-4xl text-white
          "
          aria-label="Edit blog post"
        >
          <LuPen />
        </div>
      )}
    </figure>
  );
};

export default BlogCard;
