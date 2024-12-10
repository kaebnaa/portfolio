// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGU0NHHRjK8XsFqO-UwHfYjni060W27sc",
  authDomain: "test-login-101.firebaseapp.com",
  projectId: "test-login-101",
  storageBucket: "test-login-101.firebasestorage.app",
  messagingSenderId: "801089148104",
  appId: "1:801089148104:web:64803c067e8ce0a670c1fd",
  measurementId: "G-D0PM7F5D4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("emailInput")
const pass = document.getElementById("passInput")
const signIn = document.getElementById("inBtn")
const signUp = document.getElementById("upBtn")

signUp.addEventListener("click",()=>{
    createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert("amjilttai account uuslee")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Aldaaa garlaa !!!")
  });
})


signIn.addEventListener("click",()=>{
    signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("amjilt nevterlee !!!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Wrong pass or email")
  });
})