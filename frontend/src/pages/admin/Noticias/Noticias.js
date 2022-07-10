import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {goTop, verifyToken} from "../../../components/Utils";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticias() {
  verifyToken();
  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 20;
  const pageNumber=[];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);

  //Listamos las noticias dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/news?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizamos el estado loading a false para renderizar los datos
        setLoading(false);
        //Actualizadmos el estado noticias con los datos
        setNoticias(data.result);
        setRegisterTotal(data.count);
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
                          onClick={goTop}
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
                              fetch(`${globalUrl}/api/new/${noticia.id}/delete`,{
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
            <Pagination section={`dashboard`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
          </div>
        ) : (
          <div className={styleDashboard.notFound}>
            No exiten noticias registradas
          </div>
        )}
      </LayoutNews>
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
