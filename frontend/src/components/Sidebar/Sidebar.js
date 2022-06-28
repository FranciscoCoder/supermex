import React from "react";
import { Link } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";

export default function Sidebar() {
  
  return (
    <div className={sidebarStyle.sidebar}>
      <ul>
        <li>
          <Link to={`/admin`}>Inicio</Link>
        </li>
        <li>
          <Link to={`/admin/recetas`}>Recetas</Link>
        </li>
        <li>
          <Link to={`/admin/noticias`}>Noticias</Link>
        </li>
        <li>
          <Link to={`/admin/productos`}>Productos</Link>
        </li>
      </ul>
    </div>
  );
}
