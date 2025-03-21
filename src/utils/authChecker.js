import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const AuthChecker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch(setToken(access_token));
    }
  }, [dispatch]);

  return null;
};

export default AuthChecker;
