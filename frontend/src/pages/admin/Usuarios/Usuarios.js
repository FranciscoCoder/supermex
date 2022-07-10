import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {goTop, takeRole, verifyToken} from "../../../components/Utils";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export default function Recetas() {
  verifyToken();
  const role = takeRole();

  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 20;
  const pageNumber=[];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  //Listamos los usuarios dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/users?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizamos el estado loading a false para renderizar los datos
        setLoading(false);
        //Actualizadmos el estado usuarios con los datos
        setUsuarios(data.result);
        setRegisterTotal(data.count, limit);
      })
      .catch((error) => {
        navigate(`/admin/error-conexion`, { replace: true });
      });
  }, [page, navigate]);

  const pageNumberTotal = Math.ceil(registerTotal/limit);
  //Bucle para crear las pagina
  for(let i = 1; i<=pageNumberTotal; i++){
    pageNumber.push({
      "pageCount": i,
      'updatePage': ()=>setPage(i)
    });
  }

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    return (
        <LayoutUsers role={role}>
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
                      <td>{usuario.rol[0]}</td>
                      <td className={styleDashboard.alignCenter}>
                        {usuario.fecha_creacion}
                      </td>
                      <td>
                        <div className={styleDashboard.botonesCentrado}>
                          <Link
                            onClick={goTop}
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
                                fetch(`${globalUrl}/api/user/${usuario.id}/delete`,{
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
              <Pagination section={`dashboard`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
            </div>
          ) : (
            <div className={styleDashboard.notFound}>No hay usuarios</div>
          )}
        </LayoutUsers>
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
        {
          props.role==='ROLE_SUPERADMIN'
          ? 
            <div>
              <div className={styleDashboard.botonesDerecha}>
                <Link to={`/admin/usuario/`} className={styleDashboard.botonNuevo}>
                  Nuevo usuario
                </Link>
              </div>
              {props.children}
            </div>
          :<div>No tienes permiso de acceso</div>
        }
      </div>
    </div>
  );
}
