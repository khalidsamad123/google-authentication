import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyCHQSt5DH6T4PxcvoL22NRoGT9g5gwE4Bs",
    authDomain: "registration-form-7beea.firebaseapp.com",
    projectId: "registration-form-7beea",
    storageBucket: "registration-form-7beea.appspot.com",
    messagingSenderId: "969883445091",
    appId: "1:969883445091:web:03cb3b5a4dfee93abb5556",
    measurementId: "G-0WC6MGQ1H2"
  }
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


let allogin =document.getElementById("allogin");
 let alemail =document.getElementById("alemail");
 let alpassword=document.getElementById("alpassword");
 allogin.addEventListener("click",()=>{

    signInWithEmailAndPassword(auth, alemail.value, alpassword.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user)

      window.location.href="window.html"
     
    })
    .catch((error) => {

    
      const errorMessage = error.message;
      console.log(errorMessage)
    });


 })




 
