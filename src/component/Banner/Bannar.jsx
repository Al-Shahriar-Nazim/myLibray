import React from "react";
import hero from "../../assets/hero_img.jpg"

const BookBanner = () => {
  return (
    <div className=" my-10 border-2 border-none bg-gray-100 p-10 flex flex-col md:flex-row items-center justify-between rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Left Content */}
      <div className="transition-all duration-500 hover:translate-x-2">
        <h1 className="text-3xl font-semibold mb-6">
          Books to freshen up your bookshelf
        </h1>

        <button className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
          View The List
        </button>
      </div>

      {/* Right Image */}
      <div className="transition-all duration-500 hover:-translate-y-2 mt-5 md:mt-0">
        <img
          src={hero}
          alt="Book"
          className="w-full md:w-[200px] h-[200px] rounded-2xl transition-all duration-300 hover:rotate-3 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default BookBanner;