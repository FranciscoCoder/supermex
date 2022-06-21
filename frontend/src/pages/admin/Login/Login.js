import "./Login.css";

export default function Login(){
    return(
        <div className="bodyLogin">
            <div>
                <div className="tituloLogin"><h1>Administración</h1></div>
                <div className="sectionLogin">
                    <form>
                        <div>
                            <label for="userAdmin">Usuario</label>
                            <input type="text" id="userAdmin" required />
                            </div>
                        <div>
                            <label for="passwordAdmin">Contraseña</label>
                            <input type="password" id="passwordAdmin" required />
                        </div>
                        <div className="bt"><button type="button">Identificarse</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}