import React from "react";
import { Text } from "react-native";

export default function Texto({ children, style }){
    let estilo = estilos.texto;

    // style? - o ponto de ? serve para verificar se existe na tag style,
    // caso tenha ele faz a verificação, caso não tenha ele não precisa
    // verificar, desta maneira não da erro na execução.
    if(style?.fontWeight == 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style = {[style,estilo]}>{ children }</Text>
}

const estilos = ({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal", 
    },
})