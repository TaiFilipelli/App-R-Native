import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

const CustomButton = ({title, onPress}) => {
  return(
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};


const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/angel.png')} // Reemplaza con la ruta de tu logotipo
        style={styles.logo}
      />
      <Text style={styles.title}>Aplicación de prueba</Text>
      <Text style={styles.subtitle}>Filipelli Taiel</Text>
      <CustomButton title="Ingresar" onPress={() => alert('Esto llevará a algún lado...eventualmente.')}/>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
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
  }
});

export default App;
