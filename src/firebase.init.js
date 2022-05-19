// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR9OIvHtHECa6udwplWkyWUZpdpzTYaNI",
  authDomain: "todo-app-dcb12.firebaseapp.com",
  projectId: "todo-app-dcb12",
  storageBucket: "todo-app-dcb12.appspot.com",
  messagingSenderId: "731760325803",
  appId: "1:731760325803:web:cc5916751f9e1b40af33ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
