import footerStyles from "./Footer.module.css";
import iconTwitter from "../../assets/svg/footer_twitter.svg";
import iconFacebook from "../../assets/svg/footer_facebook.svg";
import iconInstagram from "../../assets/svg/footer_instagram.svg";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer>
        <div className={footerStyles.colfooter}>
            <div className={footerStyles.frasefooter}>
                LOS MEJORES SABORES,<br />
                ESTAS A PUNTO DE<br />
                DESCUBRIRLOS.
            </div>
            <div className={footerStyles.enlaceslegales}>
                <Link to={`/${props.lang}/aviso-legal/`}>Aviso legal</Link>
                <Link to={`/${props.lang}/politica-de-privacidad/`}>Política de privacidad</Link>
                {/* <a href={`/${props.lang}/politica-de-cookies/`}>Política de cookies</a> */}
            </div>
        </div>
        <div className={footerStyles.colfooter}>
            <div className={footerStyles.frase_siguenos}>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
                <span>Siguenos!&nbsp;</span>
            </div>
            <div className={footerStyles.iconos_redes_sociales}>
                <div className={footerStyles.footer_twitter}>
                    <a href="https://twitter.com/SuperMexFoods" target="_blank" rel="noreferrer">
                        <img src={iconTwitter} alt="Twitter" className="imagenwidth" width="201" height="201" />
                    </a>
                </div>
                <div className={footerStyles.footer_facebook}>
                    <a href="https://www.facebook.com/SuperMexFoods" target="_blank" rel="noreferrer">
                        <img src={iconFacebook} alt="Facebook" className="imagenwidth" width="261" height="238" />
                    </a>
                </div>
                <div className={footerStyles.footer_instagram}>
                    <a href="https://www.instagram.com/supermexfoods/" target="_blank" rel="noreferrer">
                        <img src={iconInstagram} alt="Instagram" className="imagenwidth" width="195" height="196" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}
