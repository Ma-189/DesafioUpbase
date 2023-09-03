import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@rneui/base/dist/Header/Header';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable} from 'react-native';
import CheckBox from 'expo-checkbox';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo-app-loading';

export default function App() {
  
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [ fontsLoades ] = useFonts({
    Montserrat_600SemiBold
  })

  if (!fontsLoades) {
    <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        padding='10px'
        backgroundColor='#006557'
        height={85}
        marginBottom={40}
        leftComponent={{ icon: 'west', color: '#fff'}}
        centerComponent={{ text: 'Reportar', style: { color: '#fff', fontSize: 23} }}
      />

      <View style={styles.container}> 
        <View style={styles.section}>
          <View style={styles.row}>
            <CheckBox style={styles.checkbox} color= '#f0f0f0f0' value={isChecked1} onValueChange={setChecked1} /> 
            <Text style={styles.textCheckbox}>O profissional não compareceu.</Text>
          </View>
          <View style={styles.row}>
            <CheckBox style={styles.checkbox} color= '#f0f0f0f0' value={isChecked2} onValueChange={setChecked2} /> 
            <Text style={styles.textCheckbox2}>O profissional não prestou um bom serviço.</Text>
            </View>
          <View style={styles.row}>
            <CheckBox style={styles.checkbox} color= '#f0f0f0f0' value={isChecked3} onValueChange={setChecked3} /> 
            <Text style={styles.textCheckbox}>Outro.</Text>
          </View>
        </View>
          <TextInput
            style={styles.input}
            placeholder="Título"
            placeholderTextColor={'#5D5D5D'}
          />
          <TextInput
            style={styles.inputExplique}
            placeholder="Explique aqui o que houve."
            placeholderTextColor={'#5D5D5D'}
            numberOfLines={20}
            multiline={true}
          />

          <Pressable style={styles.button}>
            <Text style={styles.text}>Reportar</Text>
          </Pressable>
        <StatusBar style='auto' backgroundColor='#006557'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'auto',
  },

  section: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },

  checkbox: {
    margin: 8,
  },

  textCheckbox: {
    fontSize: 16, 
    fontFamily:'Montserrat_600SemiBold',
    color: '#5D5D5D'
  },
  textCheckbox2: {
    fontSize: 16,
    fontFamily:'Montserrat_600SemiBold',
    color: '#5D5D5D',
  },

  input: {
    height: 50,
    width: 330,
    margin: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0f0',
    borderRadius: 3,
    padding: 10
  },

  inputExplique: {
    height: 280,
    width: 330,
    margin: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0f0',
    borderRadius: 3,
    paddingTop: 12,
    padding: 12,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 135,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#07689F',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    
    fontFamily:'Montserrat_600SemiBold',
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },
});
