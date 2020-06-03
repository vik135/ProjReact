import React, {Component, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
export default class DestinationScreen extends Component {
    
render(){
    return(
        <View style={styles.container}>
     <View style = {styles.header}>
            <Text style = {styles.headerText}>Destinations</Text>
        </View>
        <View style = {styles.logoContainer}>
            <Text style = {styles.title}>Welcome to New England!</Text>
        </View> 
            <View style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <View style={{alignItems:'left', marginBottom: 100}}>
                    <Image 
                    source={require('./Boston.PNG')}
                    style={{height: 300, width:500, marginTop: 75}}
                    />
                    <Text style={{color: 'white', fontSize: 26, fontFamily: 'Pacifica', marginBottom: 10}}>
                    Boston, Massachusetts: 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    Boston is best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    for the bar from Cheers. But dig a little deeper below the surface and you'll find a surprising wealth 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica', marginBottom: 20}}>
                    of things that make Boston one of the best cities in America—and the world.
                    </Text>
                    <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'More Details'
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'left', marginBottom: 75}}>
                    <Image 
                    source={require('../../assets/Newport.PNG')}
                    style={{height: 300, width:500, marginBottom: 5}}
                    />
                    <Text style={{color: 'white', fontSize: 26, fontFamily: 'Pacifica', marginBottom: 10}}>
                    Newport, Rhode Island:
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    Newport is a beautiful seaside city in Rhode Island that is famous for its mansions, shopping, and scenery.
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    Cobblestone streets and brick sidewalks accent an upscale touristy downtown area with many shops, galleries 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    and great restaurants - all located along water. Newport sits on the southern end of Aquidneck Island
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica', marginBottom: 20}}>
                    and features several fine beaches, rocky cliffs and much history including an old fort.
                    </Text>
                    <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'More Details'
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    />
                    </TouchableOpacity>
            </View>
                <View style={{alignItems:'left', marginBottom: 75}}>
                    <Image 
                    source={require('../../assets/Okemo.PNG')}
                    style={{height: 300, width:500, marginBottom: 5}}
                    />
                    <Text style={{color: 'white', fontSize: 26, fontFamily: 'Pacifica', marginBottom: 10}}>
                        Okemo Mt.
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    Okemo Mountain Resort and the surrounding area is the outdoor enthusiasts dream come true!
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    The wintertime brings exceptional Vermont skiing and snowboarding on snow that is known as one 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    of the best skiing and riding surfaces in the East year after year. While other mountains talk a big game, 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica'}}>
                    we've proven that it takes a lot of pipe, water and power - with highly trained, 
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontFamily: 'Pacifica', marginBottom: 20}}>
                    completely dedicated teams at the reins - to make it happen.
                    </Text>
                    <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'More Details'
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5bc786',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      marginBottom: 20,
    },
    logo: {
        width: 200,
        height:240,
    },
    title: {
        color: '#FFF',
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        opacity: 0.9,
    },
    header: {
      textAlign: 'center',
      marginTop: 150,
    },
    headerText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 50,
    },
    input: {
      height: 50,
      width: 350,
      backgroundColor: 'black',
      marginBottom: 15,
      color: "white",
      paddingHorizontal: 10,
      fontSize: 18,
      marginTop:0,
      },
      buttonContainer: {
          marginBottom: 70,
      },
      buttonText: {
          textAlign: 'center',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: 17,
      },  
  });


