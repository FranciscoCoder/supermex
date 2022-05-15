import "./Footer.css";
import iconTwitter from "../svg/footer_twitter.svg";
import iconFacebook from "../svg/footer_facebook.svg";
import iconInstagram from "../svg/footer_instagram.svg";

export default function Footer(props) {
  return (
    <footer>
        <div className="colfooter">
            <div className="frasefooter">
                LOS MEJORES SABORES,<br />
                ESTAS A PUNTO DE<br />
                DESCUBRIRLOS.
            </div>
            <div className="enlaceslegales">
                <a href={`/${props.lang}/aviso-legal/`}>Aviso legal</a>
                <a href={`/${props.lang}/politica-de-privacidad/`}>Política de privacidad</a>
                <a href={`/${props.lang}/politica-de-cookies/`}>Política de cookies</a>
            </div>
        </div>
        <div className="colfooter">
            <div className="frase_siguenos">
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
            </div>
            <div className="iconos_redes_sociales">
                <div className="footer_twitter"><a href="https://twitter.com/SuperMexFoods" target="_blank"><img src={iconTwitter} className="imagenwidth" width="201" height="201" /></a></div>
                <div className="footer_facebook"><a href="https://www.facebook.com/SuperMexFoods" target="_blank"><img src={iconFacebook} className="imagenwidth" width="261" height="238" /></a></div>
                <div className="footer_instagram"><a href="https://www.instagram.com/supermexfoods/" target="_blank"><img src={iconInstagram} className="imagenwidth" width="195" height="196" /></a></div>
            </div>
        </div>
    </footer>
  );
}
