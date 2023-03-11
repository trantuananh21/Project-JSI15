import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
  const auth = getAuth();

  document.getElementById('submit').addEventListener('click', (e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

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
        window.location.href = "http://127.0.0.1:5501/trang_chinh/index.html"
      })
    .catch((error) => {
      alert(error)
    });
});

document.getElementById('google').addEventListener('click', (e) =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "http://127.0.0.1:5501/trang_chinh/index.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})

// document.getElementById('sign-out').addEventListener('click', (e) =>{
//     signOut(auth).then(() => {
//         window.location.href = "http://127.0.0.1:5501/homepage/index.html"
//       }).catch((error) => {
//         console.error(error);
//       });
// })