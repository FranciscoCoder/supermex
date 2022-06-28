import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import inicioStyle from "./Recetas.module.css";
import styleDashboard from "../../Dashboard.module.css";

export default function Recetas() {
  const [page, setPage] = useState(1);
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/recipes/?page=${page}&language=es`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setRecetas(data);
    });
  }, [page]);

  if(recetas.length>0){
    return (
      <div>
        <div className={styleDashboard.contentHeader}><h1>Recetas</h1></div>
        <div className={styleDashboard.contentBody}>
          <Link to={`/admin/receta/`}>Nuevo</Link>
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
          {recetas.map((receta) => (
            <tbody key={receta.id}>
              <tr key={receta.id}>
                <td>{receta.nombre}</td>
                <td>{receta.slug}</td>
                <td>{receta.activo}</td>
                <td>{receta.fecha_creacion}</td>
                <td><Link to={`/admin/receta/${receta.slug}`}>Editar</Link><Link to={`/admin/receta`}>Borrar</Link></td>
              </tr>
            </tbody>
          ))}
          </table>
        </div>
      </div>
    );
  }
  else{
    return (<div>Loading</div>);
  }
}
