import React from 'react'
import FlatButton from "../components/FlatButton";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // signin check for accurate email/password, moving to next page
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
          <View style = {styles.header}>
                <Text style = {styles.headerText}>QuestSuggest</Text>
            </View>
            <View style = {styles.logoContainer}>
                <Text style = {styles.title}>Find your adventure!</Text>
            </View>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.8)'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.8)'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.8)' 
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='rgba(255,255,255,0.8)'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TouchableOpacity style =  {styles.buttonContainer}>
                    <FlatButton
                        text = 'Sign Up'
                        onPress = {this.signUp}
                    />
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
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
  buttonContainer: {
    marginBottom: 70,
},
buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
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
  marginTop: 120,
},
headerText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 50,
},
})
