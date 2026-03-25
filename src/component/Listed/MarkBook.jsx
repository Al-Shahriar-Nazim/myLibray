import React from "react";

const MarkBook = ({ book }) => {
  // console.log(book)
  const { image, bookName, author, tags,yearOfPublishing ,publisher,totalPages,category,rating} = book;
  return (
    <div className="w-full md:max-w-6xl mt-8 border mx-auto bg-white rounded-xl shadow-md p-4 md:p-6 flex gap-6 items-center hover:shadow-lg transition">
      {/* Book Image */}
      <div className="bg-gray-100 p-3 rounded-lg">
        <img
          src={image}
          alt="book"
          className="w-24 h-32 object-cover rounded"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-xl font-semibold">{bookName}</h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-2">By : {author}</p>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-3 text-sm items-center mb-3">
          <span>Tag</span>
          {tags.map((tag) => (
            <span className="text-green-600">#{tag}</span>
          ))}

          <span className="ml-4 text-gray-500">📅 Year: {yearOfPublishing}</span>
        </div>

        {/* Info Row */}
        <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-4">
          <span>👤 Publisher: {publisher}</span>
          <span>📄 Page: {totalPages}</span>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            Category: {category}
          </span>

          <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm">
            Rating: {rating} ⭐
          </span>

          <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkBook;
