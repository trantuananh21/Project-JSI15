import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import {getFirestore,} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"; 


const firebaseConfig = {
  apiKey: "AIzaSyAYm6OsGaiE0x8cAAiaX6D_2LLyl7waI64",
  authDomain: "project-jsi15.firebaseapp.com",
  projectId: "project-jsi15",
  storageBucket: "project-jsi15.appspot.com",
  messagingSenderId: "798475890857",
  appId: "1:798475890857:web:d52f5d0f35f29a1227b9b8",
  measurementId: "G-DDMKZRX0D3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

const signout = async() =>{
    const auth = getAuth();
    signOut(auth).then(() => {
        alert('Đăng xuất thành công')
        window.location.href = 'http://127.0.0.1:5501/Project-JSI15-main(THUPhu)/homepage/index.html'
    }).catch((error) => {
        console.log(error);
    });
}
document.getElementById('SignOut-Button').addEventListener('click', signout)

document.getElementById("innerstring1").innerHTML = localStorage.getItem("tong so hoa");
document.getElementById("innerstring2").innerHTML = localStorage.getItem("overview");
document.getElementById("innerstring3").innerHTML = localStorage.getItem("nhan vien");