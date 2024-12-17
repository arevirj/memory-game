import {StyleSheet, Button, Text, TouchableOpacity} from "react-native"


type startGame = {
    startGame: Function;
};

export default function Start(props: startGame){
    return(
        <TouchableOpacity style={styles.roundButton} onPress={() => {props.startGame(true)}}>
            <Text style= {styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    roundButton: {
        width: 200, // Button width
        height: 200, // Button height
        borderRadius: 50, // Makes the button round
        backgroundColor: '#3498db', // Button background color
        alignItems: 'center', // Centers text horizontally
        justifyContent: 'center', // Centers text vertically
        shadowColor: '#000', // Adds a shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5, // Android shadow
      },
      buttonText: {
        color: '#fff', // Text color
        fontSize: 18, // Text size
        fontWeight: 'bold', // Text weight
      }
})

