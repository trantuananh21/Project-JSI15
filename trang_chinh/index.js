import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

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

import { doc, addDoc, getFirestore, collection, updateDoc, deleteDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"; 
const db = getFirestore(app)

const update = async() =>{
    const users = document.getElementById('users-text').value;
    const total = document.getElementById('total-text').value;
    const overview = document.getElementById('overview-text').value;

  await updateDoc(doc(db, 'Overview', 'users'), {
      number: users,
  }) 
  await updateDoc(doc(db, 'Overview', 'totalSpent'), {
    total: total,
})
await updateDoc(doc(db, 'Overview', 'allFlowers'), {
    overview: overview,
})
}
document.getElementById('update').addEventListener('click', update);

// // const deleteSouvenir = async() =>{
// //     await deleteDoc(doc(db, 'souvenir-table', 'ckCCEGSgJbJq7byfwdiy'))
// // }
// // deleteSouvenir()

const querySnapshot = await getDocs(collection(db, "Overview"));
var innerstring = " "
querySnapshot.forEach((doc) => {
    innerstring = innerstring + `
    <div id="users">
        ${doc.overview}
        ${doc.data().total}
        ${doc.data().number}
    </div>
    `
});
var divclass = document.getElementById('innerstring');
divclass.innerHTML = innerstring;
console.log(innerstring);

const auth = getAuth();
signOut(auth).then(() => {
    alert('Đăng xuất thành công')
    window.location.href = 'http://127.0.0.1:5501/Project-JSI15-main(THUPhu)/homepage/index.html'
}).catch((error) => {
    console.log(error);
});