// @ts-nocheck

"use client";

import Image from "next/image";
import {useEffect} from 'react';
import { auth, db} from "../lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import {signInWithGoogle, signOut} from "../lib/firebase/auth";


export default function Home() {
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: 'i like icecream' }),
      })
      return await response.json()
    })( )
  }, [])
  const handleSubmit = () => {
    console.log("runs here")
    signInWithGoogle();
  }

  return (
    <main>
      <form action="" onSubmit={handleSubmit}
      >
        <input
        placeholder="Email"
        type="email"></input>
      <input
        placeholder="Password"
        type="password"></input>
      <button type="submit">Sign in</button>
      </form>
      
    </main>
  );
}
