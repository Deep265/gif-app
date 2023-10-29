"use client"
import React from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "@/app/firebase/firebase";
import { useState } from "react";

const login = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    // if(loading){
    //     return <div>Loding......</div>
    // }

    const logo = async () => {
        await signOut(auth).then(() => {
            console.log("Sign In Successfull")
          }).catch((error) => {
            // An error happened.
          });
    }

    const log = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
        const user = userCredential.user;
        console.log("siged i");
        console.log(user);
        return user;
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }

    

    if(user){
        return (
        
            <div>Welcome {user.email}
            <button onClick={logo}>Logout</button>
            </div>
            )
    }
    
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={log}>Login</button>
        </div>
    )
}

export default login;