// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBxDuZG9_2DcxmGLQG3f3Dgo8lsujd__Y",
  authDomain: "word-party-8ec14.firebaseapp.com",
  projectId: "word-party-8ec14",
  storageBucket: "word-party-8ec14.appspot.com",
  messagingSenderId: "804948260539",
  appId: "1:804948260539:web:9aeaa3952c00e1cb3b9b9e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase