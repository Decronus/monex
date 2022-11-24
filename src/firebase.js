import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB5hamq4-TlA8Eef7vf1j0TswhBnMRz3Sw",
  authDomain: "monx-e8a87.firebaseapp.com",
  projectId: "monx-e8a87",
  storageBucket: "monx-e8a87.appspot.com",
  messagingSenderId: "458100349593",
  appId: "1:458100349593:web:83139b596e28a62e817608",
  measurementId: "G-12E05HSKTD",
  databaseURL:
    "https://monx-e8a87-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase();
export const dbRef = ref(database);

export const getUserID = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    return user.uid;
  }
};

export const getUserEmail = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    return user.email;
  }
};

export const signOutFunc = () => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
