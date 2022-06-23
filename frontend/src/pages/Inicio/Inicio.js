import {changeStyleBody} from '../../components/Utils';

import styleInicio from './Inicio.module.css';

export default function Inicio() {

  // fetch('http://127.0.0.1:35313/idiomas',{
  //   method: 'GET', // or 'PUT'
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.log(error));


  changeStyleBody('fondoturquesa','fondorosa');  
  return (
    <div>
      hola
    </div>
  );
}
