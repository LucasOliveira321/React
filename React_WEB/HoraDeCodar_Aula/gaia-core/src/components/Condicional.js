import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limpar(e){
        e.preventDefault();
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre seu Email</h2>
            <form>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O email é: {userEmail}</p>
                    <button onClick={limpar}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional