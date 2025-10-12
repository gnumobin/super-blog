import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const postData = location.state?.postData;

  const [formData, setFormData] = useState({
    title: "",
    tag: "",
    author: {
      name: "",
      img: "",
      date: "",
    },
    img: "",
  });

  useEffect(() => {
    if (postData) {
      setFormData(postData);
    } else {
      navigate("/", { replace: true });
    }
  }, [postData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("author.")) {
      const authorField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ویرایش شد:", formData);
    alert("ویرایش با موفقیت انجام شد!");
    navigate(-1);
  };

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <h2 className="text-2xl font-bold mb-6">ویرایش مطلب</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            عنوان:
          </span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            تگ:
          </span>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            نام نویسنده:
          </span>
          <input
            type="text"
            name="author.name"
            value={formData.author.name}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            تصویر نویسنده (آدرس URL):
          </span>
          <input
            type="text"
            name="author.img"
            value={formData.author.img}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            تاریخ:
          </span>
          <input
            type="text"
            name="author.date"
            value={formData.author.date}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <label>
          <span className="font-semibold text-black text-3xl mb-4 inline-block">
            تصویر مطلب (آدرس URL):
          </span>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full border border-card-border p-4 px-8 text-2xl rounded-2xl"
          />
        </label>

        <button
          type="submit"
          className="bg-primary text-2xl font-semibold cursor-pointer text-white p-6 py-4 mt-4 rounded-2xl hover:bg-blue-700"
        >
          ذخیره تغییرات
        </button>
      </form>
    </section>
  );
};

export default Edit;
