import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE0c9sceGb1ww8IkLQps8ZL6igjYtxiMk",
  authDomain: "crown-clothing-8007d.firebaseapp.com",
  projectId: "crown-clothing-8007d",
  storageBucket: "crown-clothing-8007d.appspot.com",
  messagingSenderId: "24292604244",
  appId: "1:24292604244:web:1c3f1ffb1e3720efedb0c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocument = async (userAuth, additionalnfo) => {
  if (!userAuth) return;
  const userDocREf = doc(db, "users", userAuth.uid);
  console.log(userDocREf);

  const userSnapshot = await getDoc(userDocREf);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocREf, {
        displayName,
        email,
        createdAt,
        ...additionalnfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocREf;
};

export const createAuthUser = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
