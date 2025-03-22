import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const AuthChecker = () => {
  // this component will be used for re-fresh token authentication
  const dispatch = useDispatch();

  // checks if access token (jwt) exists on initial app render
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      // if exists, set token in state
      dispatch(setToken(access_token));
    }
  }, [dispatch]);

  return null;
};

export default AuthChecker;
