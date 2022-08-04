import {changeStyleBody, goTop, homeMouseEnter, homeMouseMove, homeMouseOut} from '../../components/Utils';

import homeProductoChips from '../../assets/images/home-producto-chips.jpg';
import homeProductoSalsas from '../../assets/images/home-producto-salsas.jpg';
import homeProductoTrigo from '../../assets/images/home-producto-trigo.jpg';
import homeProductoMiraResto from '../../assets/images/home-producto-mira-el-resto.jpg';
import homeNoConocesSaborTexto from '../../assets/images/home-aun-no-conoces-el-sabor-texto.png';
import homeNoConocesSabor from '../../assets/images/home-aun-no-conoces-el-sabor.jpg';

import styleInicio from './Inicio.module.css';
import Slider from '../../components/Slider/Slider';
import LastRecipes from '../../components/LastRecipes/LastRecipes';
import { Link } from 'react-router-dom';

export default function Inicio(props) {
  goTop();
  changeStyleBody('fondoturquesa','fondorosa');


  window.addEventListener("load", function(event) {
    homeMouseEnter(`${styleInicio.letradesplazada1}`, `${styleInicio.coleccionimg}`, `${styleInicio.activado}`);
    homeMouseMove(`${styleInicio.letradesplazada1}`, 1, `${styleInicio.activado}`);
    homeMouseOut(`${styleInicio.letradesplazada1}`, 1, `${styleInicio.activado}`);

    homeMouseEnter(`${styleInicio.letradesplazada2}`, `${styleInicio.coleccionimg}`, `${styleInicio.activado}`);
    homeMouseMove(`${styleInicio.letradesplazada2}`, 2, `${styleInicio.activado}`);
    homeMouseOut(`${styleInicio.letradesplazada2}`, 2, `${styleInicio.activado}`);

    homeMouseEnter(`${styleInicio.letradesplazada3}`, `${styleInicio.coleccionimg}`, `${styleInicio.activado}`);
    homeMouseMove(`${styleInicio.letradesplazada3}`, 3, `${styleInicio.activado}`);
    homeMouseOut(`${styleInicio.letradesplazada3}`, 3, `${styleInicio.activado}`);

    homeMouseEnter(`${styleInicio.letradesplazada4}`, `${styleInicio.coleccionimg}`, `${styleInicio.activado}`);
    homeMouseMove(`${styleInicio.letradesplazada4}`, 4, `${styleInicio.activado}`);
    homeMouseOut(`${styleInicio.letradesplazada4}`, 4, `${styleInicio.activado}`);
  });

  return (
    <div>
        <Slider lang={props.lang} />
        <section className={styleInicio.zonarosa}>
          <div id="cuerpozonarosa" className={styleInicio.cuerpozonarosa}>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada1}`}>
                <div className={styleInicio.imagen_productos_inicio}>
                    <img src={homeProductoChips} alt="Imagen producto chips" width="732" height="886" className="imagenwidth" />
                </div>
                <div className={styleInicio.letras_productos_inicio}>
                    <Link onClick={goTop} to={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`}><span>Tortilla Chips</span></Link>
                </div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada2}`}>
                <div className={styleInicio.imagen_productos_inicio}>
                    <img src={homeProductoSalsas} alt="Imagen producto salsas" width="732" height="886" className="imagenwidth" />
                </div>
                <div className={styleInicio.letras_productos_inicio}>
                    <Link onClick={goTop} to={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`}><span>Salsas dip</span></Link>
                </div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada3}`}>
                <div className={styleInicio.imagen_productos_inicio}>
                    <img src={homeProductoTrigo} alt="Imagen producto trigo" width="732" height="886" className="imagenwidth" />
                </div>
                <div className={styleInicio.letras_productos_inicio}>
                    <Link onClick={goTop} to={`/${props.lang}/productos`} className={`${styleInicio.letrarosa} .enlaceLetra`}><span>Tortillas de trigo</span></Link>
                </div>
              </div>
              <div className={`${styleInicio.letras_zonarosa} ${styleInicio.letradesplazada4}`}>
                  <div className={styleInicio.imagen_productos_inicio}><img src={homeProductoMiraResto} alt="Imagen mira el resto" width="732" height="886" className="imagenwidth" /></div>
                  <div className={styleInicio.letras_productos_inicio}><Link onClick={goTop} to={`/${props.lang}/productos`} className={styleInicio.letramorada} ><span>¡Mira el resto!</span></Link></div>
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
            <Link onClick={goTop} to={`/${props.lang}/recetas`}>

                <div className={styleInicio.txt_aun_no}><img src={homeNoConocesSaborTexto} className="imagenwidth" alt='Imagen aun no conoces nuestro sabor' width="604" height="604" /></div>
                <div className={styleInicio.aun_no}><img src={homeNoConocesSabor}  className="imagenwidth" alt='Imagen aun no conoces nuestro sabor' width="559" height="559" /></div>
              </Link>
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

