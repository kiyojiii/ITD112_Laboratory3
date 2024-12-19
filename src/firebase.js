import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAM4C2OS1Yc1e55oDb-oOJCO959izl4dm0",
  authDomain: "denguedata-8a054.firebaseapp.com",
  projectId: "denguedata-8a054",
  storageBucket: "denguedata-8a054.firebasestorage.app",
  messagingSenderId: "432215667027",
  appId: "1:432215667027:web:bc7720dc3fe7e933cc31a6",
  measurementId: "G-C0CT1SXTRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };