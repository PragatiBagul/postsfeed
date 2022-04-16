import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../config/firebaseConfig";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const SendSignInLinkToEmail = (email) => {
    return sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:3000/confirm",
      handleCodeInApp: true,
    }).then(() => {
      return true;
    });
  };

  const SignInWithEmailLink = (email, code) => {
    return signInWithEmailLink(auth, email, code)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function githubSignIn() {
    const githubAuthProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubAuthProvider);
  }

  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }

  const Logout = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User changed");
      setUser(user); 
      setIsAuthenticating(false);
    });

    return unsubscribe();
  }, []);

  const values = {
    user,
    isAuthenticating,
    SignInWithEmailLink,
    SendSignInLinkToEmail,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
    Logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
