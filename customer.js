
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,doc, setDoc  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCHQSt5DH6T4PxcvoL22NRoGT9g5gwE4Bs",
    authDomain: "registration-form-7beea.firebaseapp.com",
    projectId: "registration-form-7beea",
    storageBucket: "registration-form-7beea.appspot.com",
    messagingSenderId: "969883445091",
    appId: "1:969883445091:web:03cb3b5a4dfee93abb5556",
    measurementId: "G-0WC6MGQ1H2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 




  let ubtn =document.querySelector("#usignup");
  let fname =document.getElementById("first");
  let lname =document.getElementById("last");
  let cemail =document.getElementById("uemail");
  let cpassword =document.getElementById("upassword");

  let costumer  = {
   // Name: fname.value
   firstName:fname.value,
   lastName:lname.value,
   costumeremail:cemail.value,
   costumerpassword:cpassword.value,

 }
 document.getElementById("usignup").addEventListener("click",()=>{
  createUserWithEmailAndPassword(auth, cemail.value, cpassword.value)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    let uid = user.uid;
    try {
      await setDoc(doc(db, "Cutomers", user.uid), {
        firstName:fname.value,
   lastName:lname.value,
   costumeremail:cemail.value,
   costumerpassword:cpassword.value,
   userId : user.uid
      });
      // console.log(user)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    }
    
     console.log(user.uid)
    swal("Good job!", "your account has been created");
    window.location.href="customerLogin.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)

    swal({
        title: "Ooops!",
        text: "please signup again",
        icon: "error",
        button: "okay",
      });
  });


 })