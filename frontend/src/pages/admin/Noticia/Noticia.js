import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticia() {
  const params = useParams("");
  const navigate = useNavigate();
  const [tituloApartado, setTituloApartado] = useState("Nueva noticia");
  const [imagenNoticia, setImagenNoticia] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [operation, setOperation] = useState("new");
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    activo: 0,
    imagen: "",
    idioma: 1,
  });

  //Rellenamos el campos idioma segun api languages
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/languages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.result.map((idioma) => {
          var option = document.createElement("option");
          option.text = idioma.abreviatura.toUpperCase();
          option.value = idioma.id;
          document.querySelector("#idiomaNoticia").appendChild(option);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Funcion para actualizar los useState correspondiente a cada input
  const handleInputChange = (e) => {
    //Ingresamos los campos del formulario
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Funcion para insertar o modificar el registro al endpoint POST / PUT
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nombre", formValues.nombre);
    formData.append("descripcion", formValues.descripcion);
    formData.append("activo", formValues.activo);
    formData.append("idioma", formValues.idioma);

    let methodState = "POST";
    if (operation === "edit") {
      methodState = "PUT";
      formData=JSON.stringify(formValues);
    } else {
      formData.append("imagen", e.target.imagen.files[0]);
    }

    fetch(`http://127.0.0.1:8080/api/new/${registerId}`, {
      // method: methodState,
      // body: JSON.stringify(formValues),
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      method: methodState,
      body: formData,
      headers: {
        enctype: "multipart/form-data",
        "Authorization": 'Bearer '+ localStorage.getItem('token')
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "ok") {
          navigate(`/admin/noticias`, { replace: true });
        }
      });
  };

  //Funcion para consultar el registro en el caso de editar
  const consultaEdicion = (valor) => {
    if (valor !== "") {
      fetch(`http://127.0.0.1:8080/api/news/${valor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //Guardamos el Id en un useState
          setRegisterId(data.result[0].id);
          //Guardamos la informacion del registro en un useState
          setFormValues((prev) => ({
            ...prev,
            nombre: data.result[0].titular,
            descripcion: data.result[0].descripcion,
            idioma: data.result[0].idioma,
            activo: data.result[0].activo,
          }));

          //Seleccionamos los campos select
          document.querySelector("#idiomaNoticia").value = data.result[0].idioma; 
          document.querySelector("#activoNoticia").value = data.result[0].activo;

          //En caso de obtener una imagen creamos la etiqueta
          setImagenNoticia(data.result[0].imagen);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    //Comprobamos si estamos insertando / editando un registro
    if (params.slug !== "" && params.slug !== undefined) {
      setTituloApartado("Editar noticia");
      setOperation("edit");
      consultaEdicion(params.slug);
    }
  }, [params.slug]);

  return (
    <>
      <div className={styleDashboard.contentHeader}>
        <h1>{tituloApartado}</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={styleDashboard.botonesDerecha}>
            <a href="/admin/noticias" className={styleDashboard.botonVolver}>
              Cancelar
            </a>
            <button className={styleDashboard.botonGuardar} type="submit">
              Guardar
            </button>
          </div>
          <div className={styleDashboard.agrupacion}>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="idiomaNoticia">Idioma</label>
              <select
                id="idiomaNoticia"
                name="idioma"
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccione un idioma</option>
              </select>
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="activoNoticia">Estado</label>
              <select
                id="activoNoticia"
                name="activo"
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccione un estado</option>
                <option value="1">Visible</option>
                <option value="0">No visible</option>
              </select>
            </div>
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="nombreNoticia">Nombre</label>
            <input
              type="text"
              id="nombreNoticia"
              name="nombre"
              placeholder="Nombre"
              onChange={handleInputChange}
              defaultValue={formValues.nombre}
            />
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="descripcionNoticia">Descripción</label>
            <textarea
              id="descripcionNoticia"
              name="descripcion"
              placeholder="Descripcion"
              onChange={handleInputChange}
              defaultValue={formValues.descripcion}
            />
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="imagenNoticia">Imagen</label>
            <input
              id="imagenNoticia"
              type="file"
              name="imagen"
              onChange={handleInputChange}
              accept="image/*"
            />
          </div>
          <div className={styleDashboard.imagenDetalle}>
            <ImagenNoticia img={imagenNoticia} />
          </div>
          <div className={styleDashboard.botonesDerecha}>
            <a href="/admin/noticias" className={styleDashboard.botonVolver}>
              Cancelar
            </a>
            <button className={styleDashboard.botonGuardar} type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ImagenNoticia(prop){
  if(prop.img!==''){
    return (<img src={prop.img} width="300px" height="200px" alt="imagen Noticia" />)
  }
  else{
    return(<></>);
  }
}