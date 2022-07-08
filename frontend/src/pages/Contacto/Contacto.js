import { useState } from "react";
import {changeStyleBody} from '../../components/Utils';
import globalUrl from '../../components/Utils';
import styleContacto from './Contacto.module.css';
import bannerContacto from "../../assets/images/banner_contacto.jpg";
import iconoLagarto from "../../assets/svg/glifo_lagarto.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Contacto(props){
    changeStyleBody('fondoazuloscuro','fondorosa');
    const navigate = useNavigate();
    const [estadoEnvio, setEstadoEnvio] = useState(false);
    const [formValues, setFormValues] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" , acepto: "0" });
    const handleInputChange = (e) => {
        //Ingresamos los campos del formulario
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        
        //Comprobacion del campo tipo checkbox
        if(e.target.checked){
            setFormValues((prev) => ({...prev, [e.target.name]: e.target.value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${globalUrl}/api/contact`,{
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.resultado==="ok"){
                setEstadoEnvio(true);
            }
        });
      };

    if (estadoEnvio) {
        navigate(`/${props.lang}/enviado`, { replace: true });
    };
    
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
                <div><img src={iconoLagarto} width="490" height="443" alt="glifo lagarto" /></div>
                <div>
                    <h1>Contáctanos</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styleContacto.formContacto}>
                        
                            <div className={styleContacto.colContacto}>
                                <div><input type="text" name="nombre" id="nombreContacto" required placeholder='nombre' onChange={handleInputChange} value={formValues.nombre} /></div>
                                <div><input type="email" name="correo" id="correoContacto" required placeholder='correo' onChange={handleInputChange} value={formValues.correo} /></div>
                                <div><input type="tel" name="telefono" id="telefonoContacto" required placeholder='teléfono' onChange={handleInputChange} value={formValues.telefono} /></div>
                            </div>
                            <div className={styleContacto.colContacto}>
                                <div>
                                    <textarea name="mensaje" id="mensajeContacto" placeholder='¡Hola!' onChange={handleInputChange} value={formValues.mensaje}></textarea>
                                </div>
                                <div className={styleContacto.aceptoPolitica}>
                                    <input type="checkbox" name="acepto" id='aceptoContacto' onChange={handleInputChange} value="1" required /> He leído y acepto la <Link to={`/${props.lang}/politica-de-privacidad/`}>política de privacidad</Link>.
                                </div>
                                <div className={styleContacto.botonEnviar}> 
                                    <button type='submit'>enviar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className={styleContacto.section3}>
                <div>
                    <div>
                        <h2>FÁBRICA / ENVÍOS</h2>
                        <p>
                            Pol. Ind. Las Salinas de Poniente / C. Eratóstenes, 198. CP 11500 - El Puerto de Santa María, Cádiz (España)
                        </p>
                    </div>
                    <div>
                        <h2>TELÉFONO</h2>
                        <p><a href="tel:+34956841136" target="_blank" rel="noreferrer">(+34) 956 841 136</a></p>
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
                        <p><a href="mail:info@supermexfoods.com" target="_blank" rel="noreferrer">info@supermexfoods.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}