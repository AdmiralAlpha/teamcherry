var modal = document.getElementById('myPopupModalL');

var btn = document.getElementById("loginButton");

var span = document.getElementsByClassName("exitL")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
