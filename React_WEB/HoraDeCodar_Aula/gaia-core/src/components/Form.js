import { useState } from 'react'

function Form(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function cadastrar(e){
        e.preventDefault();
        console.log(name);
        console.log(password);
    }

    

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name='name' 
                    placeholder="Digite aqui"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Senha: </label>
                    <input 
                    type="password" 
                    id="password" 
                    name='password' 
                    placeholder="Digite aqui"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form