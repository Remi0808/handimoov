import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from "./screen/NavBar";
import PageLoisirs from "./screen/PageLoisirs";
import { NavigationContainer } from '@react-navigation/native';
import PageMedical from "./screen/PageMedical";
import Modal from "./screen/Modal";
import SlidePage1 from "./screen/SlidePage1";
import SlidePage2 from "./screen/SlidePage2";
import SlidePage3 from "./screen/SlidePage3";
import SlidePage4 from "./screen/SlidePage4";
import SlidePage5 from "./screen/SlidePage5";
import Intro from "./screen/Intro";





const Stack = createNativeStackNavigator();

export default function App() {


  
  return (

    
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen options={{headerShown:false}} name="SlidePage1" component={SlidePage1} />
      <Stack.Screen options={{headerShown:false}} name="Intro" component={Intro} />
      <Stack.Screen options={{headerShown:false}} name="SlidePage3" component={SlidePage3} />
      <Stack.Screen options={{headerShown:false}} name="SlidePage2" component={SlidePage2} />
      <Stack.Screen options={{headerShown:false}} name="SlidePage4" component={SlidePage4} />
      <Stack.Screen  name="Modal" component={Modal} />
      <Stack.Screen options={{headerShown:false}} name="NavBar" component={NavBar} />
      <Stack.Screen  name="PageLoisirs" component={PageLoisirs} />
      {/* <Stack.Screen  name="PageMedical" component={PageMedical} /> */}
      <Stack.Screen options={{headerShown:false}} name="SlidePage5" component={SlidePage5} />
     </Stack.Navigator>
    </NavigationContainer>
    
    
    
  );
};
