import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {changeStyleBody} from '../../components/Utils';
import styleReceta from './Receta.module.css';
import styleNoEncontrado from '../NoEncontrada/NoEncontrada.module.css';

export default function Receta(props){
    const params = useParams();
    const [recipe, setRecipe] = useState([]);

    changeStyleBody('fondorosa','fondoturquesa');

    useEffect(()=>{
        fetch(`http://127.0.0.1:8080/api/recipes/${params.slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setRecipe(data.result);
        })
        .catch((error) => console.log(error));
    },[params.slug]);

    if(recipe.length>0){
        let cont=1;
        return(
            <section>
                <div key={recipe[0].id}>
                    <div className={styleReceta.titulo}>
                        <div className={styleReceta.enlaceAtras}><Link to={`/${props.lang}/recetas`}>atrás</Link></div>
                        <h1>{recipe[0].nombre}</h1>
                    </div>
                    <div className={styleReceta.imagenReceta}><img src={recipe[0].imagen} alt="Imagen Receta" width="1920px" height="768px" /></div>
                    <div className={styleReceta.textos}>
                        <div>
                            <div className={styleReceta.ingredientes}>
                                <div><h2>Ingredientes</h2></div>
                                <div>{recipe[0].ingredientes.split("\r\n").map((texto)=>(<p key={`text${cont++}`}>{texto}</p>))}</div>
                            </div>
                        </div>
                        <div>
                            <div className={styleReceta.elaboracion}>
                                <h2>Elaboración</h2>
                                <div>{recipe[0].descripcion.split("\r\n").map((texto)=>(<p key={`txt${cont++}`}>{texto}<br /></p>))}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    else{
        return(
            <section className={styleReceta.section1}>
                <div className={styleNoEncontrado.noEncontrado}>No existe la receta</div>
            </section>
        );
    }
}