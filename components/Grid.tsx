import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import React, { useState } from "react"
import GridButton from "./GridButton";

type gridProps = {
    gamestate: boolean;
    gameSequence: Array<number>
    flipGame: Function
}

export default function Grid(props: gridProps){
    const [playerTurn, switchTurns] = useState(true)
    let seqIndex = 0;
    let playerSequence: number[] = []
    return(
        <View style= {styles.grid}>
            <View style= {styles.row}>
                <GridButton id= {1} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {2} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {3} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
            </View>
            <View style= {styles.row}>
                <GridButton id= {4} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {5} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {6} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
            </View>
            <View style= {styles.row}>
                <GridButton id= {7} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {8} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
                <GridButton id= {9} gameSequence= {props.gameSequence} flipGame= {props.flipGame} seqIndex={seqIndex} playerTurn= {playerTurn} playerSeq={playerSequence}></GridButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        backgroundColor: "black",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})