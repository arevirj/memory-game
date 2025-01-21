import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeAuth } from "firebase/auth";
import  app  from "./firebase"



const auth = getAuth(app)
export default auth

export function signUp(email:string, password:string) {
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

export function signIn(email:string, password:string) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return(user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}





