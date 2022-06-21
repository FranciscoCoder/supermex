import React from "react";
import { Routes, Route} from "react-router-dom";
import Front from "./pages/Front";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Routes>
        <Route path="/*" element={<Front />} />
        <Route path="/admin/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;