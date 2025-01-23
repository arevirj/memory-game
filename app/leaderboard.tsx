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
    
    return query
}


export default function Leaderboard(){
    const start: Score[] = [];
    const [query, setQuery] = useState(start)
    fetchData().then((data) => {
        setQuery(data)
    })
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.textHeader}>Leaderboard</Text>
                {query.map((data, ind) =>(
                    <View key={ind} style={styles.tableRow}>
                        <Text style={styles.tableRowText}>{data["email"]}, {data["score"]}</Text>
                    </View>
                    ))}
                <Link href="/">Back</Link>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE4C4",
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      tableRowText: {
        fontSize: 16,
        color: '#343a40',
      },
      textHeader: {
        fontSize: 40, // Large and prominent
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue', // Bright red for emphasis
        textShadowColor: 'cyan', // Subtle shadow for a glowing effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 2, // Adds spacing for a dramatic effect
        textTransform: 'uppercase', // Makes the text more striking
      },
    
})