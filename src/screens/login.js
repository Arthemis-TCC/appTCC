import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image, Alert, useState } from 'react-native';

export default function Login() {

  //const [logged, setLogged] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function Home(){      
    const obj = { email, senha };

    if(email == "" || senha == "") {
      showMessage({
          message: "Erro ao Salvar",
          description: 'Preencha os Campos Obrigatórios!',
          type: "warning",
    });
    }else{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent hidden />

      <View style={styles.form}>

      <Text style={styles.TitleInputs}>E-mail:</Text>

        <TextInput
          style={styles.login}
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={ (email) => setEmail(email)}
        />

       <Text style={styles.TitleInputs}>Senha:</Text>

        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={ (senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.loginSave}
          onPress={Home}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center'
  },

  TitleInputs:{
    fontSize: 18,
    color: "#000",
    marginLeft: 35,
    marginTop: 15,
  },

  form:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: 50,
    paddingLeft: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#C1C1C1',
    marginBottom: 10,
  },

  loginSave:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e36222',
    marginTop: 15,
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
  },

  text:{
    color: '#fff',
    fontSize: 20,
  },
});