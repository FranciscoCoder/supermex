import React, { useEffect, useState } from "react";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticias() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);

  //Listamos las noticias dados de alta
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/news/?page=${page}&limit=20`, {
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
        setNoticias(data.result);
      })
      .catch((error) => {
        window.location.href = "/admin/error-conexion";
      });
  }, [page]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    if (noticias.length > 0) {
      return (
        <div>
          <div className={styleDashboard.contentHeader}>
            <h1>Noticias</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/noticia/" className={styleDashboard.botonNuevo}>
                Nueva noticia
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
              {noticias.map((noticia) => (
                <tbody key={noticia.id}>
                  <tr key={noticia.id}>
                  <td className={styleDashboard.alignCenter}><img src={noticia.imagen} width="300px" height="300px" alt="imagen noticia" /></td>
                    <td>{noticia.titular}</td>
                    <td>{noticia.slug}</td>
                    <td className={styleDashboard.alignCenter}>{noticia.idioma}</td>
                    <td className={styleDashboard.alignCenter}>
                      {noticia.activo}
                    </td>
                    <td className={styleDashboard.alignCenter}>
                      {noticia.fecha_creacion}
                    </td>
                    <td>
                      <div className={styleDashboard.botonesCentrado}>
                        <a
                          href={`/admin/noticia/${noticia.slug}`}
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
                                `http://127.0.0.1:8080/api/new/${noticia.id}`,
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
            <h1>Noticias</h1>
          </div>
          <div className={styleDashboard.contentBody}>
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/noticia/" className={styleDashboard.botonNuevo}>
                Nueva noticia
              </a>
            </div>
            <div className={styleDashboard.notFound}>
              No exiten noticias registradas
            </div>
          </div>
        </div>
      );
    }
  }
}
