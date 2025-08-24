import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../config/firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { AuthContextType, User } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        email: userCredential.user.email!,
        uid: userCredential.user.uid,
      });
      // Store user in Firestore with default role 'user'
      await setDoc(doc(collection(db, "users"), userCredential.user.uid), {
        email,
        role: "user",
        createdAt: new Date().toISOString(),
      });
      setIsAdmin(false);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        throw new Error("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        throw new Error(
          "Password is too weak. Please choose a stronger password."
        );
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else {
        throw new Error("Failed to create account. Please try again.");
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        email: userCredential.user.email!,
        uid: userCredential.user.uid,
      });
      // Check role from Firestore
      const userDoc = await getDoc(
        doc(collection(db, "users"), userCredential.user.uid)
      );
      if (userDoc.exists() && userDoc.data().role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        throw new Error("No user found. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        throw new Error("Incorrect password.");
      } else if (error.code === "auth/invalid-email") {
        throw new Error("Invalid email address.");
      } else {
        throw new Error("Login failed. Please try again.");
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser({ email: firebaseUser.email!, uid: firebaseUser.uid });
        // Check role from Firestore
        const userDoc = await getDoc(
          doc(collection(db, "users"), firebaseUser.uid)
        );
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    loading,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
