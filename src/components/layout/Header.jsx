import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import goldenlogo from "../../assets/logo (2).png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المشاريع", path: "/projects" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      dir="rtl"
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            flex items-center justify-between
            transition-all duration-500
            ${isScrolled ? "h-20" : "h-24"}
          `}
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={goldenlogo}
              alt="Golden Coast"
              className={`
                w-auto object-contain
                transition-all duration-500
                ${isScrolled ? "h-16" : "h-20"}
              `}
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
            relative
            text-[15px]
            font-semibold
           text-[#B37202]
            transition-all
            duration-300

            after:absolute
            after:-bottom-2
            after:right-0
            after:h-[2px]
            after:bg-amber-500
            after:transition-all
            after:duration-300

            ${
              isActive
                ? "after:w-full hover:text-white"
                : "after:w-0 hover:text-white hover:after:w-full"
            }
          `
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded
                border-2
                border-[#B37202]
                bg-[#B37202]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#B37202]
              "
            >
              استكشف الان
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
              transition-colors
              duration-300
              ${
                isScrolled
                  ? "text-[#B37202]"
                  : "text-white hover:text-[#B37202]"
              }
            `}
            aria-label="فتح القائمة"
          >
            {isOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`
              md:hidden
              px-4
              py-5
              shadow-xl
              transition-colors
              duration-300
              ${isScrolled ? "bg-white" : "bg-[#0D1927]/95 backdrop-blur-md"}
            `}
          >
            <ul className="flex flex-col items-center gap-2 text-center">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `
                        block
                        w-full
                        px-4
                        py-3
                        font-medium
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-[#B37202]"
                            : isScrolled
                              ? "text-[#B37202]"
                              : "text-white hover:text-[#B37202]"
                        }
                      `
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              <li className="w-full pt-3">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    w-full
                    rounded
                    border-2
                    border-[#B37202]
                    bg-[#B37202]
                    px-4
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-[#B37202]
                  "
                >
                  استكشف الان
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
