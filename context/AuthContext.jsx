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
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { createUser } from "@/app/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const createSignUpUser = async (displayName, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    setUser(result.user);

    const photoURL = result.user.photoURL
      ? result.user.photoURL
      : displayName[0].toUpperCase();

    if (!result.user) {
      return;
    }

    createUser(result.user.uid, displayName, email, password, photoURL);
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setUser(result.user);
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(undefined);
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
      value={{ user, signInWithGoogle, signInWithGithub, signOutUser, createSignUpUser, signInUserWithEmailAndPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
