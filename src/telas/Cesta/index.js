import React from "react";
import {ScrollView, StyleSheet, View} from 'react-native';
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/itens";

export default function Cesta({topo, detalhes, itens}){
    return <ScrollView>
    <Topo {...topo}/>
    <View style={estilos.cesta}>   
    <Detalhes {...detalhes}/>
    <Itens {...itens}></Itens>
    </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})