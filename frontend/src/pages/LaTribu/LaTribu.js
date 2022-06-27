import {changeStyleBody} from '../../components/Utils';
import iconTribu from '../../assets/svg/icono_tribu.svg';
// import iconTokTok from '../../assets/svg/tok_tok.svg';
import imgTribu from '../../assets/images/img_tribu.jpg';
import imgNuestraReceta from '../../assets/images/img_nuestra_receta.jpg';
import imgGlifos from '../../assets/svg/img_glifos.svg';

import stylesLaTribu from './LaTribu.module.css';

export default function LaTribu(){
    changeStyleBody('fondoazuloscuro','fondoturquesa');
    return(
        <div>
            <section className={stylesLaTribu.section1}>
                <div>
                    <div className={stylesLaTribu.contenidoSection1}>
                        <h1>La tribu</h1>
                        <div>
                            <p>
                                El pueblo azteca, conocido por sus rituales, naturaleza, lucha y misticismo, ha dejado mucho a la sociedad mexicana que todavía conserva hoy día. Lo más importante:
                            </p>
                            <p>
                                Sus misteriosas recetas milenarias con los sabores más naturales y apreciados.
                            </p>
                        </div>
                    </div>
                    <div className={stylesLaTribu.iconoTribu}><img src={iconTribu} width="1292" height="882" alt="icon la tribu" /></div>
                </div>
                <div className={stylesLaTribu.subtitulo}><h2>Regresa al presente.</h2></div>
                <div className={stylesLaTribu.llamandoPuerta}>¿Están llamando a la puerta? Ya han llegado nuestros amigos; la mesa está preparada.</div>
                <div className={stylesLaTribu.aroma}>
                    El aroma de las tortillas recién calentadas, y el picante sabor del guacamole, el queso fundiéndose con los nachos adornados con chili y jalapeños… No será junto a un fuego en mitad de nuestra aldea, pero es con tu tribu con quien vas a disfrutar de este banquete.<br /><br />
                    
                    La comida está lista para disfrutarla. Para compartirla con los tuyos. 
                </div>
            </section>
            <section>
                <div className={stylesLaTribu.glifos1}><img src={imgGlifos} width="1920" height="160" className="imagenwidth" alt='imagen glifos' /></div>
                <div className={stylesLaTribu.contenidoSection2}>
                    <div>
                        <div><h4>¿Conoces nuestra historia?</h4></div>
                        <div><h5>En Supermex te traemos las mejores recetas aztecas llenas de sabor.</h5></div>
                        <div>
                            <p>
                                Empezamos en 1986 con una pequeña fábrica de tortilla chips y tortillas de maíz en Andalucía, siguiendo nuestra receta milenaria. Gracias al delicioso sabor, y la gran calidad de nuestros productos, hemos crecido hasta convertirnos en un proveedor internacional de 
        gran variedad de comida mexicana.<br /><br />

                                Ahora trabajamos en unas nuevas instalaciones en el Puerto de Santa María, en Cádiz, donde contamos con el más avanzado sistema de producción y de control de calidad.
                            </p>
                        </div>
                    </div>
                    <div><img src={imgTribu} width="1040" height="913" alt="imagen conoce nuestra historia" /></div>
                </div>
                <div className={stylesLaTribu.glifos2}><img src={imgGlifos} width="1920" height="160" className="imagenwidth" alt='imagen glifos' /></div>
            </section>
            <section className={stylesLaTribu.section3}>
                <div><img src={imgNuestraReceta} width="805" height="1164" className="imagenwidth" alt='imagen glifos' /></div>
                <div>
                    <h3>Nuestra receta milenaria</h3>
                    <div>
                        <p>
                            Nuestro secreto mejor guardado es la elaboración de nuestras tortilla chips y tortillas de maíz, siguiendo una ancestral técnica de los indios aztecas llamada <strong>“Nixtamal”</strong>.<br /><br />

                            En el proceso de elaboración <strong>“Nixtamal”</strong> los productos de maíz se obtienen de la cuidadosa cocción de maíz de primera calidad secado al sol.<br /><br />

                            Primero, el maíz se muele a piedra para liberar su rico sabor natural. Posteriormente, se fríen en aceite 100% de girasol y aceite de girasol alto oleico; y en el caso de las tortilla chips sabor natural empleamos solamente sal marina.<br /><br />

                            En Supermex siempre empleamos maíz regional, secado al sol y seleccionado por su alta calidad. La cooperativa proveedora del maíz certifica que éste no contiene materiales OGM.<br /><br />

                            Otra de las características de esta materia prima es que carece de gluten, convirtiendo nuestro producto en un alimento apto para celíacos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}