import { useEffect, useState } from "react";
import { changeStyleBody } from "../../components/Utils";
import iconoCubiertos from "../../assets/svg/cubiertos_recetas.svg";
import styleRecetas from "./Recetas.module.css";

export default function Recetas(props) {
  changeStyleBody("fondorosa", "fondoturquesa");
  const [page, setPage] = useState(1);
  const [recetas, setRecetas] = useState([]);
  //Listamos las recetas dados de alta
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/recipes/?page=${page}&language=${props.lang}&limit=6&active=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizadmos el estado recetas con los datos
        setRecetas(data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, props.lang]);

  if (recetas.length > 0) {
    return (
      <LayoutRecipes lang={props.lang}>
        <ul>
          {recetas.map((receta) => (
            <li key={receta.id}>
              <a href={`/${props.lang}/receta/${receta.slug}`}>
                <img src={receta.imagen} alt={receta.nombre} width="300px" height="300px" />
                <div>{receta.nombre}</div>
              </a>
            </li>
          ))}
        </ul>
      </LayoutRecipes>
    );
  } else {
    return (
      <LayoutRecipes lang={props.lang}>
        <div className={styleRecetas.notFound}>No hay recetas</div>
      </LayoutRecipes>
    );
  }
}

function LayoutRecipes(props) {
  return (
    <section className={styleRecetas.section1}>
      <div className={styleRecetas.cabecera}>
        <div><img src={iconoCubiertos} width="366px" height="430px" alt="Icono cubiertos" className="imagenmaxwidth" /></div>
        <div className={styleRecetas.textoCabecera}>
          <div>
            <h1>YUMMY SECTION</h1>
            <div>Sorprende a tu tribu con el sabor más delicioso y original. Aquí tienes las mejores recetas para que puedas 
  disfrutar cada día de nuestros productos Supermex.</div>
          </div>
        </div>
      </div>
      {props.children}
    </section>
  );
}