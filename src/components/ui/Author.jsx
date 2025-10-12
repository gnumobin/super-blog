import mainImg from "../../assets/authors/1.jpg";

const Author = () => {
  return (
    <div className="flex items-center mt-8 text-secondary text-2xl">
      <img src={mainImg} alt="portrait of author of quote" className="ml-5" />
      <p className="font-medium">مبین قائمی</p>
      <p className="mr-8">۱۳۸۴ مرداد ۱۶</p>
    </div>
  );
};

export default Author;
