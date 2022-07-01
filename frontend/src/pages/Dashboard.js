import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Inicio from "./admin/Inicio/Inicio";
import Recetas from "./admin/Recetas/Recetas";
import Receta from "./admin/Receta/Receta";
import Noticias from "./admin/Noticias/Noticias";
import Noticia from "./admin/Noticia/Noticia";
import Contactos from "./admin/Contactos/Contactos";
import styleDashboard from "./Dashboard.module.css";
import {backgroundColorBody} from '../components/Utils';
import NoConexion from "./admin/NoConexion/NoConexion";



function Dashboard() {

    backgroundColorBody('fondoDashboard');
    return (
    <Routes>
        <Route index element={<LayoutAdmin />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/receta" element={<Receta />} />
          <Route path="/receta/:slug" element={<Receta />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticia" element={<Noticia />} />
          <Route path="/noticia/:slug" element={<Noticia />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/error-conexion" element={<NoConexion />} />
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