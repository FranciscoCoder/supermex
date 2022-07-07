import React, { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export const GlobalContext = createContext({});

export default function Noticias() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);
  let limit = 20;
  //Listamos las noticias dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/news/?page=${page}&limit=${limit}`, {
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
        setPageTotal(data.count);
      })
      .catch((error) => {
        navigate(`/admin/error-conexion`, { replace: true });
      });
  }, [page, navigate, limit]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    return (
      <GlobalContext.Provider value={{ page, setPage, pageTotal }}>
        <LayoutNews>
          {noticias.length > 0 ? (
            <div>
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
                {noticias.map((noticia) => 
                  <tbody key={noticia.id}>
                    <tr key={noticia.id}>
                      <td className={styleDashboard.alignCenter}>
                        <img
                          src={noticia.imagen}
                          width="300px"
                          height="300px"
                          alt="imagen noticia"
                        />
                      </td>
                      <td>{noticia.titular}</td>
                      <td>{noticia.slug}</td>
                      <td className={styleDashboard.alignCenter}>
                        {noticia.idioma}
                      </td>
                      <td className={styleDashboard.alignCenter}>
                        {noticia.activo}
                      </td>
                      <td className={styleDashboard.alignCenter}>
                        {noticia.fecha_creacion}
                      </td>
                      <td>
                        <div className={styleDashboard.botonesCentrado}>
                          <Link
                            to={`/admin/noticia/${noticia.slug}`}
                            className={styleDashboard.botonNuevo}
                          >
                            Editar
                          </Link>
                          <button
                            type="button"
                            className={styleDashboard.botonBorrar}
                            onClick={() => {
                              if (
                                window.confirm("¿Quieres eliminar el registro?")
                              ) {
                                fetch(
                                  `${globalUrl}/api/new/${noticia.id}/delete`,
                                  {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization:
                                        "Bearer " +
                                        localStorage.getItem("token"),
                                    },
                                  }
                                )
                                  .then((res) => res.json())
                                  .then((data) => {
                                    if (data.result === "ok") {
                                      //navigate(`/admin/noticias`, { replace: true });
                                      window.location.reload();
                                    }
                                  })
                                  .catch((error) => {
                                    navigate(`/admin/error-conexion`, {
                                      replace: true,
                                    });
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
                )}
              </table>
              <Pagination pages="dashboard" limit={limit} />
            </div>
          ) : (
            <div className={styleDashboard.notFound}>
              No exiten noticias registradas
            </div>
          )}
        </LayoutNews>
      </GlobalContext.Provider>
    );
  }
}

function LayoutNews(props) {
  return (
    <div>
      <div className={styleDashboard.contentHeader}>
        <h1>Noticias</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <div className={styleDashboard.botonesDerecha}>
          <Link to={`/admin/noticia/`} className={styleDashboard.botonNuevo}>
            Nueva noticia
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  );
}
