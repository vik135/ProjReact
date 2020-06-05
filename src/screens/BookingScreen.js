import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.logoContainer}>
        <Text style = {styles.title}>Booking</Text>
      </View>
      <View>
        <Text style = {styles.title2}>
          Click the links below to book your trip.
        </Text>
      </View>
      <View>
        <Text style = {styles.title3}>
          https://www.tripadvisor.com/
          https://www.booking.com/
          https://www.expedia.com/
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bc786',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    marginTop: -350,
    fontSize: 40,
    textAlign: 'center',
    opacity: 0.9,
  },
  title2: {
    color: 'black',
    marginTop: -40,
    fontSize: 15,
    textAlign: 'center',
    opacity: .9,
  },
  title3: {
    color: 'black',
    marginTop: -10,
    fontSize: 15,
    textAlign: 'center',
    opacity: .9,
  }
});
