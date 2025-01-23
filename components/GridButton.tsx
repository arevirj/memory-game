import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import Grid from "./Grid"
import { useState } from "react"
import auth from "@/backend/auth"

type gridButtonProps = {
    id: number
    gameSequence: Array<number>
    flipGame: Function
    playerTurn: boolean
    playerSeq: Array<number>
    switch: Function
    flash: boolean
    setScore: Function
    setLoss: Function
}

export default function GridButton(props: gridButtonProps){
    const color = getColor(props.id)
    const [isPressed, setIsPressed] = useState(false);
    if(!props.playerTurn){
        return(
           <View style= {[styles.button, {backgroundColor: color}]}></View>
        )
    }
    else{
        
    return(<TouchableOpacity activeOpacity= {1} onPressIn={() => setIsPressed(true)}  style = {[styles.button, isPressed && {
        width: 115,
        height: 115,
        backgroundColor: color,
        margin: 5
      }, props.flash && {backgroundColor: color}, ]} disabled= {!props.playerTurn} onPress= {() => {
        console.log(props.id)
        props.playerSeq.push(props.id)
        if(props.gameSequence[props.playerSeq.length - 1] != props.playerSeq[props.playerSeq.length-1]){
            console.log(props.gameSequence.length - 1)
            props.setScore(props.gameSequence.length -1)
            props.setLoss(true);
            props.flipGame(false);
        } else if(props.playerSeq.length == props.gameSequence.length){
            //flip player turn.
            props.switch(false)
            console.log("Success")
        }
        }} onPressOut={() => setIsPressed(false)}/>)
    }
}

const getColor = (id: number): string => {
    const colors = [
        "red", "orange", "yellow", 
        "green", "cyan", "blue", 
        "violet", "pink", "brown"
    ];
    return colors[id - 1] || "black"; // Default to black for out-of-range IDs
};



const styles = StyleSheet.create({
    button: {
        width: 115,
        height: 115,
        backgroundColor: 'black',
        margin: 5
      },
      pressedButton: {
        width: 115,
        height: 115,
        backgroundColor: '#F5F5F5',
        margin: 5
      }
})