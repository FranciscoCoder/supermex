import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./admin/Login/Login";


function Dashboard() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
  
  export default Dashboard;