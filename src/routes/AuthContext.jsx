import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const ConnectAuth = createContext()
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
          const userEmail = currentUser?.email
          const signInEmail = {email : userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,signInEmail,{withCredentials: true})
                .then(result => {
                    console.log(result.data)
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/signOut`,signInEmail,{withCredentials: true})
                .then(result => {
                    console.log(result.data)
                })
            }
        })
        return ()=> unsubscribe()
    },[])

    const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        google,
        logOut,
        profileUpdate,
    }
    return (
       <ConnectAuth.Provider value={userInfo}>
            {children}
       </ConnectAuth.Provider>
    );
};

export default AuthContext;
AuthContext.propTypes = {
    children : PropTypes.node
}