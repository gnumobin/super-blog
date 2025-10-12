import mainImg from "../../../assets/cards/1.jpg";
import Author from "../../ui/Author";
import Tag from "../../ui/Tag";

const BlogCard = () => {
  return (
    <figure className="border border-card-border rounded-3xl p-6 flex flex-col">
      <img src={mainImg} alt="picture of blog post" draggable="false" />
      <figcaption className="mt-9">
        <Tag>سبک زندگی</Tag>
        <h3 className="text-4xl mt-8 font-semibold">
          آیفون ۱۷ پرو به تازگی با قیمت خیلی زیاد وارد بازار ایران شده است
        </h3>
        <Author />
      </figcaption>
    </figure>
  );
};

export default BlogCard;
