import React from "react";
import { Link } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";

export default function Sidebar() {
  
  return (
    <div className={sidebarStyle.sidebar}>
      <ul>
        <li>
          <Link to={`/admin/inicio`}>Inicio</Link>
        </li>
        <li>
          <Link to={`/admin/recetas`}>Recetas</Link>
        </li>
        <li>
          <Link to={`/admin/noticias`}>Noticias</Link>
        </li>
        <li>
          <Link to={`/admin/contactos`}>Contactos</Link>
        </li>
        <li>
          <Link to={`/admin/usuarios`}>Usuarios</Link>
        </li>
        <li>
          <button type="button" onClick={()=>{
            localStorage.removeItem("token");
            window.location.href="/admin/login";
          }} >Desconectar</button>
        </li>
      </ul>
    </div>
  );
}
