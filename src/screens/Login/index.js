import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {styles} from './style';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
    ImageBackground

  } from 'react-native';


  import folhas from '../../assets/folhas.png';
  import fundo2 from '../../assets/fundo2.png';
  
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Login() {
    const navigation= useNavigation();

    const [logged, setLogged] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(){      
      const obj = { email, senha };
      const res = await api.post('bdtcc/BD/login/login.php', obj);

      if(res.data.result === 'Dados Incorretos!'){
        Alert.alert('Ops!', 'Dados Incorretos!');
      }else{
     //   await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));
       // await AsyncStorage.setItem('@nivel', JSON.stringify(res.data.result[0].nivel));
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }

    }

   
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
      
      if(user){
        setLogged(1);
  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        setLogged(2)
      }
    }
  
    useEffect(() => {
      checkLogin();
    }, []);
  

    return(
      <View style={styles.container}>
      <ImageBackground style={styles.fundo} source={folhas}>
      <StatusBar translucent hidden />
      <Image style={styles.logo} source={require('../../assets/logo.png')} />

      <View style={styles.form}>
        <ImageBackground style={styles.fundo2} source={fundo2}>
        <Text style={styles.inputText}>E-mail:</Text>
        <TextInput
          style={styles.login}
          placeholder="Informe seu e-mail"
          value={email}
          onChangeText={ (email) => setEmail(email)}
        />

        <Text style={styles.inputText}>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={ (senha) => setSenha(senha)}
        />

        <Text style={styles.loginText}>Esqueceu a senha?</Text>

        <TouchableOpacity
          style={styles.loginSave}
          onPress={login}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>Ainda não tem uma conta? Cadastre-se</Text>
        </ImageBackground>

      </View>
      </ImageBackground>
      </View>
    )
  }