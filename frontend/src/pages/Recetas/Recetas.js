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
  //Recepcion de variables globales del sistema de paginacion
  //const {page, setPageTotal} = useContext(PaginationContext);

  //Declaracion de variables para Recetas
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [recetas, setRecetas] = useState([]);
  let limit = 6;

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
      setPageTotal(data.count);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [page, limit, props.lang, ]);

  
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
            <Pagination pages={`front`} limit={limit} pageTotal={pageTotal} page={page} prevPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)}/>
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
