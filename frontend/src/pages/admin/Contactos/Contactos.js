import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export const GlobalContext = createContext({});

export default function Contactos() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
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
  }, [page, navigate, limit]);

  if (loading) {
    return <div className={styleDashboard.loading}>Loading</div>;
  } else {
    return (
      <GlobalContext.Provider value={{ page, setPage, pageTotal }}>
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
                      <td>{contacto.mensaje}</td>
                      <td>{contacto.fecha}</td>
                    </tr>
                  </tbody>
                )}
              </table>
              <Pagination pages="dashboard" limit={limit} />
            </div>
          ) : (
            <div className={styleDashboard.notFound}>No hay recetas</div>
          )}
        </LayoutContacts>
      </GlobalContext.Provider>
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
