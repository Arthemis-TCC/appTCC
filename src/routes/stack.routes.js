import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import { Splash } from '../lotties/Splash';
import Login from '../screens/login.js';
import Cadastro from '../screens/cadastro.js';
import Home from '../screens/home.js';
import Acompanhamento from '../screens/acompanhamento.js';
import Denuncia from '../screens/denuncia.js';
import DiskDenuncia from '../screens/diskdenuncia.js';
import SeusProcessos from '../screens/seusprocessos.js';
import Solicitacao from '../screens/solicitacao.js';
import SuasDenuncias from '../screens/suasdenuncias.js';


const Stack = createNativeStackNavigator();


function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}
        }>
            
            <Stack.Screen name="Cadastro" component={Cadastro}  /> 
            <Stack.Screen name="Login" component={Login} />      
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Acompanhamento" component={Acompanhamento} />
            <Stack.Screen name="Denuncia" component={Denuncia} /> 
            <Stack.Screen name="DiskDenuncia" component={DiskDenuncia} /> 
            <Stack.Screen name="SeusProcessos" component={SeusProcessos} />
            <Stack.Screen name="Solicitacao" component={Solicitacao} />
            <Stack.Screen name="SuasDenuncias" component={SuasDenuncias} />    
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;