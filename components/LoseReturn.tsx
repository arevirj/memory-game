import {StyleSheet, Button, Text, TouchableOpacity} from "react-native"


type startGame = {
    activateLoss: Function;
};

export default function LoseReturn(props: startGame){
    return(
        <TouchableOpacity style={styles.button} onPress={() => {props.activateLoss(false)}}>
            <Text style= {styles.buttonText}>Return</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
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
      buttonText: {
        color: '#fff', // Text color
        fontSize: 18, // Text size
        fontWeight: 'bold', // Text weight
      }
})