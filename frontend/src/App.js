import React from "react";
import { Routes, Route } from "react-router-dom";
import Front from "./pages/Front";

import Login from "./pages/admin/Login/Login";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Front />} />
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <AuthProvider>
            
              <Dashboard />
          </AuthProvider>
        }
      />

    </Routes>
  );
}

export default App;
