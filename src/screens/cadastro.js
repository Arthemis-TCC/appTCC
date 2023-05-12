import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useState } from 'react-native';

export default function Cadastro() {

  const [nome, setNome] = useState("");   
  const [email, setEmail] = useState("");   
  const [senha, setSenha] = useState("");

  async function Login(){      
    const obj = { email, senha };

    if(nome == "" || email == "" || senha == "") {
      showMessage({
          message: "Erro ao Salvar",
          description: 'Preencha os Campos Obrigatórios!',
          type: "warning",
    });
    }else{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    }
  }

  return (
    <View style={{ flex: 1, marginTop: 20 }}>

    <ScrollView>   
    <View>
        <Text style={styles.TitleInputs}>Nome completo:</Text>

        <TextInput
            placeholder="Insira seu nome completo"
            onChangeText={(text) => setNome(text)}
            value={nome}
            style={styles.TextInput}
        />
    </View>

    <View>
        <Text style={styles.TitleInputs}>E-mail:</Text>

        <TextInput
            placeholder="insira seu e-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.TextInput}
           
        />
    </View>

    <View>
        <Text style={styles.TitleInputs}>Senha:</Text>

        <TextInput
          secureTextEntry={true}
            placeholder="Insira a sua senha"
            onChangeText={(text) => setSenha(text)}
            value={senha}
            style={styles.TextInput}
           
        />
    </View>

        <TouchableOpacity
            style={styles.Button}
            onPress={Login}
        >
            <Text style={styles.ButtonText}>Logar</Text>
        </TouchableOpacity>

        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  TextInput:{
    borderWidth: 0.5,
    borderColor: '#000',
    width: '90%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    alignSelf: "center",
    backgroundColor: '#fff',
    height: 45,
  },

  TitleInputs:{
    fontSize: 18,
    color: "#000",
    marginLeft: 35,
    marginTop: 15,
  },

  Button:{
    backgroundColor: 'green',
    width: '60%',
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  ButtonText:{
    fontSize: 20,
    color: '#fff',
  },
});