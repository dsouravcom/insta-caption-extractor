import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <footer
            className={`flex items-center justify-center py-1 shadow-lg ${
                theme === "dark" ? "text-white bg-gray-900" : "text-black bg-slate-200"
            }`}>
            <p className="text-center text-lg">
                Built by 
                <a 
                    href="https://dsourav.com" 
                    className="ml-1 underline hover:text-blue-500 transition duration-300"
                >
                    SOURAV
                </a>
            </p>
        </footer>
    );
}

export default Footer;
