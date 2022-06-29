import { useEffect, useState } from 'react';
import {changeStyleBody} from '../../components/Utils';

import styleRecetas from './Recetas.module.css';

export default function Recetas(){
    changeStyleBody('fondorosa','fondoturquesa');
    const [page, setPage] = useState(1);
    const [recetas, setRecetas] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/api/recipes/?page=${page}&language=es`,{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          setRecetas(data.result);
        });
      }, [page]);

    return(
        <div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
        <div>Recetas</div>
    </div>
        );
}