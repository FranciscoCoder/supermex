import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";
import { takeRole } from "../Utils";

export default function Sidebar() {
  const role = takeRole();

  const navigate = useNavigate();
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
        {(role==='ROLE_SUPERADMIN'||role==='ROLE_ADMIN')
        ? (<li><Link to={`/admin/contactos`}>Contactos</Link></li>)
        : ""}
      
        {role==='ROLE_SUPERADMIN'
        ? (<li><Link to={`/admin/usuarios`}>Usuarios</Link></li>)
        : ""}
        <li>
          <button type="button" onClick={()=>{
            localStorage.removeItem("token");
            navigate(`/admin/login`, { replace: true });
          }} >Desconectar</button>
        </li>
      </ul>
    </div>
  );
}
