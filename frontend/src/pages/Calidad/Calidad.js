import {changeStyleBody, goTop} from '../../components/Utils';

import styleCalidad from './Calidad.module.css';

import imgCalidad1 from "../../assets/images/img_calidad1.jpg";
import imgCalidad2 from "../../assets/images/img_calidad2.jpg";

export default function Calidad(){
    changeStyleBody('fondomorado','fondoturquesa');

    return(
        <div>
            <section className={styleCalidad.section1}>
                <h1>CALIDAD MILENARIA</h1>
                <div>
                    <p className={styleCalidad.texto}>
                        Mantener un sabor tan único y de gran calidad solo se consigue con un profundo respeto a nuestras raíces, nuestra naturaleza y las 
                        trad del sabor.iciones de nuestros ancestros.<br /><br />

                        Nuestro cuidado por los ingredientes y el proceso de elaboración comienza por seguir, desde su origen, nuestra receta milenaria.<br /><br />

                        Por algo somos conocidos como la tribu del sabor.
                    </p>
                </div>
            </section>
            <div><img src={imgCalidad1} width="1920" height="868" className="imagenwidth" alt="imgCalidad1" /></div>
            <section className={styleCalidad.section2}>
                <div>
                    <h2>APPCC</h2>
                    <h3 className={styleCalidad.separacion}>*Análisis de Peligros y Puntos de Control Crítico</h3>
                    <div className={styleCalidad.texto}>
                        <p>
                            Trabajamos sobre nuestro plan APPCC, bajo unos controles de higiene y calidad muy estrictos.<br /><br />
                            Con nuestro propio laboratorio podemos probar y verificar nuestros productos, controlando los parámetros de calidad de la producción diaria, así como la de los productos que recibimos de nuestros proveedores.<br /><br />
                            Además de nuestro laboratorio interno y de los empleados encargados del control de calidad, trabajamos con consultores y laboratorios externos para probar y verificar nuestros resultados.<br /><br />
                        </p>
                    </div>
                    <div className={styleCalidad.texto}>
                        <p>
                            Entre nuestros procedimientos de calidad incluimos:
                        </p>
                        <ul>
                            <li>Análisis microbiológico.</li>
                            <li>Análisis del agua utilizada para la realización de los productos.</li>
                            <li>Análisis de los procesos de limpieza.</li>
                            <li>Inspecciones de auditores, inspectores de sanidad y nuestros propios consultores externos.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styleCalidad.propiedades}>
                        <h3>PRODUCTOS</h3>
                        <h2 className={styleCalidad.separacion}>SIN GLUTEN</h2>
                        <div className={styleCalidad.texto}>
                            <p>
                                Las tortillas chips Supermex no contienen gluten, siendo una excelente elección para los celíacos y para aquellos con intolerancia a él. Además, están incluidas en la lista de FACE/España de alimentos aptos para celíacos 2018.
                            </p>
                        </div>
                    </div>
                    <div className={styleCalidad.propiedades}>
                        <h2>IFS</h2>
                        <h3 className={styleCalidad.separacion}>* International Featured Standards</h3>
                        <div className={styleCalidad.texto}>
                            <p>
                                Llevamos más de 25 años de trayectoria en el sector alimentario, ofreciendo productos de calidad desde el primer día. Es por eso que estamos en posesión de un certificado IFS Food de Nivel Superior. Nuestro compromiso con los controles de calidad y con la mejora de nuestros estándares, hace posible garantizar la satisfacción de nuestras tribus más exigentes. 
                            </p>
                        </div>
                    </div>
                    <div className={styleCalidad.propiedades}>
                        <h2 className={styleCalidad.separacion}>GMO FREE</h2>
                        <div className={styleCalidad.texto}>
                            <p>
                                Las tortillas chips y tortillas de maíz Supermex no contienen organismos genéticamente modificados. Nuestros proveedores de maíz certifican que el maíz que usamos no está modificado genéticamente (Libre de OGM).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div><img src={imgCalidad2} width="1920" height="868" className="imagenwidth" alt="imgCalidad2" /></div>
        </div>
    );
}