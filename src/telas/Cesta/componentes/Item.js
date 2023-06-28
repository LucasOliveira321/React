import React from "react";
import Texto from "../../componentes/Texto";
import { Image, View, StyleSheet, FlatList } from "react-native";

export default function Item({ item: {nome, imagem} }){
    return <View style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}></Image>
                <Texto style={estilos.texto}>{ nome }</Texto>
            </View>
}

const estilos = StyleSheet.create({
    
    item:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        borderRadius: 16,
        width: 46,
        height: 46,
    },
    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})
