import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Inicio from "./Inicio/Inicio";
import Productos from "./Productos/Productos";
import Recetas from "./Recetas/Recetas";
import Receta from "./Receta/Receta";
import LaTribu from "./LaTribu/LaTribu";
import Calidad from "./Calidad/Calidad";
import LaHoguera from "./LaHoguera/LaHoguera";
import Post from "./Post/Post";
import Contacto from "./Contacto/Contacto";
import NoEncontrada from "./NoEncontrada/NoEncontrada";
import Enviado from "./Enviado/Enviado";
import NoEnviado from "./NoEnviado/NoEnviado";
import AvisoLegal from "./AvisoLegal/AvisoLegal";
import PoliticaPrivacidad from "./PoliticaPrivacidad/PoliticaPrivacidad";
import Footer from "../components/Footer/Footer";

function Front() {
    return (
      <Routes>
        <Route path="/es" element={<Layout lang="es" />}>
          <Route index element={<Inicio lang="es" />} />
          <Route path="/es/productos" element={<Productos lang="es" />} />
          <Route path="/es/recetas" element={<Recetas lang="es" />} />
          <Route path="/es/receta/:slug" element={<Receta lang="es" />} />
          <Route path="/es/la-tribu" element={<LaTribu lang="es" />} />
          <Route path="/es/calidad" element={<Calidad lang="es" />} />
          <Route path="/es/la-hoguera" element={<LaHoguera lang="es" />} />
          <Route path="/es/post/:slug" element={<Post lang="es" />} />
          <Route path="/es/contacto" element={<Contacto lang="es" />} />
          <Route path="/es/enviado" element={<Enviado lang="es" />} />
          <Route path="/es/aviso-legal" element={<AvisoLegal lang="es" />} />
          <Route path="/es/politica-de-privacidad" element={<PoliticaPrivacidad lang="es" />} />
          <Route path="/es/no-enviado" element={<NoEnviado lang="es" />} />
          <Route path="*" element={<NoEncontrada lang="es" />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/es" />} />
        <Route path="*" element={<NoEncontrada lang="es" />} />
      </Routes>
    );
  }
  
  function Layout(props) {
    return (
      <div>
        <Header lang={props.lang}/>
        <div>
          <Outlet />
        </div>
        <Footer lang={props.lang} />
      </div>
    );
  }
  
  export default Front;