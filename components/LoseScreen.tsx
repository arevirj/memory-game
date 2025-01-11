import {StyleSheet, Button, Text, TouchableOpacity, View} from "react-native"


type loseProps = {
    startGame: Function;
    activateLoss: Function;
    score: number
};

export default function LoseScreen(props: loseProps){
    return(
        <View style= {styles.container}>
            <Text style={styles.lossText}>Score: </Text>
            <Text style={styles.scoreText}>{props.score}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.startGame(true)
                props.activateLoss(false)}}>
            <Text style= {styles.text}>Restart Game</Text>
        </TouchableOpacity>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
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
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF', // Ensures the text stands out
        textAlign: 'center',
      },
      lossText: {
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
      scoreText: {
        fontSize: 100, // Extra large size for emphasis
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFC300', // Vibrant golden-yellow color for positivity
        textShadowColor: '#FF5733', // Complementary shadow in reddish-orange
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6, // Soft glow effect
        letterSpacing: 1, // Slight spacing for a balanced look
      },
    })