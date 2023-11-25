// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9ZYmqDfKhs-Y7CmjSi2M2qeElPLXDF0",
  authDomain: "help-chameleon.firebaseapp.com",
  projectId: "help-chameleon",
  storageBucket: "help-chameleon.appspot.com",
  messagingSenderId: "513285773034",
  appId: "1:513285773034:web:13d1505835f696a6442993",
  measurementId: "G-CB3DZGNYS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export function createUser(UID, name, email, password, profilePic) {
  const database = getDatabase(app);
  const userRef = ref(database, `users/${UID}`);

  get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("User already exists");
    } else {
      set(userRef, {
        UID: UID,
        name: name,
        email: email,
        password: password,
        profilePic: profilePic,
      });
    }
  })
}



export async function checkUserExists(email) {
  const database = getDatabase(app);
  const usersRef = ref(database, 'users');

  const snapshot = await get(usersRef);
  let uid = null;

  snapshot.forEach((childSnapshot) => {
    if (childSnapshot.val().email === email) {
      uid = childSnapshot.key;
    }
  });

  return uid;
}



//const analytics = getAnalytics(app);
