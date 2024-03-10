"use client";
import Image from "next/image";
import {useEffect} from 'react';
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
    })()
  }, [])
  return (
    <main>
      <input
        placeholder="Email"
        type="email"></input>
      <input
        placeholder="Password"
        type="password"></input>
      <a href="/sign-in">Sign in</a>
    </main>
  );
}
