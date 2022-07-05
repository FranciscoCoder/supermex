import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Receta() {
  const params = useParams("");
  const navigate = useNavigate();
  const [tituloApartado, setTituloApartado] = useState("Nueva receta");
  const [imagenReceta, setImagenReceta] = useState("");
  const [registerId, setRegisterId] = useState("");
  //const [operation, setOperation] = useState("new");
  const [formValues, setFormValues] = useState({
    nombre: "",
    ingredientes: "",
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
        data.result.map((lang) => {
          var option = document.createElement("option");
          option.text = lang.abreviatura.toUpperCase();
          option.value = lang.id;
          document.querySelector("#idiomaReceta").appendChild(option);
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
    formData.append("ingredientes", formValues.ingredientes);
    formData.append("activo", formValues.activo);
    formData.append("idioma", formValues.idioma);

    //let methodState = "POST";
    // if (operation === "edit") {
    //   methodState = "PUT";
    //   formData=JSON.stringify(formValues);
    // } else {
    formData.append("imagen", e.target.imagen.files[0]);
    // }

    fetch(`http://127.0.0.1:8080/api/recipe/${registerId}`, {
      method: "POST",
      body: formData,
      headers: {
        enctype: "multipart/form-data",
        "Authorization": 'Bearer '+ localStorage.getItem('token')
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.result === "ok") {
          navigate(`/admin/recetas`, { replace: true });
        }
      });
  };

  //Funcion para consultar el registro en el caso de editar
  const consultaEdicion = (valor) => {
    if (valor !== "") {
      fetch(`http://127.0.0.1:8080/api/recipes/${valor}`, {
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
            nombre: data.result[0].nombre,
            ingredientes: data.result[0].ingredientes,
            descripcion: data.result[0].descripcion,
            idioma: data.result[0].idioma,
            activo: data.result[0].activo,
          }));

          //Seleccionamos los campos select
          document.querySelector("#idiomaReceta").value = data.result[0].idioma;
          document.querySelector("#activoReceta").value = data.result[0].activo;

          //En caso de obtener una imagen creamos la etiqueta
          setImagenReceta(data.result[0].imagen);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    //Comprobamos si estamos insertando / editando un registro
    if (params.slug !== "" && params.slug !== undefined) {
      setTituloApartado("Editar receta");
      //setOperation("edit");
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
            <a href="/admin/recetas" className={styleDashboard.botonVolver}>
              Cancelar
            </a>
            <button className={styleDashboard.botonGuardar} type="submit">
              Guardar
            </button>
          </div>
          <div className={styleDashboard.agrupacion}>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="idiomaReceta">Idioma</label>
              <select
                id="idiomaReceta"
                name="idioma"
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccione un idioma</option>
              </select>
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="activoReceta">Estado</label>
              <select
                id="activoReceta"
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
            <label htmlFor="nombreReceta">Nombre receta</label>
            <input
              type="text"
              id="nombreReceta"
              name="nombre"
              placeholder="Nombre receta"
              onChange={handleInputChange}
              defaultValue={formValues.nombre}
            />
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="ingredientesReceta">Ingredientes</label>
            <textarea
              id="ingredientesReceta"
              name="ingredientes"
              placeholder="Ingredientes"
              onChange={handleInputChange}
              defaultValue={formValues.ingredientes}
            />
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="descripcionReceta">Descripción</label>
            <textarea
              id="descripcionReceta"
              name="descripcion"
              placeholder="Descripcion"
              onChange={handleInputChange}
              defaultValue={formValues.descripcion}
            />
          </div>
          <div className={styleDashboard.grupoCampo}>
            <label htmlFor="imagenReceta">Imagen</label>
            <input
              id="imagenReceta"
              type="file"
              name="imagen"
              onChange={handleInputChange}
              accept="image/*"
            />
          </div>
          <div className={styleDashboard.imagenDetalle}>
            <ImagenReceta img={imagenReceta} />
          </div>
          <div className={styleDashboard.botonesDerecha}>
            <a href="/admin/recetas" className={styleDashboard.botonVolver}>
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

function ImagenReceta(prop){
  if(prop.img!==''){
    return (<img src={prop.img} width="300px" height="200px" alt="imagen Receta" />)
  }
  else{
    return(<></>);
  }
}