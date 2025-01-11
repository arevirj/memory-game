import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import React, { useEffect, useState } from "react"
import GridButton from "./GridButton";

type gridProps = {
    gamestate: boolean;
    gameSequence: Array<number>
    flipGame: Function
    setGameLoss: Function
    setScore: Function
}
let turnText = "Pay Attention..."
export default function Grid(props: gridProps){
    const [playerTurn, switchTurns] = useState(false)
    let playerSequence: number[] = []
    const [flashingId, setFlashingId] = useState<number | null>(null);
  
        if(!playerTurn){
            computerTurn(props.gameSequence)
            flashTurn(props.gameSequence, setFlashingId)
            switchTurns(true)
        }
        
    return(
        //Creating dynamic grid structure.
        <View>
            <Text style= {styles.turntext}>{turnText}</Text>
            <View style={styles.grid}>
                {[...Array(3)].map((_, rowIndex) => (
                    <View style={styles.row} key={rowIndex}>
                        {[...Array(3)].map((_, colIndex) => {
                            const id = rowIndex * 3 + colIndex + 1;
                            return (
                                <GridButton
                                    key={id}
                                    id={id}
                                    gameSequence={props.gameSequence}
                                    flipGame={props.flipGame}
                                    playerTurn={playerTurn}
                                    playerSeq={playerSequence}
                                    switch={switchTurns}
                                    flash={flashingId === id} // Flash when this button is active
                                    setLoss={props.setGameLoss}
                                    setScore={props.setScore}
                                />
                            );
                        })}
                    </View>
                ))}
            </View>
        </View>
    );
}

const computerTurn = (sequence: Array<number>) => {
    sequence.push(Math.floor(Math.random() * 9) + 1)
    console.log(sequence)
}

const flashTurn = (sequence: Array<number>, setFlashingId: (id:number | null) => void) => {
    let index = 0;
    const interval = setInterval(() => {
        if(index< sequence.length) {
            if(index == 0){
                turnText = "Pay attention.."
            }
            if(index == sequence.length-1){
                setTimeout(() => turnText = "Your Turn", 100)
            }
        setFlashingId(sequence[index])
        setTimeout(() => setFlashingId(null), 500)
        index++; }
        else{
            clearInterval(interval);
        }
        }, 700)
    }



const styles = StyleSheet.create({
    grid: {
        backgroundColor: "gray",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    turntext: {
        fontSize: 28, // Large and prominent
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF3333', // Bright red for emphasis
        textShadowColor: '#FFAAAA', // Subtle shadow for a glowing effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 2, // Adds spacing for a dramatic effect
        textTransform: 'uppercase', // Makes the text more striking
        marginTop: 30
    },
});
