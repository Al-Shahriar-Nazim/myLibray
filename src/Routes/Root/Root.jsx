import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/Header/Navbar";
import Footer from "../../component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
