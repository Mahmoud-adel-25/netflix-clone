import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
} from "firebase/auth";
import { getFirestore , collection , addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBz6hI7TWamJCNy30lqahaHFGArctn9wEc",
  authDomain: "netflix-clone-8d422.firebaseapp.com",
  projectId: "netflix-clone-8d422",
  storageBucket: "netflix-clone-8d422.firebasestorage.app",
  messagingSenderId: "776333330273",
  appId: "1:776333330273:web:ad0b853a574d947bc3e720"
};
//تشغيل الابلكيشن 
const app = initializeApp(firebaseConfig);
// تسجيل الدخول
const auth = getAuth(app)
// قاعده البيانات 
const db = getFirestore(app)
const signup = async (name, email, password) => {
  try {
    const res =await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email ,
    })
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}
const login = async (email , password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout = async () => {
  signOut(auth)
}
export {auth , db , login , logout ,signup}