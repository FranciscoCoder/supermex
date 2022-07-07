import React, { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export const GlobalContext = createContext({});

export default function Recetas() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [loading, setLoading] = useState(true);
  const [recetas, setRecetas] = useState([]);
  let limit = 20;
  //Listamos las recetas dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/recipes/?page=${page}&limit=${limit}`, {
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
        <LayoutRecipes>
          {recetas.length > 0 ? (
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
                {recetas.map((receta) => 
                  <tbody key={receta.id}>
                    <tr key={receta.id}>
                      <td className={styleDashboard.alignCenter}>
                        <img
                          src={receta.imagen}
                          width="300px"
                          height="300px"
                          alt="imagen receta"
                        />
                      </td>
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
                          <Link
                            to={`/admin/receta/${receta.slug}`}
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
                                  `${globalUrl}/api/recipe/${receta.id}/delete`,
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
                                      window.location.reload();
                                      //navigate(`/admin/recetas`, { replace: true });
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
            <div className={styleDashboard.notFound}>No hay recetas</div>
          )}
        </LayoutRecipes>
      </GlobalContext.Provider>
    );
  }
}

function LayoutRecipes(props) {
  return (
    <div>
      <div className={styleDashboard.contentHeader}>
        <h1>Recetas</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <div className={styleDashboard.botonesDerecha}>
          <Link to={`/admin/receta/`} className={styleDashboard.botonNuevo}>
            Nueva receta
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  );
}
