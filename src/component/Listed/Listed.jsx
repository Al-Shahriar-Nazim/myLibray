import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import MarkBook from "./MarkBook";

const Listed = () => {
  const [readList, setReadList] = useState([]);
  const [short, setShort] = useState("");

  const data = useLoaderData();
  //   console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData)
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks)
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId),
    );
    // console.log(myReadList)
    setReadList(myReadList);
    // console.log(myReadList)
  }, []);

  const handleShort = (type) => {
    setShort(type);
    if (type === "pages") {
      const shortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(shortByPage);
    } else if (type === "ratings") {
      const shortByRatings = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(shortByRatings);
      console.log(shortByRatings)
    }
  };

  return (
    <div className="my-10 min-h-screen">
      <div className="bg-gray-100 text-center p-5 mb-10 rounded-2xl shadow-md">
        <h3 className="text-3xl font-semibold my-10">Listed Books</h3>
      </div>
      {/* drop down */}
      <div className="dropdown mb-8">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95 mr-2"
        >
          Short By : {short ? short : ""}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleShort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleShort("ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List: {readList.length}</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((book) => (
              <MarkBook key={book.bookId} book={book}></MarkBook>
            ))}
          </div>
          {/* <MarkBook></MarkBook> */}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listed;
