import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);
  const { bookName, author, image, tags, rating, category,bookId} = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-3 md:p-5 bg-white rounded-2xl shadow-md  transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[80%] md:w-full mx-auto">
        {/* Image */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center h-40 mb-4">
          <img
            src={image}
            alt="Book"
            className="h-32 rounded-lg object-contain transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-2 text-sm">
          {tags.map((tag) => (
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-semibold text-lg mb-1">{bookName}</h2>

        {/* Author */}
        <p className="text-gray-500 text-sm mb-3">By : {author}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{category}</span>
          <span className="flex items-center gap-1">{rating} ⭐</span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
