import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}?url=${url}`
    );
    if (res.status == 200) {
      const string = res.data.result;
      const result = string.slice(2, string.length - 1);

      setCaption(result);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong please try again later!",
      });
      console.log(res);
    }
  };

  const onCopy = async (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(caption)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Copied successfully",
        });
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to copy text to clipboard. Please try again!",
        });
      });
  };

  return (
    <>
      <div
        className={`flex-col items-center min-h-screen ${
          isDarkMode ? "text-white bg-gray-800" : "text-black bg-slate-50"
        }`}
      >
        <div className="flex flex-col-reverse items-end   pr-4">

          <button
            className="p-1 mt-2 bg-slate-300 rounded-md w-fit "
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/sun--v1.png"
                alt="sun--v1"
              />
            ) : (
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency-systems-filled/48/crescent-moon.png"
                alt="crescent-moon"
              />
            )}
          </button>
        </div>
        <h1 className="text-3xl font-serif text-center mt-4 sm:mt-0 font-bold">
          Copy Instagram post caption for free
        </h1>
        <form
          onSubmit={onSearch}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.instagram.com/p/example-post"
            className="border-4 px-2 sm:w-3/5 rounded-md text-2xl text-black mt-14 md:mt-8"
            required
          />

          <button
            type="submit"
            className="w-max mt-8 md:mt-4 bg-blue-500 text-white border-2 rounded border-gray-400 px-2 py-1 hover:bg-blue-700"
          >
            Search
          </button>
        </form>
        <form onSubmit={onCopy}>
          <div className="flex flex-col justify-center mt-10 md:mt-4">
            <span className="text-center mb-3">Caption 👇</span>
            <textarea
              cols="30"
              rows="17"
              id="myTextarea"
              value={caption}
              disabled
              className="bg-gray-300 border-4 p-2 rounded-lg border-gray-500 text-black sm:mx-8 lg:mx-40"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-max mt-2 bg-blue-600 text-white border-2 rounded border-gray-400 px-2 py-1 hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
