// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASslOjpG8JbgJnTRj33knUCnS5ZVSdm9M",
  authDomain: "doctor-badhon.firebaseapp.com",
  projectId: "doctor-badhon",
  storageBucket: "doctor-badhon.appspot.com",
  messagingSenderId: "728104604229",
  appId: "1:728104604229:web:ee78f5423e10f7d117c92c"
};

// Initialize Firebase
const configFirebase = ()=>{
  initializeApp(firebaseConfig);   
 } 
 export default configFirebase