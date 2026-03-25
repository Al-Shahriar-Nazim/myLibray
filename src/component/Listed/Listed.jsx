import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import MarkBook from "./MarkBook";

const Listed = () => {
  const [readList, setReadList] = useState([]);

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
  return (
    <div className="my-10 min-h-screen">
        <div className="bg-gray-100 text-center p-5 mb-10 rounded-2xl shadow-md">
            <h3 className="text-3xl font-semibold my-10">Listed Books</h3>
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
