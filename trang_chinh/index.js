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

import { doc, addDoc, getFirestore, collection, updateDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"; 
const db = getFirestore(app)

const update = async() =>{
    const users = document.getElementById('users-text').value;
    const total = document.getElementById('total-text').value;
    const overview = document.getElementById('overview-text').value;

  await updateDoc(doc(db, 'Overview', 'overview'), {
      allUsers: users,
  }) 
  await updateDoc(doc(db, 'Overview', 'overview'), {
    totalSpent: total,
})
await updateDoc(doc(db, 'Overview', 'overview'), {
    allFlowers: overview,
})
}
document.getElementById('update').addEventListener('click', update);

const querySnapshot = await getDocs(collection(db, "Overview"));
var innerstring1 = ''
var innerstring2 = ''
var innerstring3 = ''

querySnapshot.forEach((doc) => {
    innerstring1 = `
    <p  class="number-box" id="overview">${doc.data().allFlowers}</p>
    `;
    innerstring2 = `
    <p class="number-box" id="total">${doc.data().totalSpent}</p>
    `;
    innerstring3 = `
    <p class="number-box" id="users">${doc.data().allUsers}</p>
    `;
});
document.getElementById('innerstring1').innerHTML = innerstring1;
document.getElementById('innerstring2').innerHTML = innerstring2;
document.getElementById('innerstring3').innerHTML = innerstring3;


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