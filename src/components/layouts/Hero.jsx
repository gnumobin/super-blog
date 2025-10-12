const Hero = () => {
  return (
    <section className="mb-24 mt-16">
      {/* Page title */}
      <h1
        className="
          text-black 
          text-center 
          font-semibold 
          text-6xl
          transition-transform duration-300
          hover:scale-105 hover:text-primary
        "
      >
        عنوان صفحه
      </h1>

      {/* Breadcrumb */}
      <ul className="flex justify-center text-secondary text-xl sm:text-2xl mt-3 cursor-pointer">
        <li
          className="
            text-black 
            border-l border-gray-300 
            px-4 sm:px-5 
            transition-all duration-300
            hover:text-primary hover:scale-105
          "
        >
          اینجا
        </li>
        <li
          className="
            border-l border-gray-300 
            px-4 sm:px-5 
            transition-all duration-300
            hover:text-primary hover:scale-105
          "
        >
          بریدکرامب
        </li>
        <li
          className="
            px-4 sm:px-5 
            transition-all duration-300
            hover:text-primary hover:scale-105
          "
        >
          هست
        </li>
      </ul>
    </section>
  );
};

export default Hero;
