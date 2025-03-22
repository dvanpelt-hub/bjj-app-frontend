import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SearchCoaches from "../pages/search-coaches";
import Coach from "../pages/coach";
import Register from "../pages/register";
import Login from "../pages/login";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthChecker from "../utils/authChecker"

const BJJRouter = () => {
  return (
    <>
      <AuthChecker /> {/* check jwt */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/search-coaches"
          element={
            <ProtectedRoute>
              <SearchCoaches />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/coach/:id"
          element={
            <ProtectedRoute>
              <Coach />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default BJJRouter;
