import { useState } from "react";
import { Link } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../ui/Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-2xl text-[#3B3C4A] font-medium pt-12 relative z-50">
      <div className="container flex justify-between items-center relative">
        {/* Site logo */}
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Logo />
        </Link>

        {/* Hamburger icon */}
        <button
          className="hidden lg:block text-4xl text-[#3B3C4A] focus:outline-none hover:text-primary hover:scale-110 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>

        {/* Desktop navigation */}
        <nav className="flex lg:hidden gap-8">
          <Link
            to="/new"
            className="hover:text-primary hover:scale-105 transition-all duration-300"
          >
            یکی بساز
          </Link>
          <Link
            to="/"
            className="hover:text-primary hover:scale-105 transition-all duration-300"
          >
            پست‌ها
          </Link>
          <Link
            to="/edit"
            className="hover:text-primary hover:scale-105 transition-all duration-300"
          >
            ویرایش
          </Link>
        </nav>
      </div>

      {/* Mobile iOS-style dropdown */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full
          bg-white bg-opacity-95 backdrop-blur-sm
          flex flex-col items-center justify-center
          gap-8
          transform transition-all duration-300 ease-out
          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          z-40
        `}
      >
        <Link
          to="/new"
          className="text-3xl font-semibold hover:text-primary hover:scale-105 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          یکی بساز
        </Link>
        <Link
          to="/"
          className="text-3xl font-semibold hover:text-primary hover:scale-105 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          پست‌ها
        </Link>
        <Link
          to="/edit"
          className="text-3xl font-semibold hover:text-primary hover:scale-105 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          ویرایش
        </Link>
      </div>
    </header>
  );
};

export default Header;
