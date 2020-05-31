import React, {Component, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
export default class AboutScreen extends Component {

render(){
    return(
        <View style={styles.container}>
     <View style = {styles.header}>
            <Text style = {styles.headerText}>About Us</Text>
        </View>
        <View style = {styles.logoContainer}>
            <Text style = {styles.title}>Team RAM</Text>
        </View> 
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    <Image 
                    source={require('./../../assets/TEGRAY.png')}
                    style={{height: 100, width:100, borderRadius: 50}}
                    />
                    <Text style={{color: 'white', fontSize: 14}}>
                        Vikram Nagapudi
                    </Text>
                </View>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    <Image 
                    source={require('./../../assets/TEGRAY.png')}
                    style={{height: 100, width:100, borderRadius: 50}}
                    />
                    <Text style={{color: 'white', fontSize: 14}}>
                        Rajat
                    </Text>
                </View>
            </View>
            
            <View style={{height: 100}}>
                
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    <Image 
                    source={require('./../../assets/TEGRAY.png')}
                    style={{height: 100, width:100, borderRadius: 50}}
                    />
                    <Text style={{color: 'white', fontSize: 14}}>
                        Vikram Nagapudi
                    </Text>
                </View>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    <Image 
                    source={require('./../../assets/TEGRAY.png')}
                    style={{height: 100, width:100, borderRadius: 50}}
                    />
                    <Text style={{color: 'white', fontSize: 14}}>
                        Rajat
                    </Text>
                </View>
            </View>
        </View>
        </View>
    )
}
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#5bc786',
        flex: 1,
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
})
