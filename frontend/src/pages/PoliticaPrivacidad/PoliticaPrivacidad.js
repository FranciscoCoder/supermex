import { Link } from 'react-router-dom';
import {changeStyleBody, goTop} from '../../components/Utils';
import stylePolitica from './PoliticaPrivacidad.module.css';

export default function PoliticaPrivacidad(props){
    goTop();
    changeStyleBody('fondomorado','fondoturquesa');
    return(
        <div>
            <section className={stylePolitica.section1}>
                <h1>Política de privacidad</h1>
                <div className={stylePolitica.texto}>
                    <p>CHAVEZ & CLARK S.L. empresa propietaria de esta Web, pretende, mediante esta declaración, informar a sus visitantes de la política que nuestra empresa sigue en el tratamiento de los datos que se reciben en este sitio Web.</p>
                    <h2>Política de protección de datos</h2>
                    <h3>1.- Derecho de información</h3>
                    <p>De conformidad con lo establecido por la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD), el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de protección de datos de carácter personal y el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, CHAVEZ & CLARK S.L., titular del sitio Web <Link to={`/${props.lang}`}>https://www.supermexfoods.com</Link> (en adelante, el sitio Web), informa al usuario de este sitio de la existencia de un fichero automatizado de datos de carácter personal creado bajo su responsabilidad.</p>

                    <h3>2.- Finalidad</h3>
                    <p>Los datos de los usuarios registrados a través de los formularios habilitados al efecto en el sitio Web son recabados y van a ser tratados e incluidos en los ficheros de CHAVEZ & CLARK S.L., con la finalidad de facilitar la prestación de los productos y servicios que CHAVEZ & CLARK S.L., proporciona a través de dicho sitio Web, que no es otro que el de atender la solicitud efectuada a través de la Web y facilitar a sus clientes una presencia online rápida y efectiva y ofrecerle servicios que pudieran resultar del interés del usuario, así como el posterior envío de comunicaciones comerciales de la empresa referente a sus servicios.</p>

                    <h3>3.- Carácter obligatorio o facultativo de la información facilitada por el usuario y veracidad de los datos.</h3>
                    <p>
                        Los campos señalados en el formulario de registro a cumplimentar por el usuario para crear cuenta son estrictamente necesarios para atender a su petición, siendo voluntaria la inclusión de datos en todos los campos.<br /><br />
                        El usuario garantiza que los datos personales facilitados a CHAVEZ & CLARK S.L., son veraces y se hace responsable de comunicar al mismo cualquier modificación de los mismos.
                    </p>

                    <h3>4.- Consentimiento del usuario</h3>
                    <p>
                        El envío de datos personales, mediante el uso de los formularios electrónicos de CHAVEZ & CLARK S.L., que requieren su consentimiento, otorgan a CHAVEZ & CLARK S.L., la autorización expresa del remitente al tratamiento automatizado de los datos incluidos en los medios indicados, para las finalidades antes descritas, así como al envío de comunicaciones vía electrónica con información acerca de nuestros servicios. Así mismo, mediante la aceptación de la política de privacidad, el usuario autoriza expresamente a CHAVEZ & CLARK S.L., a acceder los referidos datos personales a otras empresas del grupo, cuya intervención sea necesaria para satisfacer los servicios solicitados o empresas del mismo sector asociadas que, con su participación, pueden determinar el cumplimiento de las finalidades para las que se solicitan sus datos personales.<br /><br />
                        
                        Para la recepción de sus correos y garantizar el consentimiento del tratamiento de sus datos de carácter personal, para la emisión de correos a través de nuestro enlace “Contacto”, se ha previsto que, necesariamente, deba clicar en la casilla de verificación de su conformidad.<br /><br />
                        
                        Para casos distintos, la empresa les remitirá un formulario de consentimiento en la primera comunicación en la que nos dirijamos a Usted.
                    </p>

                    <h3>5.- Derechos de los usuarios</h3>
                    <p>
                        De acuerdo con la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD), el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de protección de datos de carácter personal y el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que sus datos personales formarán parte del fichero de Información y Contacto así como el de Usuarios de la Web, titularidad de CHAVEZ & CLARK S.L., con la finalidad de atender su solicitud. Sus datos no serán cedidos a terceros salvo que la ley lo permita o lo exija expresamente.<br /><br />

                        Así mismo, le informamos que tiene Ud. la posibilidad de ejercitar los derechos de acceso, rectificación y oposición en relación a sus datos personales, así como el derecho de cancelación y/o supresión y el de portabilidad de sus datos.<br /><br />

                        El responsable del tratamiento, CHAVEZ & CLARK S.L., tiene designado un Delegado de Protección de Datos quien podrá informarle y asesorarle en la forma de ejercer sus derechos, pudiendo acceder al mismo a través del correo electrónico <a href="mailto:info@marcagratis.es">info@marcagratis.es</a> y en el teléfono <a href="tel:+34956314662">956314662</a>.<br /><br />

                        Igualmente deben saber que pueden elevar sus quejas o denuncias a la Agencia Española de Protección de Datos, órgano de control designado para España.
                    </p>

                    <h3>6.- Seguridad</h3>
                    <p>
                        CHAVEZ & CLARK S.L., mantiene los niveles de seguridad de protección de datos personales conforme al REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos así como a las normas nacionales actualmente en vigor, y ha establecido todos los medios técnicos a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos que el usuario facilite a través del sitio Web, sin perjuicio de informarle de que las medidas de seguridad en Internet no son inexpugnables.<br /><br />

                        CHAVEZ & CLARK S.L., se compromete a cumplir con el deber de secreto y confidencialidad respecto de los datos personales contenidos en el fichero automatizado de acuerdo con la legislación aplicable, así como a conferirles un tratamiento seguro en las cesiones, que, en su caso, puedan producirse.
                    </p>

                    <h3>7.- Información sobre cookies y técnicas de “spamming”</h3>
                    <p>
                        El usuario consiente el uso de cookies, que en ningún caso permitirán su identificación, con la exclusiva finalidad de facilitar su navegación por las diferentes páginas del presente sitio Web y que en ningún caso permitirán la identificación del usuario. En cualquier caso, el usuario podrá denegar o impedir la instalación de estas cookies modificando la configuración de su navegador.<br /><br />

                        CHAVEZ & CLARK S.L., tampoco utiliza técnicas de “spamming” y únicamente tratará los datos que el usuario transmita mediante los formularios electrónicos habilitados en este sitio Web o mensajes de correo electrónico.<br /><br />

                        En caso de duda o controversia relativas a nuestra política de privacidad y de protección de datos personales el usuario puede ponerse en contacto con nosotros. El tratamiento de los datos de carácter personal, así como el envío de comunicaciones comerciales realizadas por medios electrónicos, son conformes a la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (B.O.E. de 14 de diciembre de 1999) y a la Ley 34/2002, de 11 de julio, de servicios de la Sociedad de Información y de Comercio Electrónico (B.O.E. de 12 de julio de 2002).
                    </p>

                    <h3>8.- Modificación de la presente política de privacidad</h3>
                    <p>CHAVEZ & CLARK S.L., se reserva el derecho a modificar la presente política para adaptarla a futuras novedades legislativas o jurisprudenciales, así como a prácticas de la industria, informando previamente a los usuarios de los cambios que en ella se produzca.</p>
                </div>
            </section>
        </div>
    );
}