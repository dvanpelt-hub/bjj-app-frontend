import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SearchCoaches from "../pages/search-coaches";
import Coach from "../pages/coach";
import About from "../pages/about";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Requests from "../pages/requests";
import Login from "../pages/login";
import MyAccount from "../pages/myAccount";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthChecker from "../utils/authChecker";

const BJJRouter = () => {
  return (
    <>
      <AuthChecker /> {/* check jwt */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/search-coaches" element={<SearchCoaches />}></Route>
        <Route
          path="/coach/:id"
          element={
            <ProtectedRoute>
              <Coach />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/my-account" element={<MyAccount />}></Route>
      </Routes>
    </>
  );
};

export default BJJRouter;
