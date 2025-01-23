import app from "@/backend/firebase"
import { getFirestore } from "firebase/firestore"


const db = getFirestore(app);
export default db;