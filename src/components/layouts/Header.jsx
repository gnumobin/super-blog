import { Link } from "react-router";
import Logo from "../ui/Logo";

const Header = () => {
  return (
    <header className=" text-2xl text-[#3B3C4A] font-medium pt-12">
      <div className="container flex justify-between items-center">
        <Logo />
        <nav className="lg:hidden">
          <ul className="flex gap-16">
            <li>
              <Link to={"/new"}>یکی بساز</Link>
            </li>
            <li>
              <Link to={"/"}>پست ها</Link>
            </li>
            <li>
              <Link to={"/edit"}>ویرایش</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
