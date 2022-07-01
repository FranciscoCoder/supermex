import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Receta() {
  const params = useParams("");

  const [tituloApartado, setTituloApartado] = useState("Nueva receta");
  const [registerId, setRegisterId] = useState("");
  const [operation, setOperation] = useState("new");
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
        data.result.map((idioma) => {
          var option = document.createElement("option");
          option.text = idioma.abreviatura.toUpperCase();
          option.value = idioma.id;
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
    
    let methodState = "POST";
    if (operation === "edit") {
      methodState = "PUT";
    }
    else {
      formData.append("imagen", e.target.imagen.files[0]);
    }
    
    fetch(`http://127.0.0.1:8080/api/recipe/${registerId}`, {
      method: methodState,
      body: formData,
      headers: {
        "enctype": "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.result == "ok") {
        //   window.location.href = "/admin/recetas";
        // }
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
          setRegisterId(data.result[0].id);
          setFormValues((prev) => ({
            ...prev,
            nombre: data.result[0].nombre,
            ingredientes: data.result[0].ingredientes,
            descripcion: data.result[0].descripcion,
            idioma: data.result[0].idioma,
            activo: data.result[0].activo,
          }));
          document.querySelector("#idiomaReceta").value = data.result[0].idioma;
          document.querySelector("#activoReceta").value = data.result[0].activo;
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    //Comprobamos si estamos insertando / editando un registro
    if (params.slug !== "" && params.slug !== undefined) {
      setTituloApartado("Editar receta");
      setOperation("edit");
      consultaEdicion(params.slug);
    }
  }, []);

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
