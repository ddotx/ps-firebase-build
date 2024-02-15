import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// export const firebase = initializeApp(firebaseConfig);

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users");
console.log("usersRef", usersRef);

export const userDocRef = doc(db, "users/WCf9dyfvgcSMGPHySS4t");
console.log("userDocRef", userDocRef);

// export const userSnap = await addDoc(usersRef, {
//   name: "Dome",
//   isActive: true,
// });

// export const userSnap = await setDoc(
//   userDocRef,
//   { isActive: false },
//   {
//     merge: true,
//   }
// ).then(
//   () => {
//     console.log("Document successfully written!");
//   },
//   (error) => {
//     console.error("Error writing document: ", error);
//   }
// );

// export const userSnap = await updateDoc(userDocRef, {
//   isReactive: false,
// });

// export const userSnap = await deleteDoc(userDocRef);
