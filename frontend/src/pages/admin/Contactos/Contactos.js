import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styleDashboard from "../../Dashboard.module.css";

export default function Contactos() {
  const [page, setPage] = useState(1);
  const [paginador, setPaginador] = useState();
  const [loading, setLoading] = useState(true);
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    //Api para recibir contactos segun parametros
    fetch(`http://127.0.0.1:8080/api/contact/?page=${page}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setContactos(data.result);
      setPaginador(data.count);
    });
  }, [page, paginador]);

  if(loading){
    return (<div className={styleDashboard.loading}>Loading</div>)
  }
  else
  {
    if(contactos.length>0){
      console.log(paginador);
      return (
        <div>
          <div className={styleDashboard.contentHeader}><h1>Contactos</h1></div>
          <div className={styleDashboard.contentBody}>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                  <th>Mensaje</th>
                  <th>Fecha</th>
                </tr>
              </thead>
            {contactos.map((contacto) => (
              <tbody key={contacto.id}>
                <tr key={contacto.id}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.email}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.mensaje}</td>
                  <td>{contacto.fecha}</td>
                </tr>
              </tbody>
            ))}
            </table>
          </div>
        </div>
      );
    }
    else{
      return (
        <div>
          <div className={styleDashboard.contentHeader}><h1>Contactos</h1></div>
          <div className={styleDashboard.contentBody}>
            <div>No exiten contactos registrados</div>
          </div>
        </div>
      );
    }
  }
}
