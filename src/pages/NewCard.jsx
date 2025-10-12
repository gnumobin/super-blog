import { useState } from "react";

const NewCard = ({ data }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      tag,
      author: { name: authorName, img: authorImg, date },
      img,
    };

    data.push(newBlog);
    setSubmittedData(newBlog);

    setTitle("");
    setTag("");
    setAuthorName("");
    setAuthorImg("");
    setDate("");
    setImg("");
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        ایجاد بلاگ جدید
      </h2>

      <div className="flex flex-row lg:flex-col gap-8">
        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="
        flex-1 grid grid-cols-2 lg:grid-cols-1 gap-6
        bg-white/80 backdrop-blur-md
        p-8 rounded-3xl shadow-lg
        border border-gray-200
      "
        >
          {[
            {
              placeholder: "عنوان",
              value: title,
              set: setTitle,
              required: true,
            },
            {
              placeholder: "دسته‌بندی",
              value: tag,
              set: setTag,
              required: true,
            },
            {
              placeholder: "نام نویسنده",
              value: authorName,
              set: setAuthorName,
              required: true,
            },
            {
              placeholder: "آدرس تصویر نویسنده",
              value: authorImg,
              set: setAuthorImg,
              required: false,
            },
            { placeholder: "تاریخ", value: date, set: setDate, required: true },
            {
              placeholder: "آدرس تصویر بلاگ",
              value: img,
              set: setImg,
              required: false,
            },
          ].map((field, i) => (
            <input
              key={i}
              type={field.placeholder.includes("آدرس تصویر") ? "url" : "text"}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => field.set(e.target.value)}
              required={field.required}
              className="
            border border-gray-200 p-5 text-2xl rounded-2xl
            focus:outline-none focus:ring-2 focus:ring-blue-400
            focus:shadow-lg transition-all duration-300
            hover:scale-[1.02] hover:shadow-xl
          "
            />
          ))}

          <button
            type="submit"
            className="
          col-span-2 lg:col-span-1
          bg-blue-500 text-white py-5 text-2xl font-semibold
          rounded-2xl hover:bg-blue-600 hover:shadow-2xl
          hover:scale-[1.03] transition-all duration-300 cursor-pointer
        "
          >
            ایجاد بلاگ
          </button>
        </form>

        {/* Preview card */}
        {submittedData && (
          <div
            className="
        flex-1 p-6 rounded-3xl
        shadow-xl backdrop-blur-md bg-white/60
        border border-gray-200
        transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
      "
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              بلاگ ایجاد شده:
            </h3>
            <p>
              <strong>عنوان:</strong> {submittedData.title}
            </p>
            <p>
              <strong>دسته‌بندی:</strong> {submittedData.tag}
            </p>
            <p>
              <strong>نویسنده:</strong> {submittedData.author.name}
            </p>
            <p>
              <strong>تاریخ:</strong> {submittedData.author.date}
            </p>

            {submittedData.author.img && (
              <img
                src={submittedData.author.img}
                alt="تصویر نویسنده"
                className="w-24 h-24 rounded-full mt-4 object-cover border border-gray-200 shadow-sm"
              />
            )}

            {submittedData.img && (
              <img
                src={submittedData.img}
                alt="تصویر بلاگ"
                className="w-full max-h-72 object-cover mt-6 rounded-xl border border-gray-200 shadow-sm"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCard;
