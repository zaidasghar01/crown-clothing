import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";

const ProtectedRoutes = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoutes;
