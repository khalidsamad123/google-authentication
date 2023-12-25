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


let cllogin =document.getElementById("cllogin");
 let clemail =document.getElementById("clemail");
 let clpassword=document.getElementById("clpassword");
 cllogin.addEventListener("click",()=>{

    signInWithEmailAndPassword(auth, clemail.value, clpassword.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user)
      swal("Wellcome to the restaurent", "Order your favorite food and enjoy");
      window.location.href="dashboard.html"
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode);

      swal({
        title: "Ooops!",
        text: "please check your email and password",
        icon: "error",
        button: "okay",
      });

      
    });


 })




 
