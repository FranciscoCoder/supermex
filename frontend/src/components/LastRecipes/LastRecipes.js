import React from "react";
import IconoReceta from '../../assets/svg/recetas_tribu.svg';
import IconoCubiertos from '../../assets/svg/cubiertos_recetas.svg';
import styleLastRecipes from "./LastRecipes.module.css";

export default function LastRecipes(props) {
  
  return (
    <section className={styleLastRecipes.recetas}>
      <div className={styleLastRecipes.cuerpo_recetas}>
          <div className={styleLastRecipes.recetas_tribu}><img src={IconoReceta} className="imagenmaxwidth"  /></div>
          <div className={styleLastRecipes.recetas_tribu_icono}><img src={IconoCubiertos} className="imagenmaxwidth" /></div>
          <div className={styleLastRecipes.lista_inicio_recetas}>
              {/* <ul>
                  <li style="background-image:url('recetas/guacamole_casero.jpg');">
                      <a href={`/${props.lang}/recetas`} className="enlace_receta" data-etiquetarecetas="ver_receta1">
                          <div className={styleLastRecipes.espacio_ver_recetas}>
                              <div className={styleLastRecipes.espacio_ver_recetas2}>
                                  <div className="ver_receta color_etiqueta1 ver_receta1_1"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta1 ver_receta1_2"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta1 ver_receta1_3"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta1 ver_receta1_4"><div>Ver receta</div></div>
                              </div>
                          </div>
                          <div className="etiqueta1 color_etiqueta1">Guacamole casero con pico de gallo</div>
                          <img src="images/imgreceta.png" className="imagenwidth" />
                      </a>
                  </li>
                  <li style="background-image:url('recetas/nachos_con_queso.jpg');">
                      <a href={`/${props.lang}/recetas`} className="enlace_receta" data-etiquetarecetas="ver_receta2">
                          <div className={styleLastRecipes.espacio_ver_recetas}>
                              <div className={styleLastRecipes.espacio_ver_recetas2}>
                                  <div className="ver_receta color_etiqueta2 ver_receta2_1"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta2 ver_receta2_2"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta2 ver_receta2_3"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta2 ver_receta2_4"><div>Ver receta</div></div>
                              </div>
                          </div>
                          <div className="etiqueta2 color_etiqueta2">Nachos con queso</div>
                          <img src="images/imgreceta.png" className="imagenwidth" />
                      </a>
                  </li>
                  <li style="background-image:url('recetas/quesadilla.jpg');">
                      <a href={`/${props.lang}/recetas`} className="enlace_receta" data-etiquetarecetas="ver_receta3">
                          <div className={styleLastRecipes.espacio_ver_recetas}>
                              <div className={styleLastRecipes.espacio_ver_recetas2}>
                                  <div className="ver_receta color_etiqueta3 ver_receta3_1"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta3 ver_receta3_2"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta3 ver_receta3_3"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta3 ver_receta3_4"><div>Ver receta</div></div>
                              </div>
                          </div>
                          <div className="etiqueta3 color_etiqueta3">Quesadillas</div>
                          <img src="images/imgreceta.png" className="imagenwidth" />
                      </a>    
                  </li>
                  <li style="background-image:url('recetas/chili_con_carne.jpg');">
                      <a href={`/${props.lang}/recetas`} className="enlace_receta" data-etiquetarecetas="ver_receta4">
                          <div className={styleLastRecipes.espacio_ver_recetas}>
                              <div className={styleLastRecipes.espacio_ver_recetas2}>
                                  <div className="ver_receta color_etiqueta4 ver_receta4_1"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta4 ver_receta4_2"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta4 ver_receta4_3"><div>Ver receta</div></div>
                                  <div className="ver_receta color_etiqueta4 ver_receta4_4"><div>Ver receta</div></div>
                              </div>
                          </div>
                          <div className="etiqueta4 color_etiqueta4">Chili con carne y cilantro</div>
                          <img src="images/imgreceta.png" className="imagenwidth" />
                      </a>
                  </li>
              </ul> */}
          </div>
      </div>  
    </section>
  );
}
