//import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { PaginationContext } from "../../../App";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export default function Contactos() {
  //Recepcion de variables globales del sistema de paginacion
  //const {page, setPageTotal} = useContext(PaginationContext);
  
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  //Declaramos variables iniciales
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [contactos, setContactos] = useState([]);
  let limit = 20;

  useEffect(() => {
    //Api para recibir contactos segun parametros
    fetch(`${globalUrl}/api/contact/?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setContactos(data.result);
        setPageTotal(data.count);
      })
      .catch((error) => {
        navigate(`/admin/error-conexion`, { replace: true });
      });
  }, [page, navigate, limit, setPageTotal]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    return (
      <LayoutContacts>
        {contactos.length > 0 ? (
          <div>
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
              {contactos.map((contacto) => 
                <tbody key={contacto.id}>
                  <tr key={contacto.id}>
                    <td>{contacto.nombre}</td>
                    <td>{contacto.email}</td>
                    <td>{contacto.telefono}</td>
                    <td>{contacto.mensaje.split("\n").map((texto) => (
                    <p key={`text${contacto.id}`}>{texto}</p>
                  ))}</td>
                    <td>{contacto.fecha}</td>
                  </tr>
                </tbody>
              )}
            </table>
            <Pagination pages={`dashboard`} limit={limit} pageTotal={pageTotal} page={page} prevPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)}/>
          </div>
        ) : (
          <div className={styleDashboard.notFound}>No hay contactos</div>
        )}
      </LayoutContacts>
    );
  }
}

function LayoutContacts(props) {
  return (
    <div>
      <div className={styleDashboard.contentHeader}>
        <h1>Contactos</h1>
      </div>
      <div className={styleDashboard.contentBody}>{props.children}</div>
    </div>
  );
}
