import GridButton from "@/components/GridButton";
import Grid from "@/components/Grid"
import { Button, Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { useEffect, useState } from "react";
import{ Link } from "expo-router"
import Start from "@/components/Start";
import LoseScreen from "@/components/LoseScreen";
import Leaderboard from "./leaderboard";
import LoseReturn from "@/components/LoseReturn";
import Login from "@/components/Login";
import User from "@/components/Users"
import auth from "@/backend/auth"
import db from "@/backend/database";
import {collection, doc, setDoc, addDoc, DocumentData, getFirestore, getDocs} from "firebase/firestore"

const Index = () => {
  const [user, setUser] = useState(auth.currentUser)
  const [isGameActive, activateGame] = useState(false);
  const [gameLost, setGameLost] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);
  if(!user){
    return(
    <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <Login setUser={setUser}></Login>
        </View>
      </View>
    )
  }
  else{
  if(!isGameActive && !gameLost){
    return(
      <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <Start startGame={activateGame}></Start>
          <View style= {styles.buttonContainer}>
             <Link href= "/leaderboard" asChild>
              <TouchableOpacity style={styles.altbutton}>
                <Text style={styles.altbuttonText}>Leaderboard</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text>Signed in as: {user.email}</Text>
          
        </View>
      </View>
    )
  } else if(!isGameActive && gameLost){
      console.log("Score updated: ", score)
      const docRef =  async () => { await addDoc(collection(db, "leaderboard"), {
        email: auth.currentUser?.email,
        score: score
      });
    }
    docRef().then(() => {console.log("success")}).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)}); 
    
    return(
    <View style= {styles.container}>
        <Text style= {styles.textHeader}>Memorio!</Text>
        <View style= {styles.buttonContainer}>
          <LoseScreen score={score} startGame={activateGame} activateLoss={setGameLost} user={auth.currentUser?.uid}></LoseScreen>
        </View>
        <View style= {styles.buttonContainer}>
          <LoseReturn activateLoss={setGameLost}></LoseReturn>
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
  },
  altbutton: {
    justifyContent: 'center',
      alignItems: 'center',
      width: 200, // Default width for the oval shape
      height: 50, // Default height for the oval shape
      borderRadius: 25, // Half of the height to make it an oval
      backgroundColor: 'red', // Gradient effect
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
  },
  altbuttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // Ensures the text stands out
    textAlign: 'center',
  }
});

export default Index;