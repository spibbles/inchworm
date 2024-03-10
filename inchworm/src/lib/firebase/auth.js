import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "./firebase";
import { collection } from "firebase/firestore";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    console.log("It gets here");
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user.uid);
        console.log(user.email);
        setDoc(doc(db, "users", user.uid), { email: user.email });
      })
      .catch(function (error) {
        console.log("error", error.message);
      });
    console.log("It gets all the way here");
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
