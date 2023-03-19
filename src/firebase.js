// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_Server_Url,
  authDomain: "caryna-379b6.firebaseapp.com",
  projectId: "caryna-379b6",
  storageBucket: "caryna-379b6.appspot.com",
  messagingSenderId: "320602189519",
  appId: process.env.REACT_APP_FireBase_App_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)