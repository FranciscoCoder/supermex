import React, { useContext } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute(props) {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/admin/login" replace />;

  return props.children;
}
