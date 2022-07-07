import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import globalUrl from "../../../components/Utils";
import styleDashboard from "../../Dashboard.module.css";

export default function Receta() {
  const params = useParams("");
  const navigate = useNavigate();
  const [tituloApartado, setTituloApartado] = useState("Nuevo usuario");
  const [registerId, setRegisterId] = useState("");
  const [operation, setOperation] = useState("new");
  const [formValues, setFormValues] = useState({
    nombre: "",
    usuario: "",
    rol: "",
    password: "",
  });

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
    formData.append("usuario", formValues.usuario);
    formData.append("rol", formValues.rol);
    formData.append("password", formValues.password);

    let methodState = "POST";
    if (operation === "edit") {
      methodState = "PUT";
    }

    fetch(`${globalUrl}/api/user/${registerId}`, {
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
          navigate(`/admin/usuarios`, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };

  //Funcion para consultar el registro en el caso de editar
  const consultaEdicion = (valor) => {
    if (valor !== "") {
      fetch(`${globalUrl}/api/users/${valor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer '+ localStorage.getItem('token')
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRegisterId(data.result[0].id);
          setFormValues((prev) => ({
            ...prev,
            nombre: data.result[0].nombre,
            usuario: data.result[0].usuario,
            rol: data.result[0].rol,
          }));
          document.querySelector("#rolUsuario").value = data.result[0].rol;
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    //Comprobamos si estamos insertando / editando un registro
    if (params.usernameId !== "" && params.usernameId !== undefined) {
      setTituloApartado("Editar usuario");
      setOperation("edit");
      consultaEdicion(params.usernameId);
    }
  }, [params.usernameId]);

  return (
    <>
      <div className={styleDashboard.contentHeader}>
        <h1>{tituloApartado}</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={styleDashboard.botonesDerecha}>
            <Link to={`/admin/usuarios`} className={styleDashboard.botonVolver}>
              Cancelar
            </Link>
            <button className={styleDashboard.botonGuardar} type="submit">
              Guardar
            </button>
          </div>

          <div className={styleDashboard.agrupacion}>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="rolUsuario">Rol</label>
              <select
                id="rolUsuario"
                name="rol"
                onChange={handleInputChange}
                required
              >
                <option value="ROLE_ADMIN">ADMIN</option>
                <option value="ROLE_BLOQUERO">BLOGUERO</option>
              </select>
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="nombreContacto">Nombre contacto</label>
              <input
                type="text"
                id="nombreContacto"
                name="nombre"
                placeholder="Nombre contacto"
                onChange={handleInputChange}
                defaultValue={formValues.nombre}
              />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="usuarioRegistro">Usuario</label>
              <input
                type="text"
                id="usuarioRegistro"
                name="usuario"
                placeholder="Nombre usuario"
                onChange={handleInputChange}
                defaultValue={formValues.usuario}
              />
            </div>
            <div className={styleDashboard.grupoCampo}>
              <label htmlFor="passwordRegistro">Contraseña</label>
              <input
                type="password"
                id="passwordRegistro"
                name="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styleDashboard.botonesDerecha}>
            <Link to={`/admin/usuarios`} className={styleDashboard.botonVolver}>
              Cancelar
            </Link>
            <button className={styleDashboard.botonGuardar} type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
