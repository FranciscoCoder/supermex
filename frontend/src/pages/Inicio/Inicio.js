import {changeStyleBody, alturaBanner} from '../../components/Utils';
import iconLagarto from '../../assets/svg/glifo_lagarto.svg';
import iconCocodrilo from '../../assets/svg/glifo_cocodrilo.svg';
import iconSerpiente from '../../assets/svg/glifo_serpiente.svg';
import styleInicio from './Inicio.module.css';

export default function Inicio() {
  changeStyleBody('fondoturquesa','fondorosa');
  alturaBanner();  
  let alturaVentana = window.innerHeight;
  const cambiabanner = () => {
    let colorfondo=document.querySelector(".active").getAttribute('data-color');
    let banner=document.querySelector("#bannerInicio");
  
    if(colorfondo==='amarillo'){
        banner.classList.add(`${styleInicio.banner2}`);
        banner.classList.remove(`${styleInicio.banner1}`, `${styleInicio.banner3}`);
    }
    else if(colorfondo==='turquesa'){
        banner.classList.add(`${styleInicio.banner3}`);
        banner.classList.remove(`${styleInicio.banner1}`, `${styleInicio.banner2}`);
    }
    else{
        banner.classList.add(`${styleInicio.banner1}`);
        banner.classList.remove(`${styleInicio.banner2}`, `${styleInicio.banner3}`);
    }
  }
  
  window.addEventListener('resize', alturaBanner);
  return (
    <div>
        <section>
          <div id='bannerInicio' className={`${styleInicio.banner} ${styleInicio.banner1}`} style={{height: alturaVentana + 'px'}}>
              <div className={`active ${styleInicio.contenido_banner}`} data-color="morado">
                  <div><img src={iconLagarto} className="imagenwidth" width="524" height="444" alt='icono glifo lagarto' onClick={cambiabanner} /></div>
                  <div className={styleInicio.textosbanner}>
                    <div>Sabores Milenarios que reúnen a la tribu</div>
                  </div>
                  <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
              </div>
              <div className={styleInicio.contenido_banner} data-color="amarillo">
                  <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
                  <div className={styleInicio.textosbanner}>
                    <div>Un nuevo mundo delicioso por descubrir</div>
                  </div>
                  <div><img src={iconSerpiente} className="imagenwidth" width="804" height="204" alt='icono glifo serpiente' /></div>
              </div>
              <div className={styleInicio.contenido_banner} data-color="turquesa">
                  <div><img src={iconSerpiente} className="imagenwidth" width="804" height="204" alt='icono glifo srpiente' /></div>
                  <div className={styleInicio.textosbanner}>
                    <div>El secreto azteca ahora en tus manos</div>
                  </div>
                  <div><img src={iconLagarto} className="imagenwidth" width="524" height="444" alt='icono glifo lagarto' /></div>
              </div>
          </div>
      </section>
    </div>
  );
}

