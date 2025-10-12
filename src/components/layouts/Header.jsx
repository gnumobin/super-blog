import Logo from "../ui/Logo";

const Header = () => {
  return (
    <header className=" text-2xl text-[#3B3C4A] font-medium pt-12">
      <div className="container flex justify-between items-center">
        <Logo />
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
      </div>
    </header>
  );
};

export default Header;
