import Image from "next/image";

export default function Home() {
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
