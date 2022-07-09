import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import globalUrl from "../../../components/Utils";
import Pagination from "../../../components/Pagination/Pagination";
import styleDashboard from "../../Dashboard.module.css";

export default function Contactos() {
  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 20;
  const pageNumber=[];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [contactos, setContactos] = useState([]);

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
        //Actualizamos el estado loading a false para renderizar los datos
        setLoading(false);
        //Actualizadmos el estado contactos con los datos
        setContactos(data.result);
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
    let cont = 0;
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
              <tbody>
              {contactos.map((contacto) => 
                <tr key={contacto.id}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.email}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.mensaje.split("\n").map((texto) => (
                  <p key={`text${cont++}`}>{texto}</p>
                ))}</td>
                  <td>{contacto.fecha}</td>
                </tr>
              )}
              </tbody>
            </table>
            <Pagination section={`dashboard`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
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
