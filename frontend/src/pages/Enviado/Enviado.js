import {changeStyleBody, goTop} from '../../components/Utils';
import styleEnviado from './Enviado.module.css';

export default function Enviado(){
    goTop();
    changeStyleBody('fondoturquesa','fondorosa');
    return(<div className={styleEnviado.noEncontrado}>Mensaje enviado</div>);
}