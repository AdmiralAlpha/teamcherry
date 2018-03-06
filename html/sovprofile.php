<?php 
  session_start(); 

  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: ../index.php");
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style/index.css">
  <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/gnutypewriter" type="text/css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Your profile</title>
</head>

<body>

  <header onclick="dropclose()">
      <button class="btnL btns btn" type="submit" onclick="location.href='leaderboard.php'">Leaderboard</button>
      
      <?php  if (isset($_SESSION['username'])) : ?>
         <a href="sovprofile.php?logout='1'" class="btnR btns btn">Sign Out</a> 
        <?php endif ?>
        
  </header>

  <div class="passport2">
    <div class="pass-info">
      <img class="picture-user" src="../img/questspy2.jpg" alt="picture of user">
      <ul class="pass-ul">
        <li>Name: Yvonne Strahovksi</li>
        <li>Age: 33</li>
        <li>Nationality: Soviet Union</li>
        <ul>
          <button class="takeNow btns1" type="submit" name="registerbutton" onclick="showRegister()">
            <a id="backtogame" href="game.html">Take Mission</a>
          </button>
    </div>
  </div>

  <footer>
    <p>Contact us: teamCherry@kyh.se
      <br>
      <br> Members: Sebastian Bergström, Julia Bäcks, Victor Pettersson, Mikael Berglund, Emil Brunngård, Elias Liljegard</p>

    <div class="socialIcons">
      <a target="_blank" href="https://sv-se.facebook.com/">
        <i class="fa fa-facebook fa-2x"></i>
      </a>
      <a target="_blank" href="https://twitter.com/">
        <i class="fa fa-twitter fa-2x"></i>
      </a>
      <a target="_blank" href="https://github.com/AdmiralAlpha/teamcherry">
        <i class="fa fa-github fa-2x"></i>
      </a>
      <a target="_blank" href="https://tinyurl.com/2fcpre6">
        <i class="fa fa-envelope-o fa-2x"></i>
      </a>
    </div>
  </footer>

</body>

</html>