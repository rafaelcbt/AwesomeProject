import React,{useState, useEffect} from 'react';
import {StyleSheet,View, Text} from 'react-native';
import firebase from './src/Connection';


export default function App(){


  //Função pegaNome
   const [nome,setNome]=useState('Testando Nome...');
   const [idade,setIdade]=useState('Testando Idade...');
  
  
    useEffect(()=>{
     
      async function Dados(){
          await firebase.database().ref('usuarios/1').on('value',(snapshot)=>{
              setNome(snapshot.val().nome);
              setIdade(snapshot.val().idade);
  
          })
      }
      Dados();
    },[]);
  
      return(
          <View style ={{marginTop:25}}>
              <Text>{nome}</Text>
              <Text>{idade}</Text>
          </View>
      );
  }