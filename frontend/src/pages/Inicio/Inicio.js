import {changeStyleBody} from '../../components/Utils';

import homeProductoChips from '../../assets/images/home-producto-chips.jpg';
import homeProductoSalsas from '../../assets/images/home-producto-salsas.jpg';
import homeProductoTrigo from '../../assets/images/home-producto-trigo.jpg';
import homeProductoMiraResto from '../../assets/images/home-producto-mira-el-resto.jpg';
import homeNoConocesSaborTexto from '../../assets/images/home-aun-no-conoces-el-sabor-texto.png';
import homeNoConocesSabor from '../../assets/images/home-aun-no-conoces-el-sabor.jpg';

import styleInicio from './Inicio.module.css';
import Slider from '../../components/Slider/Slider';
import LastRecipes from '../../components/LastRecipes/LastRecipes';

export default function Inicio(props) {
  changeStyleBody('fondoturquesa','fondorosa');

  
  const eventMouseEnter = () => {
      document.querySelectorAll(`#coleccionimg img`).forEach(box => {
        box.classList.remove(`${styleInicio.activado}`);
      });
  }

  const eventMouseMove = (e) => {
      // var parentOffset = document.querySelector(`#cuerpozonarosa`).getBoundingClientRect();
      // let capadesplaza=1;
      // document.querySelectorAll(`.enlaceLetra:hover`).forEach(box=>{
      //   console.log(box);
      //   capadesplaza=box.getAttribute('data-adesplazar');
      // });
      // //.getAttribute('data-adesplazar')
      // document.querySelector('img[data-desplazamiento="'+capadesplaza+'"]').classList.add(`${styleInicio.activado}`);

      // var relativeXPosition = (e.pageX - parentOffset.left - 100); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
      // var relativeYPosition = (e.pageY - parentOffset.top - 100);
      // document.querySelector(`#coleccionimg`).setAttribute("style", "transform:translate(" + (relativeXPosition) +"px, " + (relativeYPosition) + "px)");
   
  }
  const eventMouseOut = () => {
    document.querySelectorAll(`#coleccionimg img`).forEach(box => {
      box.classList.remove(`${styleInicio.activado}`);
    });
  }
  
    // $(".cuerpozonarosa").mouseenter(function(){
    //     $('.coleccionimg img').removeClass('activado');
    // }).mousemove(function(e){
    //     var parentOffset = $(this).offset();
    //     capadesplaza= $('.letras_zonarosa a:hover').data("adesplazar");

    //     $('[data-desplazamiento="'+capadesplaza+'"]').addClass('activado');
    //     var relativeXPosition = (e.pageX - parentOffset.left - 100); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
    //     var relativeYPosition = (e.pageY - parentOffset.top - 100);
    //     $('.coleccionimg').css({'transform' : 'translate(' + (relativeXPosition) +'px, ' + (relativeYPosition) + 'px)'});
    // }).mouseout(function(){
    //     $('[data-desplazamiento="'+capadesplaza+'"]').removeClass('activado');
    // });
  return (
    <div>
        <Slider lang={props.lang} />
        <section className={styleInicio.zonarosa}>
          <div id="cuerpozonarosa" className={styleInicio.cuerpozonarosa} onMouseEnter={eventMouseEnter} onMouseMove={eventMouseMove} onMouseOut={eventMouseOut}>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada1}`}>
                  <div className={styleInicio.imagen_productos_inicio}><img src={homeProductoChips} alt="Imagen producto chips" width="732" height="886" className="imagenwidth" /></div>
                  <div className={styleInicio.letras_productos_inicio}><a href={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`} rel="noreferrer" data-adesplazar="1"><span>Tortilla Chips</span></a></div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada2}`}>
                  <div className={styleInicio.imagen_productos_inicio}><img src={homeProductoSalsas} alt="Imagen producto salsas" width="732" height="886" className="imagenwidth" /></div>
                  <div className={styleInicio.letras_productos_inicio}><a href={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`} rel="noreferrer" data-adesplazar="2"><span>Salsas dip</span></a></div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada3}`}>
                  <div className={styleInicio.imagen_productos_inicio}><img src={homeProductoTrigo} alt="Imagen producto trigo" width="732" height="886" className="imagenwidth" /></div>
                  <div className={styleInicio.letras_productos_inicio}><a href={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`} rel="noreferrer" data-adesplazar="3"><span>Tortillas de trigo</span></a></div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada4}`}>
                  <div className={styleInicio.imagen_productos_inicio}><img src={homeProductoMiraResto} alt="Imagen mira el resto" width="732" height="886" className="imagenwidth" /></div>
                  <div className={styleInicio.letras_productos_inicio}><a href={`/${props.lang}/productos`} className={styleInicio.letramorada} rel="noreferrer" data-adesplazar="4"><span>¡Mira el resto!</span></a></div>
              </div>
              <div id="coleccionimg" className={styleInicio.coleccionimg}>
                <div>
                  <img src={homeProductoChips} data-desplazamiento="1" alt="Imagen producto chips" width="732" height="886" className="imagenwidth" />
                  <img src={homeProductoSalsas} data-desplazamiento="2" alt="Imagen producto salsas" width="732" height="886" className="imagenwidth" />
                  <img src={homeProductoTrigo} data-desplazamiento="3" alt="Imagen producto trigo" width="732" height="886" className="imagenwidth" />
                  <img src={homeProductoMiraResto} data-desplazamiento="4" alt="Imagen mira el resto" width="732" height="886" className="imagenwidth" />
                </div>
              </div>
          </div>
        </section>
        <section className={styleInicio.receta_inicio}>
          <div className={styleInicio.img_conocenos}>
              <a href={`/${props.lang}/recetas`}>
              <div className={styleInicio.txt_aun_no}><img src={homeNoConocesSaborTexto} className="imagenwidth" alt='Imagen aun no conoces nuestro sabor' /></div>
              <div className={styleInicio.aun_no}><img src={homeNoConocesSabor}  className="imagenwidth" alt='Imagen aun no conoces nuestro sabor' /></div>
              </a>
          </div>
          <div className={styleInicio.frase_receta1}>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
              <span>¿Aún no conoces el secreto azteca?</span>
          </div>
      </section>
      <LastRecipes lang={props.lang} />
    </div>
  );
}

