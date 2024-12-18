import GridButton from "@/components/GridButton";
import Grid from "@/components/Grid"
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Start from "@/components/Start";

const Index = () => {
  const [isGameActive, activateGame] = useState(false);
  if(!isGameActive){
    return(
      <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <Start startGame={activateGame}></Start>
        </View>
      </View>
    )
  } else{
  return (
    <View style= {styles.container}>
      <Text style= {styles.textHeader}>Memorio!</Text>
      <View style= {styles.gridContainer}>
        <Grid gamestate= {false} gameSequence={[]} flipGame={activateGame}></Grid>
      </View>
      </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey"
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
    textAlign: "center",
    textAlignVertical: "top",
    fontSize: 50,
    fontFamily: "Arial, Helvetica, sans-serif"
  }
});

export default Index;