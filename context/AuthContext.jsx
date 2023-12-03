"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/app/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    if (localStorage.getItem("userUID") !== result.user.uid) {
      localStorage.clear();
      localStorage.setItem("paginaPrincipal", "refazer");
      localStorage.setItem("primeiroTesteDeNivel", "true");
      localStorage.setItem("biografia", "Fale um pouco sobre você.");
    } else {
      localStorage.setItem("paginaPrincipal", "exercicios");
    }
    if (localStorage.getItem("paginaPrincipal") === "refazer") {
      localStorage.setItem("paginaPrincipal", "nivel");
    }
    localStorage.setItem("userUID", result.user.uid);
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    console.log(result.user.uid);
    if (localStorage.getItem("userUID") !== result.user.uid) {
      localStorage.clear();
      localStorage.setItem("paginaPrincipal", "refazer");
      localStorage.setItem("primeiroTesteDeNivel", "true");
      localStorage.setItem("biografia", "Fale um pouco sobre você.");
    } else {
      localStorage.setItem("paginaPrincipal", "exercicios");
    }
    if (localStorage.getItem("paginaPrincipal") === "refazer") {
      localStorage.setItem("paginaPrincipal", "nivel");
    }
    localStorage.setItem("userUID", result.user.uid);
  };

  const createSignUpUser = async (displayName, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    if (result.user) {
      await updateProfile(result.user, {
        displayName: displayName,
      });
      setUser(result.user);
      localStorage.clear();
      localStorage.setItem("userUID", result.user.uid);
      localStorage.setItem("paginaPrincipal", "refazer");
      localStorage.setItem("primeiroTesteDeNivel", "true");
      localStorage.setItem("biografia", "Fale um pouco sobre você.");
    } else {
      return console.log("Erro ao cadastrar usuário");
    }
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setUser(result.user);
    if (localStorage.getItem("userUID") !== result.user.uid) {
      localStorage.clear();
      localStorage.setItem("paginaPrincipal", "exercicios");
      localStorage.setItem("primeiroTesteDeNivel", "false")
    } else {
      localStorage.setItem("paginaPrincipal", "exercicios");
    }
    if (localStorage.getItem("paginaPrincipal") === "refazer") {
      localStorage.setItem("paginaPrincipal", "nivel");
    }
    localStorage.setItem("userUID", result.user.uid);
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithGithub,
        signOutUser,
        createSignUpUser,
        signInUserWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
