import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { signInWithEmailAndPassword, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAYm6OsGaiE0x8cAAiaX6D_2LLyl7waI64",
    authDomain: "project-jsi15.firebaseapp.com",
    projectId: "project-jsi15",
    storageBucket: "project-jsi15.appspot.com",
    messagingSenderId: "798475890857",
    appId: "1:798475890857:web:a4184c9166bf8b3e27b9b8",
    measurementId: "G-MYWN2RZV0B"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new FacebookAuthProvider();

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });