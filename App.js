import React from 'react'; 
import {StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import {useFonts} from 'expo-font';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": require('./assets/fonts/static/Montserrat-Regular.ttf'),
    "MontserratBold": require('./assets/fonts/static/Montserrat-Bold.ttf'),
  });

  if(!fonteCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}