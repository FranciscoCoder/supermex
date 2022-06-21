import "./Login.css";

export default function Login(){
    return(
        <div>
            <div><h1>Administración</h1></div>
            <div class="sectionLogin">
                <form>
                    
                    <div>
                        <label for="userAdmin">Usuario</label>
                        <input type="text" id="userAdmin" required />
                        </div>
                    <div>
                        <label for="passwordAdmin">Contraseña</label>
                        <input type="password" id="passwordAdmin" required />
                    </div>
                    <button type="button">Identificarse</button>
                </form>
            </div>
        </div>
    );
}