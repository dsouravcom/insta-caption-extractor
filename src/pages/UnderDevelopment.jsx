import { useState } from "react";
import Swal from "sweetalert2";

const UnderDevelopment = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Thank you!",
        text: "We'll notify you when we launch!",
        icon: "success",
      });
      event.target.reset();
      setLoading(false);
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
      });
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Coming Soon!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Our website is under construction. We&apos;ll be back soon!
            </p>
            <form
              className="flex flex-col md:flex-row justify-center items-center gap-4"
              onSubmit={onSubmit}
            >
              <input
                className="w-full md:w-80  py-2 px-4 border text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border dark:bg-blue-800">
                {loading ? "Sending..." : "Notify Me"}
              </button>
            </form>
            <div className="flex justify-center "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
