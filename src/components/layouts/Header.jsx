const Header = () => {
  return (
    <header className="flex justify-between items-center text-2xl text-[#3B3C4A] font-medium pt-12">
      <div className="logo-box flex items-center">
        <img src="/vite.svg" alt="website logo" />
        <p className="text-black text-3xl ">
          سوپر<span className="font-extrabold">بلاگ</span>
        </p>
      </div>
      <nav>
        <ul className="flex gap-16">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">پست ها</a>
          </li>
          <li>
            <a href="#">نویسنده وبسایت</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
