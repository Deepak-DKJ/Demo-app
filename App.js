import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AppName from './Components/AppName';

export default function App() {

  // STATES
  const [coin, setCoin] = useState('H');
  const [score, setScore] = useState(0);
  const [tossValue, setTossValue] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  // LOGIC HANDLING
  const handleToggleChoice = () => {
    setCoin(coin === 'H' ? 'T' : 'H');
  };

  const handleFlipCoin = () => {
    const result = Math.random() < 0.5 ? 'HEADS' : 'TAILS';
    const r = result === 'HEADS' ? 'H' : 'T';

    if (coin === r) {
      setScore(score + 10);
      setBackgroundColor('#20C20E'); 
    } else {
      setScore(score - 10);
      setBackgroundColor('#FF2700');
    }
    // set the toss value based on the result
    setTossValue(result);

    setTimeout(() => {
      setBackgroundColor('#fff');
      setTossValue(''); // reset the toss value after 1 second
    }, 1000);
  };

  const setBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
    {/* COMPONENT - App.js & AppName     HOT RELOADING*/}
    <AppName title="Coin Game"/>   
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>Choice: {coin}</Text>
        <Button title="Toggle Choice" onPress={handleToggleChoice}/>
      </View>
      <Text style={styles.tossValueText}>{tossValue}</Text>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Button title="Flip Coin" onPress={handleFlipCoin} />
      <StatusBar style="auto" />
    </View>
  );
}


// STYLES OF THE UI ELEMENTS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinContainer: {
    alignItems: 'center',
  },
  coinText: {
    fontSize: 22,
    marginBottom: 10,
    marginTop:30
  },
  tossValueText: {
    color: "white",
    fontSize: 75, 
    marginTop: 110,
    marginBottom: 110
  },
  scoreText: {
    fontSize: 28,
    color: "blue",
    marginTop: 20,
    fontWeight: "bold" ,
    marginBottom: 10
  },
});
