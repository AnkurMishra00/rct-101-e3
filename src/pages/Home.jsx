import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Home = () => {
  return <div>
    <Navbar />
    <div>
      <Routes>
        <Route path="../" element= {<div><Products /></div>}></Route>
      </Routes>
    </div>
  </div>;
};

export default Home;
