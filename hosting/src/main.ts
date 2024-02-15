import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { initializeApp } from "firebase/app";
import {
  getDoc,
  getDocs,
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUDX2SMB3hW9IgOLP2yMsm9mTHxl-Vb88",
  authDomain: "ps-firebase-build.firebaseapp.com",
  projectId: "ps-firebase-build",
  storageBucket: "ps-firebase-build.appspot.com",
  messagingSenderId: "49071644749",
  appId: "1:49071644749:web:bf6e93c3efd19e2f603c04",
};

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}; */
const firebaseApp = initializeApp(firebaseConfig);

// * Offline Capabilities (multi-tab IndexedDB persistence)
initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

const db = getFirestore(firebaseApp);

// ? Make DB Offline
await disableNetwork(db);

// const usersRef = collection(db, "users");
// addDoc(usersRef, {
//   name: "Dome",
//   isActive: true,
//   offline: true,
// });

await enableNetwork(db);

/* const usersRef = collection(db, "users");
console.log("usersRef", usersRef);
const userDocRef = doc(db, "users/WCf9dyfvgcSMGPHySS4t");
console.log("userDocRef", userDocRef);

const usersSnap = await getDocs(usersRef);
const users = usersSnap.docs.map((doc) => doc.data());
console.log("users", users);

const userSnap = await getDoc(userDocRef);
const user = userSnap.data();
console.log("user", user);

onSnapshot(userDocRef, (snapshot) => {
  console.log(snapshot.data());
});

onSnapshot(usersRef, (snapshot) => {
  console.log(snapshot.docs.map((doc) => doc.data()));

  // * Synchronization
  snapshot.docChanges().forEach((change) => {
    console.log(`new change type: ${change.type}`);
  });
});

const userLogsColRef = collection(db, "users/WCf9dyfvgcSMGPHySS4t/logs");
addDoc(userLogsColRef, {
  activity: "added user",
  time: serverTimestamp(),
}); */

/**!SECTION
 * HTML
 *
 *
 *
 *
 *
 *
 */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
