import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { goTop } from "../../components/Utils";
import globalUrl from "../../components/Utils";
import IconoReceta from '../../assets/svg/recetas_tribu.svg';
import IconoCubiertos from '../../assets/svg/cubiertos_recetas.svg';
import styleLastRecipes from "./LastRecipes.module.css";

export default function LastRecipes(props) {
    const [lastRecipes, setLastRecipes] = useState([]);

    useEffect(()=>{
        fetch(`${globalUrl}/api/recipes?language=${props.lang}&limit=4&active=1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => {
            setLastRecipes(data.result);
        })
        .catch((error) => {console.log(error);});
    },[props.lang]);

    return (
        <section className={styleLastRecipes.recetas}>
            <div className={styleLastRecipes.cuerpo_recetas}>
                <div className={styleLastRecipes.recetas_tribu}><img src={IconoReceta} className="imagenmaxwidth"  width="764" height="204" alt="icono receta" /></div>
                <div className={styleLastRecipes.recetas_tribu_icono}><img src={IconoCubiertos} className="imagenmaxwidth" width="112" height="132" alt="icono cubierto" /></div>
                <div className={styleLastRecipes.lista_inicio_recetas}>
                    <ul>
                        {lastRecipes.map((recipe) => (
                            <li key={recipe.id}>
                                <Link onClick={goTop} to={`/${props.lang}/receta/${recipe.slug}`}>

                                    <img src={recipe.imagen} width="300" height="300" alt={recipe.nombre} />
                                    <div className={`${styleLastRecipes.etiqueta}`}>{recipe.nombre}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
