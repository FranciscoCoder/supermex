import React, { useEffect, useState } from "react";
import styleDashboard from "../../Dashboard.module.css";

export default function Recetas() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  //Listamos los usuarios dados de alta
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/users/?page=${page}&limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizamos el estado login a false para renderizar los datos
        setLoading(false);
        //Actualizadmos el estado usuarios con los datos
        setUsuarios(data.result);
      })
      .catch((error) => {
        window.location.href = "/admin/error-conexion";
      });
  }, [page]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    if (usuarios.length > 0) {
      return (
        <div>
          <div className={styleDashboard.contentHeader}>
            <h1>Usuarios</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/usuario/" className={styleDashboard.botonNuevo}>
                Nuevo usuario
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              {usuarios.map((usuario) => (
                <tbody key={usuario.id}>
                  <tr key={usuario.id}>
                    <td>{usuario.username}</td>
                    <td>{usuario.rol}</td>
                    <td className={styleDashboard.alignCenter}>
                      {usuario.fecha_creacion}
                    </td>
                    <td>
                      <div className={styleDashboard.botonesCentrado}>
                        <a
                          href={`/admin/usuario/${usuario.username}`}
                          className={styleDashboard.botonNuevo}
                        >
                          Editar
                        </a>
                        <button
                          type="button"
                          className={styleDashboard.botonBorrar}
                          onClick={() => {
                            if (
                              window.confirm("¿Quieres eliminar este usuario?")
                            ) {
                              fetch(
                                `http://127.0.0.1:8080/api/user/${usuario.id}`,
                                {
                                  method: "DELETE",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              )
                                .then((res) => res.json())
                                .then((data) => {
                                  if (data.result === "ok") {
                                    window.location.reload();
                                  }
                                })
                                .catch((error) => {
                                  window.location.href = "/admin/error-conexion";
                                });
                            }
                          }}
                        >
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={styleDashboard.contentHeader}>
            <h1>Usuarios</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/usuario/" className={styleDashboard.botonNuevo}>
                Nuevo usuario
              </a>
            </div>
            <div className={styleDashboard.notFound}>
              No exiten usuarios registrados
            </div>
          </div>
        </div>
      );
    }
  }
}
