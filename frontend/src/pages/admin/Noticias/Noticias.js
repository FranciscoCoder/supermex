import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticias() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/news/?page=${page}&language=es`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setNoticias(data.result);
    });
  }, [page]);

  if(loading){
    return (<div className={styleDashboard.loading}>Loading</div>)
  }
  else
  {
    if(noticias.length>0){
      return (
        <div>
          <div className={styleDashboard.contentHeader}><h1>Noticias</h1></div>
          <div className={styleDashboard.contentBody}>
            <Link to={`/admin/noticia/`}>Nuevo</Link>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Slug</th>
                  <th>Activo</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
            {noticias.map((noticia) => (
              <tbody key={noticia.id}>
                <tr key={noticia.id}>
                  <td>{noticia.titular}</td>
                  <td>{noticia.slug}</td>
                  <td>{noticia.activo}</td>
                  <td>{noticia.fecha_creacion}</td>
                  <td><Link to={`/admin/noticia/${noticia.slug}`}>Editar</Link><Link to={`/admin/noticia`}>Borrar</Link></td>
                </tr>
              </tbody>
            ))}
            </table>
          </div>
        </div>
      );
    }else{
      return (
        <div>
          <div className={styleDashboard.contentHeader}><h1>Noticias</h1></div>
          <div className={styleDashboard.contentBody}>
            <div>No exiten noticias registradas</div>
          </div>
        </div>
      );
    }
  }
}
