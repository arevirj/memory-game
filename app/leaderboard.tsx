import {StyleSheet, Button, Text, TouchableOpacity, View} from "react-native"
import {Link} from "expo-router"

export default function Leaderboard(){
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
            <Link href="/">Back</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFE4C4"
      },
})