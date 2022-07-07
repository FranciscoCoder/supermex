import React from "react";
import {heightBanner} from '../../components/Utils';
import iconLagarto from '../../assets/svg/glifo_lagarto.svg';
import iconCocodrilo from '../../assets/svg/glifo_cocodrilo.svg';
import iconSerpiente from '../../assets/svg/glifo_serpiente.svg';
import styleSlider from "./Slider.module.css";

export default function Slider(props) {

  heightBanner();  
  let alturaVentana = window.innerHeight;
  if(alturaVentana<500){alturaVentana=500;}
  
  //Funcion para cambiar el color del banner segun data-color
  const changeColorBanner = () => {
    let colorfondo=document.querySelector(`.${styleSlider.activeBanner}`).getAttribute('data-color');
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

  const prevBanner = () => {
    let positionBanner=parseInt(document.querySelector(`.${styleSlider.activeBanner}`).getAttribute('data-position'));
    let prevBanner = positionBanner-1;
    let sliderItem=document.querySelectorAll(`.${styleSlider.contenido_banner}`);
    if(prevBanner>=0){
      for (let i = sliderItem.length-1; i >= 0; --i) {
        if(i===positionBanner)
        {
            sliderItem[i].classList.remove(`${styleSlider.activeBanner}`);
            sliderItem[i].classList.add(`${styleSlider.nextBanner}`);
        }
        else if(i===prevBanner)
        {
            sliderItem[i].classList.remove(`${styleSlider.prevBanner}`);
            sliderItem[i].classList.add(`${styleSlider.activeBanner}`);
        }
      }
      changeColorBanner();
    }
  }

  const nextBanner = () => {
    let positionBanner=parseInt(document.querySelector(`.${styleSlider.activeBanner}`).getAttribute('data-position'));
    let prevBanner = positionBanner-1;
    let nextBanner = positionBanner+1;
    let sliderItem=document.querySelectorAll(`.${styleSlider.contenido_banner}`);
    if(nextBanner<sliderItem.length){
      for (let i = 0; i < sliderItem.length; ++i) {
        if(i<=prevBanner)
        {
            sliderItem[i].classList.remove(`${styleSlider.activeBanner}`);
            sliderItem[i].classList.add(`${styleSlider.prevBanner}`);
        }
        else if(i===positionBanner){
            sliderItem[i].classList.remove(`${styleSlider.activeBanner}`);
            sliderItem[i].classList.add(`${styleSlider.prevBanner}`);
        }
        else if(i===nextBanner){
            sliderItem[i].classList.remove(`${styleSlider.nextBanner}`);
            sliderItem[i].classList.add(`${styleSlider.activeBanner}`);
        }
        else{
            if(!sliderItem[i].classList.contains(`.${styleSlider.nextBanner}`))
            {
                sliderItem[i].classList.add(`${styleSlider.nextBanner}`);
            }
        }
      }
      changeColorBanner();
    }
  }

  
  window.addEventListener('resize', heightBanner);
  
  return (
    <section>
        <div id='bannerInicio' className={`${styleSlider.banner} ${styleSlider.banner1}`} style={{height: alturaVentana + 'px'}}>
            <button type="button" className={styleSlider.buttonPrev} onClick={prevBanner}></button>
            <button type="button" className={styleSlider.buttonNext} onClick={nextBanner}></button>
            <div className={`${styleSlider.contenido_banner} ${styleSlider.activeBanner}`} data-color="morado" data-position="0">
                <div><img src={iconLagarto} className="imagenwidth" width="524" height="444" alt='icono glifo lagarto' /></div>
                <div className={styleSlider.textosbanner}>
                  <div>Sabores Milenarios que reúnen a la tribu</div>
                </div>
                <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
            </div>
            <div className={`${styleSlider.contenido_banner} ${styleSlider.nextBanner}`} data-color="amarillo" data-position="1">
                <div><img src={iconCocodrilo} className="imagenwidth" width="462" height="262" alt='icono glifo cocodrilo' /></div>
                <div className={styleSlider.textosbanner}>
                  <div>Un nuevo mundo delicioso por descubrir</div>
                </div>
                <div><img src={iconSerpiente} className="imagenwidth" width="804" height="204" alt='icono glifo serpiente' /></div>
            </div>
            <div className={`${styleSlider.contenido_banner} ${styleSlider.nextBanner}`} data-color="turquesa" data-position="2">
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
