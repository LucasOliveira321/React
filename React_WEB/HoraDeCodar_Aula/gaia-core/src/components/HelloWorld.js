import SayName from "./SayName.js";

function HelloWorld(){
    const nome = 'Lucas';
    const idade = 28;
    const profissao = 'Dev';

    return(
        <div>
            <h1>Componente</h1>
            <SayName 
            nome={nome} 
            idade={idade} 
            profissao={profissao} 
            />
            <SayName />
        </div>
    );
}

export default HelloWorld;