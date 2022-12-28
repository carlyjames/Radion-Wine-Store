import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()


export function UseAuth() {
  return useContext(AuthContext)
}


export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [ loading, setLoading ] = useState()

    function Signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function Login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
    }

    function Logout(params) {
      return auth.signOut()
    }

    function ResetPassword(email){
      return auth.sendPasswordResetEmail(email)
    }

    function UpdateEmail(email) {
      return currentUser.UpdateEmail(email)
    }

    function UpdatePassword(password) {
      return currentUser.UpdatePassword(password)
    }

    useEffect(()=>{
        const unSubscribe = auth.onAuthStateChanged(user =>{
          setCurrentUser(user)
          setLoading(false)
        }) 
        return unSubscribe
    }, [])


    const value = {
        currentUser,
        Signup,
        Login,
        Logout,
        ResetPassword,
        UpdateEmail,
        UpdatePassword
    }

  return (
    <AuthContext.Provider value={value}>
        { !loading && children }
    </AuthContext.Provider>
  )
}
