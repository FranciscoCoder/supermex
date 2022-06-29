import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Receta() {
  const params = useParams('');
  
  let tituloApartado='Nueva receta';

  // const [formValues, setFormValues] = useState({ nombre: "", ingredientes: "", descripcion: "", activo: "0", idioma: "1", imagen: ""});
  // const handleInputChange = (e) => {
  //   //Ingresamos los campos del formulario
  //   setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(JSON.stringify(formValues));
  //   // fetch('http://127.0.0.1:8080/api/recipe',{
  //   //   method: "POST",
  //   //   body: JSON.stringify(formValues),
  //   //   headers: {
  //   //     'Content-Type': 'multipart/form-data',
  //   //   },
  //   // })
  //   // .then((res) => res.json())
  //   // .then((data) => {
  //   //   console.log(data.result);
  //   //     // if(data.resultado=="ok"){
  //   //     //     //setEstadoEnvio(true);
  //   //     // }
  //   // });
  // };
  
  // // if ((params.recetaSlug !== "")&&(params.recetaSlug !== undefined)) {
  // //   tituloApartado='Editar receta';
  // //   fetch(`http://127.0.0.1:8080/api/recipes/${params.recetaSlug}`, {
  // //     method: "GET",
  // //     headers: {
  // //       "Content-Type": "application/json",
  // //     },
  // //   })
  // //   .then((res) => res.json())
  // //   .then((data) => {
  // //     console.log(data.result);
  // //     setFormValues((prev) => ({...prev, nombre: data.result.nombre, ingredientes: data.result.ingredientes, descripcion: data.result.descripcion}))
  // //   });
  // // }

  // //Rellenamos el campos idioma segun api languages
  // fetch('http://127.0.0.1:8080/api/languages',{
  //   method: 'GET', // or 'PUT'
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => response.json())
  // .then((data) => {
  //     data.result.map((idioma)=>{
  //         var option = document.createElement("option");
  //         option.text = idioma.abreviatura.toUpperCase();
  //         option.value = idioma.id;
  //         document.querySelector('#idiomaReceta').appendChild(option);
  //     })
  //   }
  // )
  // .catch(error => console.log(error));

  return (
    <>
      <div className={styleDashboard.contentHeader}>
        <h1>{tituloApartado}</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <form onSubmit={(e)=>{
          e.preventDefault();
        }} encType='multipart/form-data'>
          <div className={styleDashboard.botonesDerecha}>
            <a href="/admin/recetas" className={styleDashboard.botonVolver}>Cancelar</a>
            <button className={styleDashboard.botonGuardar} type="submit">Guardar</button>
          </div>
            <div className={styleDashboard.agrupacion}>
              <div className={styleDashboard.grupoCampo}>
                <label htmlFor="idiomaReceta">Idioma</label>
                <select id="idiomaReceta" name="idioma" onChange={(e)=>{e.preventDefault()}} required>
                  <option value=''>Seleccione un idioma</option>
                </select>
              </div>
              <div className={styleDashboard.grupoCampo}>
                <label htmlFor="activoReceta">Estado</label>
                <select id="activoReceta" name="activo" onChange={(e)=>{e.preventDefault()}} required>
                  <option value=''>Seleccione un estado</option>
                  <option value='1'>Visible</option>
                  <option value='0'>No visible</option>
                </select>
              </div>
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="nombreReceta">Nombre receta</label>
              <input type="text" id="nombreReceta" name="nombre" placeholder="Nombre receta" onChange={(e)=>{e.preventDefault()}} />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="ingredientesReceta">Ingredientes</label>
              <textarea id="ingredientesReceta" name="ingredientes"  placeholder="Ingredientes" onChange={(e)=>{e.preventDefault()}} />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="descripcionReceta">Descripción</label>
              <textarea id="descripcionReceta" name="descripcion" placeholder="Descripcion" onChange={(e)=>{e.preventDefault()}} />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="imagenReceta">Imagen</label>
              <input id="imagenReceta" type="file" name="imagen" onChange={(e)=>{e.preventDefault()}} accept="image/*" />
            </div>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/recetas" className={styleDashboard.botonVolver}>Cancelar</a>
              <button className={styleDashboard.botonGuardar} type="submit">Guardar</button>
            </div>
        </form>
      </div>
    </>
  );
}
