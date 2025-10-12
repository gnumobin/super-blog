import React, { useState } from "react";

const NewCard = () => {
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
      author: {
        name: authorName,
        img: authorImg,
        date,
      },
      img,
    };

    // اینجا می‌تونی به سرور ارسال کنی یا در state بالا اضافه کنی
    setSubmittedData(newBlog);

    // خالی کردن فرم
    setTitle("");
    setTag("");
    setAuthorName("");
    setAuthorImg("");
    setDate("");
    setImg("");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl mb-6 font-bold">ایجاد بلاگ جدید</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <input
          type="text"
          placeholder="دسته‌بندی (مثلاً سلامتی، سفر)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <input
          type="text"
          placeholder="نام نویسنده"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <input
          type="url"
          placeholder="آدرس تصویر نویسنده"
          value={authorImg}
          onChange={(e) => setAuthorImg(e.target.value)}
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <input
          type="text"
          placeholder="تاریخ (مثلاً ۱۴۰۴ مهر ۲۶)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <input
          type="url"
          placeholder="آدرس تصویر بلاگ"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="border border-card-border p-6 text-2xl rounded-2xl"
        />
        <button
          type="submit"
          className="bg-primary text-white py-6 text-2xl cursor-pointer rounded-2xl font-semibold hover:bg-blue-700 transition"
        >
          ایجاد بلاگ
        </button>
      </form>

      {submittedData && (
        <div className="mt-10 p-4 border border-card-borde6 text-2xl rounded-2xl bg-gray-50">
          <h3 className="text-2xl font-bold mb-2">بلاگ ایجاد شده:</h3>
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
              className="w-20 h-20 rounded-full mt-2"
            />
          )}
          {submittedData.img && (
            <img
              src={submittedData.img}
              alt="تصویر بلاگ"
              className="w-full max-h-60 object-cover mt-4 rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NewCard;
