import React from "react";
import {alturaBanner} from '../../components/Utils';
import iconLagarto from '../../assets/svg/glifo_lagarto.svg';
import iconCocodrilo from '../../assets/svg/glifo_cocodrilo.svg';
import iconSerpiente from '../../assets/svg/glifo_serpiente.svg';
import styleSlider from "./Slider.module.css";

export default function Slider(props) {

  alturaBanner();  
  let alturaVentana = window.innerHeight;
  if(alturaVentana<500){alturaVentana=500;}
  
  //Funcion para cambiar el color del banner segun data-color
  const cambiabanner = () => {
    let colorfondo=document.querySelector(".active").getAttribute('data-color');
    let banner=document.querySelector("#bannerInicio");
  
    if(colorfondo==='amarillo'){
        banner.classList.add(`${styleSlider.banner2}`);
        banner.classList.remove(`${styleSlider.banner1}`, `${styleSlider.banner3}`);
    }
    else if(colorfondo==='turquesa'){
        banner.classList.add(`${styleSlider.banner3}`);
        banner.classList.remove(`${styleSlider.banner1}`, `${styleSlider.banner2}`);
    }
    else{
        banner.classList.add(`${styleSlider.banner1}`);
        banner.classList.remove(`${styleSlider.banner2}`, `${styleSlider.banner3}`);
    }
  }
  
  window.addEventListener('resize', alturaBanner);
  
  return (
    <section>
        <div id='bannerInicio' className={`${styleSlider.banner} ${styleSlider.banner1}`} style={{height: alturaVentana + 'px'}}>
            <div className={`active ${styleSlider.contenido_banner}`} data-color="morado">
                <div><img src={iconLagarto} className="imagenwidth" width="524" height="444" alt='icono glifo lagarto' onClick={cambiabanner} /></div>
                <div className={styleSlider.textosbanner}>
                  <div>Sabores Milenarios que reúnen a la tribu</div>
                </div>
                <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
            </div>
            <div className={styleSlider.contenido_banner} data-color="amarillo">
                <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
                <div className={styleSlider.textosbanner}>
                  <div>Un nuevo mundo delicioso por descubrir</div>
                </div>
                <div><img src={iconSerpiente} className="imagenwidth" width="804" height="204" alt='icono glifo serpiente' /></div>
            </div>
            <div className={styleSlider.contenido_banner} data-color="turquesa">
                <div><img src={iconSerpiente} className="imagenwidth" width="804" height="204" alt='icono glifo srpiente' /></div>
                <div className={styleSlider.textosbanner}>
                  <div>El secreto azteca ahora en tus manos</div>
                </div>
                <div><img src={iconLagarto} className="imagenwidth" width="524" height="444" alt='icono glifo lagarto' /></div>
            </div>
        </div>
      </section>
  );
}
