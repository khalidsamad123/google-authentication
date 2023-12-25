let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,collection, addDoc,setDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();

  let abtn =document.querySelector("#asignup");
   abtn.addEventListener("click",()=>{
     
    let restaurent=document.getElementById("restaurent");
    let phone=document.getElementById("phone");
    let email=document.getElementById("aemail");
    let password=document.getElementById("apassword");
      
    let admin  = {
      
      restaurent:restaurent.value,
      phone:phone.value,
      email:email.value,
      password:password.value,

    }

    createUserWithEmailAndPassword(auth, admin.email, admin.password)
    .then(async(userCredential) => {
      
      const user = userCredential.user;
      try {
        await setDoc(doc(db, "admin", user.uid), {
         ...admin,
         uid:user.uid
        });
        localStorage.setItem("user",
        JSON.stringify(user)
        );
        let retrieveUserdata =JSON.parse(localStorage.getItem("user"));

        console.log(retrieveUserdata)
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      swal("Good job!", "your account has been created");
	  window.location.href="adminLogin.html"
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      swal({
        title: "Ooops!",
        text: "please signup again",
        icon: "error",
        button: "okay",
      });
     
    });
  



   });

let google=document.getElementById("google");
google.addEventListener("click",()=>{

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(result)

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error)
  });




})








