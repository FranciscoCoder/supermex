import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {changeStyleBody} from '../../components/Utils';
import stylePost from './Post.module.css';
import styleNoEncontrado from '../NoEncontrada/NoEncontrada.module.css';

export default function Post(props){
    const params = useParams();
    const [post, setPost] = useState([]);

    changeStyleBody('fondomorado','fondoturquesa');

    useEffect(()=>{
        fetch(`http://127.0.0.1:8080/api/news/${params.slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setPost(data.result);
        })
        .catch((error) => console.log(error));
    },[params.slug]);

    if(post.length>0){
        let cont=1;
        return(
            <section key={post[0].id} className={stylePost.section1}>
                <div className={stylePost.enlaceAtras}><Link to={`/${props.lang}/la-hoguera`}>atrás</Link></div>
                <div className={stylePost.noticia}>
                    <div className={stylePost.imagen}><img src={post[0].imagen} alt="Imagen Receta" width="1920px" height="768px" /></div>
                    <div className={stylePost.textoNoticia}>
                        <div><h1>{post[0].titular}</h1></div>
                        <div>{post[0].descripcion.split("\r\n").map((texto)=>(<p key={`txt${cont++}`}>{texto}<br /></p>))}</div>
                    </div>
                </div>
            </section>
        );
    }
    else{
        return(
            <section className={stylePost.section1}>
                <div className={styleNoEncontrado.noEncontrado}>No existe la noticia</div>
            </section>
        );
    }
}