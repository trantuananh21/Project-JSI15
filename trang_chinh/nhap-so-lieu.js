// Nhập số liệu overview
const submit = async() =>{
    var inputOverview1 = document.getElementById("overview1-text");
    var inputOverview2 = document.getElementById('overview2-text');
    var inputTotal = document.getElementById("total-text");
    var inputUsers = document.getElementById('users-text');
    
    localStorage.setItem("lai", inputOverview1.value);
    localStorage.setItem("lo", inputOverview2.value);
    localStorage.setItem("tong so hoa", inputTotal.value);
    localStorage.setItem("nhan vien", inputUsers.value);

    if (localStorage.getItem("lai") === null & localStorage.getItem("lo") === null){
        localStorage.setItem("lai", "0");
        localStorage.setItem("lo", "0");
        }
    
    var totalLai = localStorage.getItem("lai");
    var totalLo = localStorage.getItem('lo');
    var congTru = totalLai - totalLo;
    localStorage.setItem("overview", congTru);
}
document.getElementById('update').addEventListener('click', submit);