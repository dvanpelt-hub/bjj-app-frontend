import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SearchCoaches from "../pages/search-coaches";
import Coach from "../pages/coach";

const BJJRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search-coaches" element={<SearchCoaches />}></Route>
      <Route path="/coach/:id" element={<Coach />}></Route>
    </Routes>
  );
};

export default BJJRouter;
