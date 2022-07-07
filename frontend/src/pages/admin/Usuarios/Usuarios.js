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
  const [usuarios, setUsuarios] = useState([]);
  let limit = 20;

  //Listamos los usuarios dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/users/?page=${page}&limit=${limit}`, {
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
        setPageTotal(data.count, limit);
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
        <LayoutUsers>
          {usuarios.length > 0 ? (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                {usuarios.map((usuario) => 
                  <tbody key={usuario.id}>
                    <tr key={usuario.id}>
                      <td className={styleDashboard.alignCenter}>
                        {usuario.usuario}
                      </td>
                      <td>{usuario.rol}</td>
                      <td className={styleDashboard.alignCenter}>
                        {usuario.fecha_creacion}
                      </td>
                      <td>
                        <div className={styleDashboard.botonesCentrado}>
                          <Link
                            to={`/admin/usuario/${usuario.id}`}
                            className={styleDashboard.botonNuevo}
                          >
                            Editar
                          </Link>
                          <button
                            type="button"
                            className={styleDashboard.botonBorrar}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "¿Quieres eliminar este usuario?"
                                )
                              ) {
                                fetch(
                                  `${globalUrl}/api/user/${usuario.id}/delete`,
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
                                      //navigate(`/admin/usuarios`, { replace: true });
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
            <div className={styleDashboard.notFound}>No hay usuarios</div>
          )}
        </LayoutUsers>
      </GlobalContext.Provider>
    );
  }
}

function LayoutUsers(props) {
  return (
    <div>
      <div className={styleDashboard.contentHeader}>
        <h1>Usuarios</h1>
      </div>
      <div className={styleDashboard.contentBody}>
        <div className={styleDashboard.botonesDerecha}>
          <Link to={`/admin/usuario/`} className={styleDashboard.botonNuevo}>
            Nuevo usuario
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  );
}
