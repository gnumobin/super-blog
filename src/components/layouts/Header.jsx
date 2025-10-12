import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../ui/Logo";

const Header = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "پست‌ها", to: "/" },
    { name: "یکی بساز", to: "/new" },
    { name: "ویرایش", to: "/edit" },
  ];

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `a[href='${location.pathname}']`
    );
    if (!activeLink) return;

    const currentLeft = highlightStyle.left;
    const currentWidth = highlightStyle.width;
    const targetLeft = activeLink.offsetLeft;
    const targetWidth = activeLink.offsetWidth;

    setHighlightStyle({
      left: Math.min(currentLeft, targetLeft),
      width:
        Math.max(currentLeft + currentWidth, targetLeft + targetWidth) -
        Math.min(currentLeft, targetLeft),
    });

    const timeout = setTimeout(() => {
      setHighlightStyle({
        left: targetLeft,
        width: targetWidth,
      });
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <header className="text-2xl text-[#3B3C4A] font-medium pt-12 relative z-50">
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="flex lg:hidden gap-6 relative">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-semibold relative z-10 px-4 py-2 rounded-lg transition-all duration-300 text-[#3B3C4A] hover:scale-105 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          <span
            className="absolute top-0 h-full bg-primary/30 rounded-xl transition-all duration-300"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </nav>

        {/* Hamburger icon (mobile) */}
        <button
          className="hidden lg:block text-4xl text-[#3B3C4A] focus:outline-none hover:text-primary hover:scale-110 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full
          bg-white bg-opacity-95 backdrop-blur-sm
          flex flex-col items-center justify-center gap-8
          transform transition-all duration-300 ease-out
          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          z-40
        `}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-3xl font-semibold hover:text-primary hover:scale-105 transition-all duration-300 ${
              location.pathname === link.to ? "text-primary scale-105" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
