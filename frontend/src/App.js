import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Producto from "./pages/Producto";
import Recetas from "./pages/Recetas";
import Receta from "./pages/Receta";
import Horeca from "./pages/Horeca";
import LaTribu from "./pages/LaTribu";
import Calidad from "./pages/Calidad";
import LaHoguera from "./pages/LaHoguera";
import Contacto from "./pages/Contacto";
import NoEncontrada from "./pages/NoEncontrada";
import Footer from "./components/Footer";
import "./App.css";
//import Login from "./pages/admin/Login/Login";


function App() {
  return (
    <Routes>
      <Route path="/es" element={<Layout lang="es" />}>
        <Route index element={<Inicio lang="es" />} />
        <Route path="/es/productos" element={<Productos lang="es" />}>
          <Route path=":categoriaId" element={<Productos lang="es" />} />
        </Route>
        <Route path="/es/producto/:productoId" element={<Producto lang="es" />} />
        <Route path="/es/recetas" element={<Recetas lang="es" />}>
          <Route path=":categoriaId" element={<Recetas lang="es" />} />
        </Route>
        <Route path="/es/receta/:recetaId" element={<Receta lang="es" />} />
        <Route path="/es/horeca" element={<Horeca lang="es" />} />
        <Route path="/es/la-tribu" element={<LaTribu lang="es" />} />
        <Route path="/es/calidad" element={<Calidad lang="es" />} />
        <Route path="/es/la-hoguera" element={<LaHoguera lang="es" />} />
        <Route path="/es/contacto" element={<Contacto lang="es" />} />
        <Route path="*" element={<NoEncontrada lang="es" />} />
      </Route>
      <Route path="/en" element={<Layout lang="en" />}>
        <Route index element={<Inicio lang="en" />} />
        <Route path="/en/products" element={<Productos lang="en" />}>
          <Route path=":categoriaId" element={<Productos lang="en" />} />
        </Route>
        <Route path="/en/product/:productoId" element={<Producto lang="en" />} />
        <Route path="/en/recipes" element={<Recetas lang="en" />}>
          <Route path=":categoriaId" element={<Recetas lang="en" />} />
        </Route>
        <Route path="/en/recipe/:recetaId" element={<Receta lang="en" />} />
        <Route path="/en/horeca" element={<Horeca lang="en" />} />
        <Route path="/en/the-tribe" element={<LaTribu lang="en" />} />
        <Route path="/en/quality" element={<Calidad lang="en" />} />
        <Route path="/en/the-bonfire" element={<LaHoguera lang="en" />} />
        <Route path="/en/contact" element={<Contacto lang="en" />} />
        <Route path="*" element={<NoEncontrada lang="en" />} />
      </Route>
      {/* <Route path="/admin">
        <Route element={<Login />} />
      </Route> */}
      <Route path="/" element={<Navigate replace to="/es" />} />
      <Route path="*" element={<NoEncontrada lang="en" />} />
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

export default App;
