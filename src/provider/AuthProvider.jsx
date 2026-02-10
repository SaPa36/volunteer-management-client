import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
      // 1. Check if currentUser exists before accessing .email
      if (currentUser && currentUser.email) {
        const loggedUser = { email: currentUser.email };
        // Every time the user logs in or refreshes, a new token is fetched.
        axios.post("https://volunteer-management-server-bay.vercel.app/jwt",loggedUser,{ withCredentials: true })
          .then((res) => {
            console.log("Token response:", res.data);
          });
      } else {
        // 2. Optional: Clear the cookie on the server side when user logs out
        axios.post("https://volunteer-management-server-bay.vercel.app/logout", {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log("Logged out from server");
          });
      }
    });


    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
