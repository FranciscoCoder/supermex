import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import inicioStyle from "./Receta.module.css";
import styleDashboard from "../../Dashboard.module.css";

export default function Receta() {
  const params = useParams('');
  
  let nombre='';
  let activo=0;
  let ingredientes='';
  let descripcion='';

  const [formValues, setFormValues] = useState({ nombre: "", ingredientes: "", descripcion: "", activo: "0", imagen: ""});
  const handleInputChange = (e) => {
    //Ingresamos los campos del formulario
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
    // //Comprobacion del campo tipo checkbox
    // if(e.target.checked){
    //     setFormValues((prev) => ({...prev, [e.target.name]: e.target.value }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(JSON.stringify(formValues));
    fetch('http://127.0.0.1:8080/api/recipe',{
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        // if(data.resultado=="ok"){
        //     //setEstadoEnvio(true);
        // }
    });
  };
  
  if ((params.recetaSlug != "")&&(params.recetaSlug != undefined)) {
    fetch(`http://127.0.0.1:8080/api/recipes/${params.recetaSlug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setFormValues((prev) => ({...prev, nombre: data[0].nombre, ingredientes: data[0].ingredientes, descripcion: data[0].descripcion}))
    });
  }

  return (
    <div>
      <div className={styleDashboard.contentHeader}>
        <h1>Nueva receta</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <Link to={`/admin/recetas/`}>Volver</Link>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
              <label htmlFor="nombreReceta">Nombre receta</label>
              <input type="text" id="nombreReceta" name="nombre" placeholder="Nombre receta" onChange={handleInputChange} defaultValue={formValues.nombre} />
            </div>
            <div>
              <label htmlFor="ingredientesReceta">Ingredientes</label>
              <textarea id="ingredientesReceta" name="ingredientes"  placeholder="Ingredientes" onChange={handleInputChange} defaultValue={formValues.ingredientes}></textarea>
            </div>
            <div>
              <label htmlFor="descripcionReceta">Descripción</label>
              <textarea id="descripcionReceta" name="descripcion" placeholder="Descripcion" onChange={handleInputChange} defaultValue={formValues.descripcion}></textarea>
            </div>
            <div>
              <label htmlFor="imagenReceta">Imagen</label>
              <input id="imagenReceta" type="file" name="imagen" onChange={handleInputChange} />
            </div>
            <div>
              <button type="submit">Guardar</button>
              <a href="/admin/recetas">Cancelar</a>
            </div>
        </form>
      </div>
    </div>
  );
}
