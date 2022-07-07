import {changeStyleBody, goTop} from '../../components/Utils';
import styleNoEnviado from './NoEnviado.module.css';

export default function NoEnviado(){
    goTop();
    changeStyleBody('fondoturquesa','fondorosa');
    return(<div className={styleNoEnviado.noEncontrado}>Su mensaje no se ha enviado</div>);
}