import {changeStyleBody} from '../../components/Utils';

import styleContacto from './Contacto.module.css';

import bannerContacto from "../../assets/images/banner_contacto.jpg";

export default function Contacto(props){
    changeStyleBody('fondoazuloscuro','fondorosa');
    return(
        <div>
            <section className={styleContacto.section1}>
                <div>
                    <span>Aquí nace el mejor sabor.</span><br />
                    <span>¿Sabes dónde nos encontramos?</span>
                </div>
                <img src={bannerContacto} width="1920" height="1080" alt="banner contacto" className='imagenwidth' />
            </section>
            <section className={styleContacto.section2}>
                <div></div>
                <div>
                    <h1>Contáctanos</h1>
                    <div>
                        <div>
                            <div><input type="text" name="nombre" id="nombreContacto" required placeholder='nombre' /></div>
                            <div><input type="email" name="correo" id="correoContacto" required placeholder='correo' /></div>
                            <div><input type="tel" name="telefono" id="telefonoContacto" required placeholder='teléfono' /></div>
                        </div>
                        <div>
                            <div>
                                <textarea name="mensaje" id="mensajeContacto" required placeholder='¡Hola!'></textarea>
                            </div>
                            <div>
                                <input type="checkbox" name="acepto" id='aceptoContacto' value="1" /> He leído y acepto la <a href={`/${props.lang}/politica-de-privacidad/`}>política de privacidad</a>.
                            </div>
                            <div> 
                                <button type='button'>enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h2>FÁBRICA / ENVÍOS</h2>
                        <p>
                            Pol. Ind. Las Salinas de Poniente / C. Eratóstenes, 198.<br />
                            CP 11500 - El Puerto de Santa María, Cádiz (España)
                        </p>
                    </div>
                    <div>
                        <h2>TELÉFONO</h2>
                        <p><a href="tel:+34956841136" target="_blank">(+34) 956 841 136</a></p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>DIRECCIÓN POSTAL</h2>
                        <p>
                        C/ Eratóstenes, 198 Módulo B - Buzón 3 / CP 11500 - El Puerto de Santa María, Cádiz (España)
                        </p>
                    </div>
                    <div>
                        <h2>EMAIL</h2>
                        <p><a href="mail:info@supermexfoods.com" target="_blank">info@supermexfoods.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}