import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../FirebaseFiles/firebaseConfig';
import axios from 'axios';
export const ContextProvider = createContext(null)
const ContextApi = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const provider = new GoogleAuthProvider();
   // sign Up
   const registeredUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   // sign In
   const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, provider)
   }

   const saveUserDb = async user => {
      const fullData = {
         email: user?.email,
         role: 'guest',
         status: 'verified'
      }
      const { data } = await axios.put(`${import.meta.env.VITE_SERVER_URL}/user`, fullData)
      return data
   }

   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         if (currentUser) {
            saveUserDb(currentUser)
            setLoading(false)
         }
      })
      return () => {
         unSubscribe()
      }
   }, [])

   const data = { user, registeredUser, loading, setLoading, login, googleLogin, logOut }
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   )
};

export default ContextApi;