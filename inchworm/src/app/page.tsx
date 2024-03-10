// @ts-nocheck

"use client";

import Image from "next/image";
import { useEffect } from "react";
import { auth, db } from "../lib/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithGoogle, signOut } from "../lib/firebase/auth";
import { collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default function Home() {
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: "i like icecream" }),
      });
      return await response.json();
    })();
  }, []);
  const handleSubmit = () => {
    console.log("runs here");
    signInWithGoogle();
  };

  const addToDB = () => {
    db.collection("users").add({
      email: "hello@hello.com",
      name: "Chris",
    });
  };

  return (
    <main>
      <button onClick={handleSubmit}>Sign in</button>
   
      <button
        onClick={() => {
          setDoc(doc(db, "users", "Christina"), { email: "hello@chris.app" });
        }}>
        Add stuff to db
      </button>
    </main>
  );
}
