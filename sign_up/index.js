import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
  const provider = new GoogleAuthProvider();

  document.getElementById('submit').addEventListener('click', (e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user = {
            username : username,
            email : email,
            password : password,
        }
        const json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("Đăng kí thành công. Chào mừng cửa hàng" + ' ' + user.username + ' ' + "đã đến với trang web của chúng tôi");

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Lỗi rồi nhé: " + errorMessage);
    });
});

document.getElementById('google').addEventListener('click', (e) =>{
    const auth = getAuth();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
