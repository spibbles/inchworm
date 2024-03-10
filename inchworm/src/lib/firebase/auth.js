import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
  } from "firebase/auth";
  
  import { auth } from "./firebase";
  
  export function onAuthStateChanged(cb) {
      return _onAuthStateChanged(auth, cb);
  }
  
  export async function signInWithGoogle() {
    console.log("This part works :3")
    const provider = new GoogleAuthProvider();
    
    try {
        console.log("does it go here")
      const result = await signInWithPopup(auth, provider);
      await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  }
  
  export async function signOut() {
    try {
      return auth.signOut();
    } catch (error) {
      console.error("Error signing out with Google", error);
    }
  }
  