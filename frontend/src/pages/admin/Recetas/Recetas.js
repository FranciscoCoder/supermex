import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {goTop, verifyToken} from "../../../components/Utils";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export default function Recetas() {
  verifyToken();
  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 20;
  const pageNumber=[];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recetas, setRecetas] = useState([]);

  //Listamos las recetas dados de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/recipes?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      else{console.log('Hubo un problema con lala respuesta')};
    }).then((data) => {
          //Actualizamos el estado loading a false para renderizar los datos
          setLoading(false);
          //Actualizadmos el estado recetas con los datos
          setRecetas(data.result);
          setRegisterTotal(data.count);
        })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

    // fetch(`${globalUrl}/api/recipes/?page=${page}&limit=${limit}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //Actualizamos el estado loading a false para renderizar los datos
    //     setLoading(false);
    //     //Actualizadmos el estado recetas con los datos
    //     setRecetas(data.result);
    //     setRegisterTotal(data.count);
    //   })
    //   .catch((error) => {
    //     navigate(`/admin/error-conexion`, { replace: true });
    //   });
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
                          onClick={goTop}
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
            <Pagination section={`dashboard`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
          </div>
        ) : (
          <div className={styleDashboard.notFound}>No hay recetas</div>
        )}
      </LayoutRecipes>
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
