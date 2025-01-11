import GridButton from "@/components/GridButton";
import Grid from "@/components/Grid"
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Start from "@/components/Start";
import LoseScreen from "@/components/LoseScreen";

const Index = () => {
  const [isGameActive, activateGame] = useState(false);
  const [gameLost, setGameLost] = useState(false)
  const [score, setScore] = useState(0)

  if(!isGameActive && !gameLost){
    return(
      <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <Start startGame={activateGame}></Start>
        </View>
      </View>
    )
  } else if(!isGameActive && gameLost){
    return(
    <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <LoseScreen score={score} startGame={activateGame} activateLoss={setGameLost}></LoseScreen>
        </View>
      </View>)
  }
  else{
  return (
    <View style= {styles.container}>
      <Text style= {styles.textHeader}>Memorio!</Text>
      <View style= {styles.gridContainer}>
        <Grid gamestate= {false} gameSequence={[]} flipGame={activateGame} setGameLoss={setGameLost} setScore={setScore}></Grid>
      </View>
      </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFE4C4"
  },
  buttonContainer: {
    margin: 20,
    color: "#857234",
    alignItems: "center"
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100
  },
  textHeader: {
    fontSize: 40, // Large and prominent
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue', // Bright red for emphasis
    textShadowColor: 'cyan', // Subtle shadow for a glowing effect
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2, // Adds spacing for a dramatic effect
    textTransform: 'uppercase', // Makes the text more striking
  }
});

export default Index;