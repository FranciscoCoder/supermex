import {changeStyleBody} from '../../components/Utils';
import styleNoEnviado from './NoEnviado.module.css';

export default function NoEnviado(){
    changeStyleBody('fondoturquesa','fondorosa');
    return(<div className={styleNoEnviado.noEncontrado}>Su mensaje no se ha enviado</div>);
}