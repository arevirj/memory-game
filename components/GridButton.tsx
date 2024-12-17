import {StyleSheet, Text, View, TouchableOpacity} from "react-native"

export default function GridButton(){
    return(<TouchableOpacity style = {styles.button} onPress= {() => {console.log("GARBAGE");}}/>)
}

const onPress = () => {

}


const styles = StyleSheet.create({
    button: {
        width: 115,
        height: 115,
        margin:5,
        backgroundColor: 'grey',
      }
})