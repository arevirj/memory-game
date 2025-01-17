import {StyleSheet, Button, Text, TouchableOpacity, View} from "react-native"
import db from "../backend/firebase"
import {Link} from "expo-router"
import {collection, doc, setDoc, getDoc, DocumentData} from "firebase/firestore"


async function fetchData() {
    const testDoc = doc(db, 'test', 'OFcwBU68C3ea1phfZGQ7')
    const testSnap = await getDoc(testDoc)
    if(testSnap.exists()){
        console.log("Yes")
        return(testSnap.data())
    }else{
        console.log("Not foundx")
    }
    const testData =  testSnap.data()
    console.log(testSnap)
    return testData
}

let test_data: DocumentData | undefined
const setdata = (dat: DocumentData | undefined) => {
    test_data = dat
}


export default function Leaderboard(){
    fetchData().then((data) => console.log(data)).catch((error) =>console.error(error))
    return(
        <View style={styles.container}>
            <Text>{}</Text>
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