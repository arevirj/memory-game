import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import React, { useEffect, useState } from "react"
import GridButton from "./GridButton";

type gridProps = {
    gamestate: boolean;
    gameSequence: Array<number>
    flipGame: Function
}

export default function Grid(props: gridProps){
    const [playerTurn, switchTurns] = useState(false)
    let playerSequence: number[] = []
    const [flashingId, setFlashingId] = useState<number | null>(null);

    useEffect(() => {
        if(!playerTurn){
            computerTurn(props.gameSequence, setFlashingId)
            switchTurns(true)
        }
    }
    )
    
    return(
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
                            />
                        );
                    })}
                </View>
            ))}
        </View>
    );
}

const computerTurn = (sequence: Array<number>, setFlashingId:(id: number | null) => void) => {
    sequence.push(Math.floor(Math.random() * 9) + 1)
    console.log(sequence)
    let index = 0;
    const interval = setInterval(() => {
        if (index < sequence.length) {
            setFlashingId(sequence[index]); // Flash the current button
            setTimeout(() => setFlashingId(null), 500); // Reset flash after 500ms
            index++;
        } else {
            clearInterval(interval); // Stop the playback
        }
    }, 700);
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
});
