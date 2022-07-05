import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Recetas() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [recetas, setRecetas] = useState([]);

  //Listamos las recetas dados de alta
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/recipes/?page=${page}&limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizamos el estado login a false para renderizar los datos
        setLoading(false);
        //Actualizadmos el estado recetas con los datos
        setRecetas(data.result);
      })
      .catch((error) => {
        navigate(`/admin/error-conexion`, { replace: true });
      });
  }, [page, navigate]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    if (recetas.length > 0) {
      return (
        <div>
          <div className={styleDashboard.contentHeader}>
            <h1>Recetas</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/receta/" className={styleDashboard.botonNuevo}>
                Nueva receta
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Slug</th>
                  <th>Idioma</th>
                  <th>Activo</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              {recetas.map((receta) => (
                <tbody key={receta.id}>
                  <tr key={receta.id}>
                    <td className={styleDashboard.alignCenter}><img src={receta.imagen} width="300px" height="300px" alt="imagen receta" /></td>
                    <td>{receta.nombre}</td>
                    <td>{receta.slug}</td>
                    <td className={styleDashboard.alignCenter}>
                      {receta.idioma}
                    </td>
                    <td className={styleDashboard.alignCenter}>
                      {receta.activo}
                    </td>
                    <td className={styleDashboard.alignCenter}>
                      {receta.fecha_creacion}
                    </td>
                    <td>
                      <div className={styleDashboard.botonesCentrado}>
                        <a
                          href={`/admin/receta/${receta.slug}`}
                          className={styleDashboard.botonNuevo}
                        >
                          Editar
                        </a>
                        <button
                          type="button"
                          className={styleDashboard.botonBorrar}
                          onClick={() => {
                            if (
                              window.confirm("¿Quieres eliminar el registro?")
                            ) {
                              fetch(
                                `http://127.0.0.1:8080/api/recipe/${receta.id}/delete`,
                                {
                                  method: "DELETE",
                                  headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": 'Bearer '+ localStorage.getItem('token')
                                  },
                                }
                              )
                                .then((res) => res.json())
                                .then((data) => {
                                  if (data.result === "ok") {
                                    window.location.reload();
                                    //navigate(`/admin/recetas`, { replace: true });
                                  }
                                })
                                .catch((error) => {
                                  navigate(`/admin/error-conexion`, { replace: true });
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
            <h1>Recetas</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/receta/" className={styleDashboard.botonNuevo}>
                Nueva receta
              </a>
            </div>
            <div className={styleDashboard.notFound}>
              No exiten recetas registradas
            </div>
          </div>
        </div>
      );
    }
  }
}
