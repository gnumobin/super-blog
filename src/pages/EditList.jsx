import { Link } from "react-router";
import BlogCard from "../components/features/Cards/BlogCard";

const EditList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      <div className="my-20 gap-8 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
        {data.map((data) => (
          <Link to={"/editOne"} state={{ postData: data }} key={data.id}>
            <BlogCard data={data} edit={true} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EditList;
