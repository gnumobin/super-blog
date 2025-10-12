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
    </section>
  );
};

export default EditList;
