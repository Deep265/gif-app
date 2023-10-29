"use client"
import exp from "constants";
import React from "react";
import { useState } from "react";
import { initFirebase } from "@/app/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router"; 


const signup = () => {
    const app = initFirebase();
    console.log(app);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const router = useRouter();
    
    const Register = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            router.push("/gif")
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            });
        }
    
    
    return (
        <div>
            <h1>Sign UP</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={Register}>Sign In</button>
        </div>
    )
}

export default signup;