import React, {Component, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
export default class ReviewScreen extends Component {
constructor(props){
    super(props)
    this.state={

    }
}
    
render(){
    return(
    <View style={styles.container}>
     <View style = {styles.header}>
            <Text style = {styles.headerText}>QuestSuggest</Text>
        </View>
        <View style = {styles.logoContainer}>
            <Text style = {styles.title}>Find your adventure!</Text>
        </View> 
        <TextInput
        style={styles.input}
          placeholder='Write your feedback here!'
          placeholderTextColor='rgba(255,255,255,0.8)' 
          numberOfLines={10}
          multiline
        />
         <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'Submit'
                    />
        </TouchableOpacity>
        </View>
    )
} 
}

const styles = StyleSheet.create({
input: {
        width: 300,
        height: 200,
        backgroundColor: 'black',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
container: {
    backgroundColor: '#5bc786',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
title: {
    color: '#FFF',
    marginBottom: 300,
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.9,
},
header: {
  textAlign: 'center',
  marginTop: 50,
},
headerText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 50,
},
buttonContainer: {
    marginBottom: 70,
},
buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
},  
})
