var urlParams = new URLSearchParams(window.location.search);
var c = parseInt(urlParams.get('currentQuest'));
c = c + 1;
document.getElementById('backtogame').href = "../html/game.html?currentQuest=" + c;

var urlParams = new URLSearchParams(window.location.search);
var c = parseInt(urlParams.get('currentQuest'));
c = c + 1;
document.getElementById('backtogame2').href = "../html/game.html?currentQuest=" + c;