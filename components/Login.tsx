import { useState } from "react"
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeAuth, User } from "firebase/auth";
import  app  from "../backend/firebase"

const auth = getAuth(app)

type loginProps = {
    setUser: Function
}
export default function Login(props: loginProps){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View>
            <TextInput placeholder="email" style={styles.inputView} placeholderTextColor={'grey'} onChangeText={(username) => {setUsername(username)}}/>
            <TextInput placeholder="password" style={styles.inputView} placeholderTextColor={'grey'} secureTextEntry={true} onChangeText={(password) => {setPassword(password)}}>
            </TextInput>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    console.log(password)
                    signInWithEmailAndPassword(auth, username, password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user.email)
                            props.setUser(user)
                            return(user)
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage)
                            return null
                        });
                    }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    createUserWithEmailAndPassword(auth, username, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        console.log(user.email)
                        props.setUser(user)
                        return(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
                    
                }}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    )
}

function signUp(email:string, password:string) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        return(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

async function signIn(email:string, password:string) {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email)
    return(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    return null
  });
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
    },
    inputView: {
        width: 200,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    buttonsContainer: {
        alignItems: 'flex-start'
    }
})