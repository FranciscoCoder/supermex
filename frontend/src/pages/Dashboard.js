import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./admin/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Inicio from "./admin/Inicio/Inicio";
import Recetas from "./admin/Recetas/Recetas";
import Receta from "./admin/Receta/Receta";
import Noticias from "./admin/Noticias/Noticias";
import Noticia from "./admin/Noticia/Noticia";
import Productos from "./admin/Productos/Productos";
import Producto from "./admin/Producto/Producto";
import Contactos from "./admin/Contactos/Contactos";
import styleDashboard from "./Dashboard.module.css";
import {backgroundColorBody} from '../components/Utils';


function Dashboard() {

    backgroundColorBody('fondoDashboard');
    return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LayoutAdmin />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/receta" element={<Receta />} />
        <Route path="/receta/:recetaSlug" element={<Receta />} />
        <Route path="/noticias" element={<Noticias />}>
          <Route path=":noticiaId" element={<Noticia />} />
        </Route>
        <Route path="/productos" element={<Productos />}>
          <Route path=":productoId" element={<Producto />} />
        </Route>
        <Route path="/contactos" element={<Contactos />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/admin/inicio" />} />
    </Routes>
    );
  }
  
  function LayoutAdmin() {
    return (
      <div className={styleDashboard.estiloBody}>
        <Sidebar/>
        <div className={styleDashboard.content}>
          <Outlet />
        </div>
      </div>
    );
  }


  export default Dashboard;