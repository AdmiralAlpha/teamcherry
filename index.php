<?php
   session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style/button.css">
  <link rel="stylesheet" href="style/index.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Cold cherry</title>
</head>
<body>
    <div class="flexBtn">
    <header onclick="dropclose()">

        <button class="btnR btns" type="submit" name="registerbutton" id="signUpButton" onclick="">Sign up</button>
    </header>
    </div>


           <script src="js/login.js"></script>



    <div id="myPopupModal" class="modal1">

          <div class="modal1-content">
            <span class="exit">&times;</span>
            <p>Create an account</p>
            <form action="">
                <div class="rowModal">
                    <label for="email">E-mail address</label>
                    <input type="text" id="email" required>
                </div>
                <div class="rowModal">
                    <label for="username">Username</label>
                    <input type="text" id="username" required>
                </div>
                <div class="rowModal">
                    <label for="password">Password</label>
                    <input type="password" id="password">
                </div>
                <div class="rowModal">
                    <label for="password">Confirm password</label>
                    <input type="password" id="password" required>
                </div>
                <div class="rowModal1">
                    <label for="team">Choose side:</label>
                </div>
                <div class="rowModal2">
                    <input type="checkbox" name="team" value="USA"> Usa
                    <input type="checkbox" name="team" value="Soviet" style="margin-left:35px">Soviet
                </div>
                <div class="rowModal1">
                <input type="checkbox" required> I agree to the <a href="#" style="color:rgb(22, 165, 55)">Terms of Use</a>
                </div>
                <div class="rowModal register">
                    <input type="button" value="Sign Up" id="register" onclick="validate()"/>
                </div>
                <div class="rowModal3">
                    Already have an account? <a href="login.html" style="color:rgb(51, 71, 255)">Log in here</a>
                </div>
            </form>
          </div>
        </div>

        <script src="js/signup.js"></script>

    <div class="container">
      <h1>Cold spies</h1>
      <h3>Help fight the silent war</h3>
      <button class="playNow btns1" type="submit" name="registerbutton" onclick="showRegister()"><a href="html/game.html">Play Now</a></button>
    </div>

    <div class="cont">
      <p>the text adventure of a life time. Fight on either the side of the USA or
         the Soviet union as a spy trying to uncover the other's side secrets</p>
    </div>
    <div class="content">
      <p>In Cold Spy you play as a spy for either the side of the USA or the Soviet.
         After you have picked side the game will begin with giving you mission icon on your in game map.<br><br>
         when you get close enough too the mission icon you can start the mission and with that you are given a story text and at the end of the text you are given several otion on how you want to
         handel your mission and depending on what you choose you are given differnt
         mission markers on your map.<br><br> You are scored depending on the choises you make, some might give more
         than others but in the end your score is counted up too the team score but you can also se your individual score compared to the rest of your team.</p>
    </div>
    <footer>
      <p>Contact us: teamCherry@kyh.se<br><br>  members:Sebastian Bergström, Julia Bäcks, Victor Pettersson, Micke Berglund, Emil Brungård, Elias Liljegård</p>

      <div class="socialIcons">
        <a href=""><i class="fa fa-facebook fa-2x"></i></a>
        <a href=""><i class="fa fa-twitter fa-2x"></i></a>
        <a href=""><i class="fa fa-github fa-2x"></i></a>
        <a href=""><i class="fa fa-envelope-o fa-2x"></i></a>
      </div>

    </footer>
</body>
</html>
