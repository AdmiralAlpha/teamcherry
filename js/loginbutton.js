var modal2 = document.getElementById('myPopupModal2');

var btn2 = document.getElementById("logInButton");

var span2 = document.getElementsByClassName("exit2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}