import stylesLogin from "./Login.module.css";

export default function Login(){
    return(
        <div className={stylesLogin.bodyLogin}>
            <div>
                <div className={stylesLogin.tituloLogin}><h1>Administración</h1></div>
                <div className={stylesLogin.sectionLogin}>
                    <form>
                        <div>
                            <label htmlFor="userAdmin">Usuario</label>
                            <input type="text" id="userAdmin" required />
                            </div>
                        <div>
                            <label htmlFor="passwordAdmin">Contraseña</label>
                            <input type="password" id="passwordAdmin" required />
                        </div>
                        <div className={stylesLogin.bt}><button type="button">Identificarse</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}