// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Splash';
import MobNumVerPage from './src/MobNumVerPage';
import LangPage from './src/LangPage';
import FarmLoc from './src/FarmLoc';
import OtpVer from './src/OtpVer';
import NameInfo from './src/NameInfo';
import AnimalInfo from './src/AnimalInfo';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LangPage" component={LangPage}/>
        <Stack.Screen name="MobNumVerPage" component={MobNumVerPage} />
        <Stack.Screen name="OtpVer" component={OtpVer}/>
        <Stack.Screen name="NameInfo" component={NameInfo}/>
        <Stack.Screen name="FarmLoc" component={FarmLoc}/>
        <Stack.Screen name="AnimalInfo" component={AnimalInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
