// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42W3HS_ky3MwJV16rTl-RfuV3MHPbC1s",
  authDomain: "app-be1c9.firebaseapp.com",
  projectId: "app-be1c9",
  storageBucket: "app-be1c9.appspot.com",
  messagingSenderId: "1027515395014",
  appId: "1:1027515395014:web:f87cc413aeceaf56fba0c7",
  databaseURL:"https://app-be1c9-default-rtdb.firebaseio.com/"
};

// Initialize Firebase


export const app =initializeApp(firebaseConfig);