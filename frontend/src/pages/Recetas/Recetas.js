import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { changeStyleBody, goTop } from "../../components/Utils";
import globalUrl from "../../components/Utils";
import Pagination from "../../components/Pagination/Pagination";
import iconoCubiertos from "../../assets/svg/cubiertos_recetas.svg";
import styleRecetas from "./Recetas.module.css";

export default function Recetas(props) {
  goTop();
  changeStyleBody("fondorosa", "fondoturquesa");
  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 8;
  const pageNumber=[];
  const [recetas, setRecetas] = useState([]);

  //Listamos las recetas dadas de alta
  useEffect(() => {
    fetch(`${globalUrl}/api/recipes/?page=${page}&language=${props.lang}&limit=${limit}&active=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      //Actualizadmos el estado recetas con los datos
      setRecetas(data.result);
      setRegisterTotal(data.count);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [page, props.lang]);

  const pageNumberTotal = Math.ceil(registerTotal/limit);
  //Bucle para crear las pagina
  for(let i = 1; i<=pageNumberTotal; i++){
    pageNumber.push({
      "pageCount": i,
      'updatePage': ()=>setPage(i)
    });
  }
  return (
      <LayoutRecipes lang={props.lang}>
        {recetas.length > 0 ? (
          <div>
            <ul>
              {recetas.map((receta) => (
                <li key={receta.id}>
                  <Link to={`/${props.lang}/receta/${receta.slug}`}>
                    <img
                      src={receta.imagen}
                      alt={receta.nombre}
                      width="300px"
                      height="300px"
                    />
                    <div>{receta.nombre}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <Pagination section={`front`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
          </div>
        ) : (
          <div className={styleRecetas.notFound}>No hay recetas</div>
        )}
      </LayoutRecipes>
  );
}

function LayoutRecipes(props) {
  return (
    <section className={styleRecetas.section1}>
      <div className={styleRecetas.cabecera}>
        <div>
          <img
            src={iconoCubiertos}
            width="366px"
            height="430px"
            alt="Icono cubiertos"
            className="imagenmaxwidth"
          />
        </div>
        <div className={styleRecetas.textoCabecera}>
          <div>
            <h1>YUMMY SECTION</h1>
            <div>
              Sorprende a tu tribu con el sabor más delicioso y original. Aquí
              tienes las mejores recetas para que puedas disfrutar cada día de
              nuestros productos Supermex.
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </section>
  );
}
