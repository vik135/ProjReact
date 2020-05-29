import React, {Component, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
export default class LoginScreen extends Component {
    state = {
        username: 'minkah',
        password: 'steelers',
        email: 'minkah@minkah.com',
        inputUsername: '',
        inputPassword:'',
    }
    onChangeText = (stateObject, text) => {
        this.setState({
            [stateObject]: text,
        });
    };
    clickHandler = () => {
           if ((this.state.inputUsername == this.state.username) && (this.state.inputPassword == this.state.password)) {
            this.props.navigation.navigate('Search');
           }
           else if ((this.state.inputUsername == this.state.email) && (this.state.inputPassword == this.state.password)) {
            this.props.navigation.navigate('Search');
           }
           else {
            Alert.alert('OOPS', 'Incorrect Username or Password', [
                {text: 'Try Again', onPress: () => console.log('alert closed')}
            ]);
        }
    }
render () {
   return (
    <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>QuestSuggest</Text>
            </View>
            <View style = {styles.logoContainer}>
                <Text style = {styles.title}>Find your adventure!</Text>
            </View>
            <View style = {styles.formContainer}>
                <StatusBar
                    barStyle = 'light-content'
                />
                <TextInput
                    placeholder = "Username or Email"
                    placeholderTextColor = "black"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = 'email-address'
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('inputUsername', text)}
                /> 
                <TextInput
                    placeholder = "Password"
                    placeholderTextColor = "black"
                    returnKeyType = "Go"
                    secureTextEntry
                    style = {styles.input}
                    ref = {(input) => this.passwordInput = input}
                    onChangeText={(text) => this.onChangeText('inputPassword', text)}
                /> 
                <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'Login'
                        onPress = {this.clickHandler}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
    );
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
      marginBottom: 430,
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
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 15,
    color: "black",
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