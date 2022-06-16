import {changeStyleBody} from '../components/Utils';
import iconLaHoguera from '../assets/svg/icono_totem_noticias.svg';

export default function LaHoguera(){
    changeStyleBody('fondoamarillo','fondomorado');
    return(
        <section>
            <div>
                <div><img src={iconLaHoguera} width="579" height="579" className="imagenwidth" alt="icon La Hoguera" /></div>
                <div>
                    Acércate al fuego de nuestra hoguera, donde nuestros atrevidos exploradores te contarán las últimas aventuras que nos han sucedido.
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
}