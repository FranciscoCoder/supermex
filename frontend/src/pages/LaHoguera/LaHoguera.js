//import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { PaginationContext } from "../../App";
import { changeStyleBody, goTop } from "../../components/Utils";
import globalUrl from "../../components/Utils";
import Pagination from "../../components/Pagination/Pagination";
import iconLaHoguera from "../../assets/svg/icono_totem_noticias.svg";
import styleLaHoguera from "./LaHoguera.module.css";

export default function LaHoguera(props) {
  changeStyleBody("fondomorado", "fondoturquesa");
  //Recepcion de variables globales del sistema de paginacion
  //const {page, setPageTotal} = useContext(PaginationContext);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  
  //Declaracion de variables para Recetas
  const [noticias, setNoticias] = useState([]);
  let limit = 8;
  
  //Listamos las noticias dadas de alta
  useEffect(() => {
    goTop();
    fetch(`${globalUrl}/api/news/?page=${page}&language=${props.lang}&limit=${limit}&active=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //Actualizadmos el estado noticias con los datos
        setNoticias(data.result);
        setPageTotal(data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, props.lang, limit, setPageTotal]);
  return (
      <LayoutNews lang={props.lang}>
        {noticias.length > 0 ? (
          <div className={styleLaHoguera.listaNoticias}>
            <ul>
              {noticias.map((noticia) => (
                <li key={noticia.id}>
                  <Link to={`/${props.lang}/post/${noticia.slug}`}>
                    <div>
                      <img
                        src={noticia.imagen}
                        width="300px"
                        height="300px"
                        alt="imagen Noticia"
                      />
                    </div>
                    <div>
                      <h2>{noticia.titular}</h2>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Pagination pages={`front`} limit={limit} pageTotal={pageTotal} page={page} prevPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)}/>
          </div>
        ) : (
          <div className={styleLaHoguera.notFound}>No hay noticias</div>
        )}
      </LayoutNews>
  );
}

function LayoutNews(props) {
  return (
    <section className={styleLaHoguera.section1}>
      <div>
        <div>
          <img
            src={iconLaHoguera}
            width="579"
            height="579"
            className="imagenwidth"
            alt="icon La Hoguera"
          />
        </div>
        <div className={styleLaHoguera.texto}>
          Acércate al fuego de nuestra hoguera, donde nuestros atrevidos
          exploradores te contarán las últimas aventuras que nos han sucedido.
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </section>
  );
}
