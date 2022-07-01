import React, { useEffect, useState } from "react";
import stylesLogin from "./Login.module.css";

export default function Login() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  //Funcion para insertar o modificar el registro al endpoint POST / PUT
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8080/api/login_check`, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        window.location.href="/admin/inicio";
      });
  };

  //Funcion para actualizar los useState correspondiente a cada input
  const handleInputChange = (e) => {
    //Ingresamos los campos del formulario
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={stylesLogin.bodyLogin}>
      <div>
        <div className={stylesLogin.tituloLogin}>
          <h1>Administración</h1>
        </div>
        <div className={stylesLogin.sectionLogin}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userAdmin">Usuario</label>
              <input
                type="text"
                id="userAdmin"
                name="username"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="passwordAdmin">Contraseña</label>
              <input
                type="password"
                id="passwordAdmin"
                name="password"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={stylesLogin.bt}>
              <button type="submit">Identificarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
