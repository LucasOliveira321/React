import React from 'react'; 
import {StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import {useFonts} from 'expo-font';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": require('./assets/fonts/static/Montserrat-Regular.ttf'),
    "MontserratBold": require('./assets/fonts/static/Montserrat-Bold.ttf'),
  });

  if(!fonteCarregada){
    return <View />
  }

  return (
    // Colocar flex: 1, faz com que os componentes fiquem dentro da tela
    // Ocupando 100% do espaço da tela e não 200%, otimizando a aplicação
    <SafeAreaView style={ { flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}