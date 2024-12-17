import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import Grid from "./Grid"

type gridButtonProps = {
    id: number
    gameSequence: Array<number>
    flipGame: Function
    seqIndex: number
    playerTurn: boolean
    playerSeq: Array<number>
}

export default function GridButton(props: gridButtonProps){

    return(<TouchableOpacity style = {styles.button} disabled= {!props.playerTurn} onPress= {() => {
        console.log(props.id)
        props.playerSeq.push(props.id)
        if(props.gameSequence[props.playerSeq.length - 1] != props.playerSeq[props.playerSeq.length-1]){
            props.flipGame(false);
        } else if(props.playerSeq.length == props.gameSequence.length){
            //flip player turn.
            props.flipGame(false)
            console.log("Success")
        }
        }}/>)
}

const onPress = () => {

}


const styles = StyleSheet.create({
    button: {
        width: 115,
        height: 115,
        backgroundColor: '#F5F5F5',
        margin: 5
      }
})