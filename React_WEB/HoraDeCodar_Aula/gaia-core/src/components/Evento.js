import Button from "./Button";
function Evento(){

    function meuEvento(){
        console.log('Foi ativado');
    }

    return(
        <div>
            <p>Clique aqui</p>
            <Button event={meuEvento} text="Primeiro evento"/>
        </div>
    )
}

export default Evento