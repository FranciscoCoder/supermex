import {changeStyleBody} from '../../components/Utils';
import styleNoEncontrado from './NoEncontrada.module.css';

export default function NoEncontrada(){
    changeStyleBody('fondoturquesa','fondorosa');
    return(<div className={styleNoEncontrado.noEncontrado}>Página no encontrada</div>);
}