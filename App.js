import React,{useState, useEffect} from 'react';
import {StyleSheet,View, Text} from 'react-native';
import firebase from './src/Connection';


export default function App(){


  //Função pegaNome
   const [nome,setNome]=useState('Verificando Nome...');
   const [idade,setIdade]=useState('Verificando Idade...');
   const [curso,setCurso]=useState('Verificando Curso...');
   const [modulo,setModulo]=useState('Verificando Módulo...');
  
  
    useEffect(()=>{
     
      async function Dados(){
          await firebase.database().ref('usuarios/3').on('value',(snapshot)=>{
              setNome(snapshot.val().nome);
              setIdade(snapshot.val().idade);
              setCurso(snapshot.val().curso);
              setModulo(snapshot.val().modulo);
  
          })
      }
      Dados();
    },[]);
  
      return(
          <View style ={{marginTop:25}}>
              <Text>Aluno: {nome}</Text>
              <Text>Idade: {idade}</Text>
              <Text>Curso: {curso}</Text>
              <Text>Módulo: {modulo}</Text>
          </View>
      );
  }