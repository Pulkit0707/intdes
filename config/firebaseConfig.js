// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqmB5UoKPe9awY7HAG0Ip20Wqnjv9w4c",
  authDomain: "pulkit-estate.firebaseapp.com",
  projectId: "pulkit-estate",
  storageBucket: "pulkit-estate.appspot.com",
  messagingSenderId: "23648170322",
  appId: "1:23648170322:web:acc3e7dcb93d4c8f21ca8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);