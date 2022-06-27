import {changeStyleBody} from '../../components/Utils';
import iconLaHoguera from '../../assets/svg/icono_totem_noticias.svg';

import styleLaHoguera from './LaHoguera.module.css';

export default function LaHoguera(){
    changeStyleBody('fondoamarillo','fondomorado');

        // fetch('http://127.0.0.1:8080/api/news',{
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     if(data.resultado=="ok"){
        //         setEstadoEnvio(true);
        //     }
        // });



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