var modal = document.getElementById('id01');

window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}

var user = {
 id: "user",
 pass: "pass"
}
/*var teacher = {
 id: "teacher",
 pass: "pass"
} */
var admin = {
 id: "admin",
 pass: "pass"
}

function pasuser(form) {
 if (form.id.value == user.id && form.pass.value == user.pass) {
   // if (form.pass.value==student.pass) {
   location = "index.html"
 } /*else if (form.id.value == admin.id && form.pass.value == admin.pass) {
   location = "index.html"
 }*/ else  {
   document.getElementById("invalid_message").innerHTML = "Invalid username or password";
 }
}

function myFunction() {
 document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
 if (!e.target.matches('.dropbtn')) {
   var myDropdown = document.getElementById("myDropdown");
   if (myDropdown.classList.contains('show')) {
     myDropdown.classList.remove('show');
   }
 }
}

function myFunction(a) {
 a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}
