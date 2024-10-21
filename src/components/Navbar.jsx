import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import CoffeeLogo from "../assets/coffee.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`shadow ${
        theme === "dark" ? "text-white bg-gray-800" : "text-black bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <img src="/favicon.ico" alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8 ml-4">
              <Link
                to={"/"}
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to={"/support"}
                className="px-3 py-2 rounded-md text-sm font-medium flex gap-3 border"
              >
                Support This Website <img src={CoffeeLogo} alt="support" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <button
              onClick={toggleTheme}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                theme === "dark"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-400 text-black"
              }`}
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-xl font-medium">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <Link
              to={"/"}
              className="block px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={"/support"}
              className=" px-3 py-2 rounded-md text-sm font-medium flex gap-3 border"
            >
              Support This Website <img src={CoffeeLogo} alt="support" />
            </Link>
            <button
              onClick={toggleTheme}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium my-2 ${
                theme === "dark"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-400 text-black"
              }`}
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="mr-2"
              />
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
