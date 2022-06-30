import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticia() {
  const params = useParams('');
  
  let tituloApartado='Nueva noticia';
  const [registerId, setRegisterId] = useState('');
  const [operation, setOperation] = useState('new');
  const [formValues, setFormValues] = useState({ nombre: "", descripcion: "", activo: "0", imagen: ""});
  const handleInputChange = (e) => {
    //Ingresamos los campos del formulario
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(JSON.stringify(formValues));
    let methodState='POST';
    if(operation==='edit'){
      methodState="PUT";
    }

    fetch(`http://127.0.0.1:8080/api/new/${registerId}`,{
      method: methodState,
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
        if(data.result=="ok"){
          window.location.href="/admin/noticias";
        }
    });
  };

  const consultaEdicion = (valor) =>{
      fetch(`http://127.0.0.1:8080/api/news/${valor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((data) => {
          setRegisterId(data.result[0].id);
          setFormValues((prev) => ({...prev, nombre: data.result[0].nombre, ingredientes: data.result[0].ingredientes, descripcion: data.result[0].descripcion}))
      })
      .catch((error)=>console.log(error));
  }
  
  useEffect(() => {
  if ((params.recetaSlug !== "")&&(params.recetaSlug !== undefined)) {
    tituloApartado='Editar receta';
    setOperation('edit');
    consultaEdicion(params.recetaSlug);
  }
},[]);

  //Rellenamos el campos idioma segun api languages
  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/languages',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
        data.result.map((idioma)=>{
            var option = document.createElement("option");
            option.text = idioma.abreviatura.toUpperCase();
            option.value = idioma.id;
            document.querySelector('#idiomaNoticia').appendChild(option);
        })
      }
    )
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className={styleDashboard.contentHeader}>
        <h1>{tituloApartado}</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className={styleDashboard.botonesDerecha}>
            <a href="/admin/noticias" className={styleDashboard.botonVolver}>Cancelar</a>
            <button className={styleDashboard.botonGuardar} type="submit">Guardar</button>
          </div>
            <div className={styleDashboard.agrupacion}>
              <div className={styleDashboard.grupoCampo}>
                <label htmlFor="idiomaNoticia">Idioma</label>
                <select id="idiomaNoticia" name="idioma" onChange={handleInputChange} required>
                  <option value=''>Seleccione un idioma</option>
                </select>
              </div>
              <div className={styleDashboard.grupoCampo}>
                <label htmlFor="activoNoticia">Estado</label>
                <select id="activoNoticia" name="activo" onChange={handleInputChange} required>
                  <option value=''>Seleccione un estado</option>
                  <option value='1'>Visible</option>
                  <option value='0'>No visible</option>
                </select>
              </div>
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="nombreNoticia">Nombre</label>
              <input type="text" id="nombreNoticia" name="nombre" placeholder="Nombre" onChange={handleInputChange} defaultValue={formValues.nombre} />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="descripcionNoticia">Descripción</label>
              <textarea id="descripcionNoticia" name="descripcion" placeholder="Descripcion" onChange={handleInputChange}  defaultValue={formValues.descripcion} />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="imagenNoticia">Imagen</label>
              <input id="imagenNoticia" type="file" name="imagen" onChange={handleInputChange} accept="image/*" />
            </div>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/noticias" className={styleDashboard.botonVolver}>Cancelar</a>
              <button className={styleDashboard.botonGuardar} type="submit">Guardar</button>
            </div>
        </form>
      </div>
    </>
  );
}
