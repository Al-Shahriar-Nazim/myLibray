import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();

  // console.log(id)
  const data = useLoaderData();
  // console.log(data)
  const bookId = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook)

  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  // add to db
  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    addToStoredDB(id);
  };
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-8">
      {/* Left Image */}
      <div className="flex justify-center items-center bg-gray-100 p-6 rounded-xl">
        <img src={image} alt="Book" className="w-48 object-cover" />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">{bookName}</h1>
        <p className="text-gray-500 mb-4">By : {author}</p>

        <p className="text-sm text-gray-600 mb-4">{category}</p>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Review :</strong> {review}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="text-sm text-gray-600 space-y-1 mb-6">
          <p>
            <strong>Number of Pages:</strong> {totalPages}
          </p>
          <p>
            <strong>Publisher:</strong>
            {publisher}
          </p>
          <p>
            <strong>Year of Publishing:</strong> {yearOfPublishing}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Mark As Read
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
