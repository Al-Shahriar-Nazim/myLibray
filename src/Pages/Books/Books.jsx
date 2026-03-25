import React, { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const[allBooks,setAllBooks] = useState([]);
  // useState(()=>{
  //     fetch("booksData.json")
  //     .then(res=>res.json())
  //     .then(data=>{
  //         console.log(data)
  //         setAllBooks(data)
  //     })
  // },[])
//   console.log(data);
  return (
    <div className="mt-5 max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold text-center my-5 "> All Books</h3>
      <Suspense fallback={<h3>Loading..........</h3>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-8">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
