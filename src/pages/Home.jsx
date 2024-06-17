import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const { theme } = useContext(ThemeContext);

  const onSearch = async (e) => {
    e.preventDefault();
    try {
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
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong please try again later!",
      });
      console.log(error);
    }
  };

  const onCopy = (e) => {
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
        className={`flex-col py-10 items-center min-h-screen ${
          theme === "dark" ? "text-white bg-gray-800" : "text-black bg-slate-50"
        }`}
      >
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
          <div className="flex flex-col justify-center pb-4 mt-10 md:mt-4">
            <div className="flex justify-between px-4 sm:px-10 lg:px-40">
              <span className="text-center">Caption 👇</span>
              <button
                type="submit"
                className="w-max mb-3 bg-blue-600 text-white border-2 rounded border-gray-400 px-2 py-1 hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
            <textarea
              cols="30"
              rows="17"
              id="myTextarea"
              value={caption}
              disabled
              className="bg-gray-300 border-4 p-2 rounded-lg border-gray-500 text-black sm:mx-8 lg:mx-40"
            ></textarea>
          </div>
          {/* <div className="flex justify-center">
            <button
              type="submit"
              className="w-max mt-2 bg-blue-600 text-white border-2 rounded border-gray-400 px-2 py-1 hover:bg-blue-700"
            >
              Copy
            </button>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default Home;
