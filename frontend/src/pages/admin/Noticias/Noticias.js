import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Noticias() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/news/?page=${page}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setNoticias(data.result);
    }).catch((error)=>{
      window.location.href="/admin/error-conexion";
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
            <div className={styleDashboard.botonesDerecha}>
              <a href="/admin/noticia/" className={styleDashboard.botonNuevo}>Nueva noticia</a>
            </div>
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
                  <td className={styleDashboard.alignCenter}>{noticia.activo}</td>
                  <td className={styleDashboard.alignCenter}>{noticia.fecha_creacion}</td>
                  <td>
                  <div className={styleDashboard.botonesCentrado}>
                      <a href={`/admin/noticia/${noticia.slug}`} className={styleDashboard.botonNuevo}>Editar</a>
                      <button type="button" className={styleDashboard.botonBorrar} onClick={()=>{
                        if (window.confirm("¿Quieres eliminar el registro?")) {
                          fetch(`http://127.0.0.1:8080/api/new/${noticia.id}`,{
                            method: 'DELETE',
                            headers:{
                              'Content-Type': 'application/json'
                            }
                          })
                          .then((res) => res.json())
                          .then((data) => {
                            if(data.result==='ok'){
                              window.location.reload();
                            }
                          });                          
                        }
                      }}>Borrar</button>
                    </div>
                  </td>
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
            <div className={styleDashboard.botones}>
              <a href="/admin/noticia/" className={styleDashboard.botonNuevo}>Nueva noticia</a>
            </div>
            <div className={styleDashboard.notFound}>No exiten noticias registradas</div>
          </div>
        </div>
      );
    }
  }
}
