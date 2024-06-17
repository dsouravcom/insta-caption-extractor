import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// assets import
import KofiDark from "../assets/kofi_dark.webp";
import KofiLight from "../assets/kofi_white.webp";

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen py-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Support this Website
        </h1>
        <p className="text-lg mb-4">
          Hi, I&apos;m Sourav. I created this website initially for my own use,
          but I&apos;m delighted that many others find it helpful too. I strive
          to keep the experience enjoyable and free from annoying ads.
        </p>
        <br />
        <p>
          Maintaining and improving the site does come with costs, and I&apos;m
          not in a position to cover them all on my own. If you appreciate the
          site and would like to support its continued operation, you can help
          out by buying me a coffee.
        </p>
        <br />
        <br />
        <p>Your support will help me:</p>
        <br />
        <ul className="list-disc list-inside mb-4">
          <li>Keep the site running smoothly</li>
          <li>Continue to add new features</li>
          <li>Improve the site&apos;s performance</li>
        </ul>
        <div>
          <a href="https://ko-fi.com/dsourav">
            <img
              src={theme === "dark" ? KofiLight : KofiDark}
              alt="Ko-fi support link"
              className="w-36"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
