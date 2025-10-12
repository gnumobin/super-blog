const Author = ({ author }) => {
  return (
    <div className="flex items-center mt-8 text-2xl">
      <img
        src={author.img}
        alt="portrait of author of quote"
        className="ml-5 rounded-full"
        width={36}
        height={36}
      />
      <p className="font-medium">{author.name}</p>
      <p className="mr-8">{author.date}</p>
    </div>
  );
};

export default Author;
