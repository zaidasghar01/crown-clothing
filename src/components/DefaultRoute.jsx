import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user.selector";
import Home from "../routes/home/home";
const DefaultRoute = () => {
  const currentUser = useSelector(selectCurrentUser);
  return !currentUser ? <Outlet /> : <Home />;
};

export default DefaultRoute;
