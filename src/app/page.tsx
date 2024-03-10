"use client";
import Image from "next/image";
import {useState} from 'react';

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('/api/chatgpt', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({messages:"string"}),
  //     })
  //     return await response.json()
  //   })()
  // }, [])


  const [choices, setChoices] = useState([]);

  return (
    <main>
      {/* <input
        placeholder="Email"
        type="email"></input>
      <input
        placeholder="Password"
        type="password"></input>
      <a href="/sign-in">Sign in</a> */}
      <p> Hello!</p>

      <button onClick = {async () =>{
         const response = await fetch("/api/chatgpt", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  
            someData: true,
          }),
         });
         
         const result =  await response.json();
         setChoices(result.choices)
        
      }}

      >  API Request</button>

      {choices.map(choice => {
          return(
            <p key = {choice.index}>{(choice.message.content)}</p>
          )
      })}
      
    </main>
  );
}
