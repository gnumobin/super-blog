import { Link } from "react-router";
import BlogCard from "../components/features/Cards/BlogCard";

const EditList = ({ data }) => {
  return (
    <section className="container flex flex-col mb-36">
      <div className="my-20 gap-8 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
        {data.map((data, i) => (
          <Link to={"/post"} state={{ postData: data }} key={i}>
            <BlogCard data={data} edit={true} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EditList;
