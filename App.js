
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native';

const CustomButton = ({title, onPress}) => {
  return(
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const CamposLogin = ({label, placeholder}) => {
  return(
    <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}


const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo-eclipse.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Clipse</Text>
      <CamposLogin label={'Usuario o correo electrónico'} placeholder={'Usuario'}/>
      <CamposLogin label={'Contraseña'} placeholder={'Contraseña'}/>
      <CustomButton title="Iniciar sesión" onPress={() => alert('Esto será un login')}/>
      <Text style={styles.subtitle}>Filipelli Taiel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginTop: 60,
  },
  button :{
    backgroundColor: '#000',
    fontSize:25,
    width: 150,
    height:50,
    borderRadius: 5,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
  },
  label:{
    paddingTop: 20,
    fontSize: 17,
  },
  input:{
    backgroundColor: '#3333',
    borderRadius: 5,
    width:210,
  }

});

export default App;
