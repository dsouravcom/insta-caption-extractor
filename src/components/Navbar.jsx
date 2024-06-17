import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
