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

export function createUser(UID, email, account, name, password, profilePic, level) {
  const database = getDatabase(app);
  const userRef = ref(database, `users/`);

  get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("User already exists");
    } else {
      set(userRef, {
        UID: UID,
        "e-mail": email,
        contas: [account],
        nome: name,
        nível: level,
        biografia: "",
        "teste de nível": false,
        senha: password,
        "foto de perfil": profilePic,
        experiência: 0,
        ranking: false,
        exercícios: {
          desbloqueados: [
            "Exercício 1",
            "Exercício 2",
            "Exercício 3",
            "Exercício 4"
          ],
          completados: ["Exercício 1"]
        },
        desafios: {
          desbloqueados: ["Desafio 1", "Desafio 2"],
          completados: ["Desafio 1"]
        },
        conquistas: {
          desbloqueadas: [
            "Maestria Metódica",
          ]
        }
      });
    }
  });
}

export async function getUserDataAsObject(uid) {
  const database = getDatabase(app);
  const userRef = ref(database, `users/`);

  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    const formattedData = {
      uid: uid,
      name: data.name,
      email: data.email,
    };
    return formattedData;
  } else {
    console.log("Sem dados de usuário com esse ID");
    return null;
  }
}

export async function checkUserExists(email) {
  const database = getDatabase(app);
  const usersRef = ref(database, "users");

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
