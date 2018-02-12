var modal = document.getElementById('myPopupModal');

var btn = document.getElementById("signUpButton");

var span = document.getElementsByClassName("exit")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function ch(chType) {
    var chName = document.getElementsByName(chType.name);
    for (var i = 0; i < chName.length; i++) {

      if (!chType.checked) {
        chName[i].disabled = false;
      } else {
        if (!chName[i].checked) {
          chName[i].disabled = true;
        } else {
          chName[i].disabled = false;
        }
      }
    }
  }