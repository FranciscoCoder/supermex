import React, { useEffect, useState } from "react";
import IconoReceta from '../../assets/svg/recetas_tribu.svg';
import IconoCubiertos from '../../assets/svg/cubiertos_recetas.svg';
import styleLastRecipes from "./LastRecipes.module.css";

export default function LastRecipes(props) {
    const [lastRecipes, setLastRecipes] = useState([]);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8080/api/recipes/?language=${props.lang}&limit=4&active=1`, {
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
                <div className={styleLastRecipes.recetas_tribu}><img src={IconoReceta} className="imagenmaxwidth"  width="300" height="300" alt="icono receta" /></div>
                <div className={styleLastRecipes.recetas_tribu_icono}><img src={IconoCubiertos} className="imagenmaxwidth" width="300" height="300" alt="icono cubierto" /></div>
                <div className={styleLastRecipes.lista_inicio_recetas}>
                    <ul>
                        {lastRecipes.map((recipe) => (
                            <li key={recipe.id}>
                                <a href={`/${props.lang}/receta/${recipe.slug}`}>
                                    <img src={recipe.imagen} width="300" height="300" alt={recipe.nombre} />
                                    <div className={`${styleLastRecipes.etiqueta}`}>Guacamole casero con pico de gallo</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
