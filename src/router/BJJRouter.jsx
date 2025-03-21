import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SearchCoaches from "../pages/search-coaches";
import Coach from "../pages/coach";
import Register from "../components/Register"
import Login from "../components/Login"
import ProtectedRoute from "../components/ProtectedRoute";

const BJJRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/search-coaches" element={<SearchCoaches />}></Route>
      <Route path="/coach/:id" element={<Coach />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default BJJRouter;
