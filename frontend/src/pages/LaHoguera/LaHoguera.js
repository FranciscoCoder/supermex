import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { changeStyleBody, goTop } from "../../components/Utils";
import globalUrl from "../../components/Utils";
import Pagination from "../../components/Pagination/Pagination";
import iconLaHoguera from "../../assets/svg/icono_totem_noticias.svg";
import styleLaHoguera from "./LaHoguera.module.css";

export default function LaHoguera(props) {
  changeStyleBody("fondomorado", "fondoturquesa");
  //Declaramos variables iniciales
  const [page, setPage] = useState(1);
  const [registerTotal, setRegisterTotal] = useState(0);
  const limit = 8;
  const pageNumber=[];
  const [noticias, setNoticias] = useState([]);
  
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
        setRegisterTotal(data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, props.lang,]);

  const pageNumberTotal = Math.ceil(registerTotal/limit);
  //Bucle para crear las pagina
  for(let i = 1; i<=pageNumberTotal; i++){
    pageNumber.push({
      "pageCount": i,
      'updatePage': ()=>setPage(i)
    });
  }
  return (
      <LayoutNews lang={props.lang}>
        {noticias.length > 0 ? (
          <div className={styleLaHoguera.listaNoticias}>
            <ul>
              {noticias.map((noticia) => (
                <li key={noticia.id}>
                  <Link onClick={goTop()} to={`/${props.lang}/post/${noticia.slug}`}>
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
            <Pagination section={`front`} page={page} prevPage={() => setPage(page - 1)} pageNumber={pageNumber} nextPage={() => setPage(page + 1)} firstPage={() => setPage(1)} lastPage={() => setPage(pageNumberTotal)}/>
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
