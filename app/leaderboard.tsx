import {StyleSheet, Button, Text, TouchableOpacity, View, ScrollView} from "react-native"
import app from "../backend/firebase"
import {Link} from "expo-router"
import {collection, doc, setDoc, getDoc, DocumentData, getFirestore, getDocs} from "firebase/firestore"
import { useState } from "react"

const db = getFirestore(app)

type Score = {
    email: string,
    score: number
}

async function fetchData() {
    const querySnapshot = await getDocs(collection(db, 'leaderboard'));
    const query: Score[]= [];
    querySnapshot.forEach((doc) => {
        let item: Score = {email: '', score: 0}
        let docData = doc.data()
        item.email=docData.email;
        item.score=docData.score;
        query.push(item)
      });
      const sorted = query.sort((prev, curr) => curr.score - prev.score);
    return sorted
}


export default function Leaderboard(){
    const start: Score[] = [];
    const [query, setQuery] = useState(start)
    fetchData().then((data) => {
        setQuery(data)
    })
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Leaderboard</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {query.map((data, ind) =>(
                    <View key={ind} style={styles.tableRow}>
                        <Text style={styles.tableRowText}>{data["email"]}: {data["score"]}</Text>
                    </View>
                    ))}
                
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.altbutton}>
                        <Text style={styles.altbuttonText}>Back</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE4C4",
        justifyContent: 'center',
        paddingTop: 60
      },
      scrollContainer: {
        backgroundColor: "#FFE4C4",
        padding: 10
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderRadius: 15,
        borderBottomColor: '#e0e0e0',
      },
      tableRowText: {
        fontSize: 16, // Large and prominent
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red', // Bright red for emphasis
        textShadowColor: 'cyan', // Subtle shadow for a glowing effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 2, // Adds spacing for a dramatic effect
        textTransform: 'uppercase', // Makes the text more striking
      },
      textHeader: {
        fontSize: 40, // Large and prominent
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue', // Bright red for emphasis
        textShadowColor: 'yellow', // Subtle shadow for a glowing effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 2, // Adds spacing for a dramatic effect
        textTransform: 'uppercase', // Makes the text more striking
      },
      altbutton: {
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
      altbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF', // Ensures the text stands out
        textAlign: 'center',
      },
      buttonContainer: {
        margin: 20,
        color: "#857234",
        alignItems: "center",
        paddingBottom: 30
      },
      
    
})