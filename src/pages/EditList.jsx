import { Link } from "react-router";
import BlogCard from "../components/features/Cards/BlogCard";

/**
 * EditList Component
 * Displays a responsive grid of BlogCards in edit mode
 */
const EditList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      {/* Grid of editable blog cards */}
      <div
        className="
          my-20 gap-10 
          grid grid-cols-[repeat(auto-fit,minmax(27rem,1fr))]
          sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))]
        "
      >
        {data.map((post) => (
          <Link to="/editOne" state={{ postData: post }} key={post.id}>
            <BlogCard data={post} edit={true} />
          </Link>
        ))}
      </div>

      {/* Optional load more button */}
      {data.length > 0 && (
        <button
          type="button"
          className="
            border border-gray-300
            w-fit m-auto mt-8
            font-medium text-2xl text-secondary 
            py-5 px-8 rounded-xl 
            hover:bg-gray-100 transition-colors
            active:scale-95
          "
        >
          بارگذاری بقیه
        </button>
      )}
    </section>
  );
};

export default EditList;
