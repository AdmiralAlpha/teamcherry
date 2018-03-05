var modal = document.getElementById('regModal');

var btn = document.getElementById("signUpButton");

var span = document.getElementsByClassName("exit")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}