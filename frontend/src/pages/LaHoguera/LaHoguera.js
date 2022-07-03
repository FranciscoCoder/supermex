import {changeStyleBody} from '../../components/Utils';
import iconLaHoguera from '../../assets/svg/icono_totem_noticias.svg';

import styleLaHoguera from './LaHoguera.module.css';
import { useEffect, useState } from 'react';

export default function LaHoguera(props){
    changeStyleBody('fondoamarillo','fondomorado');
    
    const [page, setPage] = useState(1);
    const [noticias, setNoticias] = useState([]);
    //Listamos las recetas dados de alta
    useEffect(() => {
      fetch(`http://127.0.0.1:8080/api/news/?page=${page}&language=${props.lang}&limit=8&active=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //Actualizadmos el estado noticias con los datos
          setNoticias(data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [page, props.lang]);

    return(
        <section className={styleLaHoguera.section1}>
            <div>
                <div><img src={iconLaHoguera} width="579" height="579" className="imagenwidth" alt="icon La Hoguera" /></div>
                <div className={styleLaHoguera.texto}>
                    Acércate al fuego de nuestra hoguera, donde nuestros atrevidos exploradores te contarán las últimas aventuras que nos han sucedido.
                </div>
            </div>
            <div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
}