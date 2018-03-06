<?php include('server.php')
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/index.css">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <title>Cold spies</title>

</head>

<body>

  <header>
    <button class="btnL btns" type="submit" name="loginbutton" id="logInButton" data-toggle="modal" data-target="#myPopupModal2">Log in</button>
    <button class="btnR btns" type="submit" name="registerbutton" id="signUpButton" data-toggle="modal" data-target="#myPopupModal">Sign up</button>
  </header>

  <div class="container">

    <!-- Modal -->
    <div class="modal fade" id="myPopupModal" role="register">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create an account</h4>
          </div>
          <div class="modal-body">
            <form method="post" action="index.php">
              <div class="rowModal">
                <label for="email">E-mail address</label>
                <input type="email" name="email" id="email" required>
              </div>
              <div class="rowModal">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
              </div>
              <div class="rowModal">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
              </div>
              <div class="rowModal">
                <label for="password">Confirm password</label>
                <input type="password" name="cPassword" id="cPassword" required>
              </div>
              <div class="rowModal1">
                <label for="team">Choose side:</label>
              </div>
              <div class="rowModal2">
                <input type="radio" name="team" value="usa"> Usa
                <input type="radio" name="team" value="soviet" style="margin-left:35px">Soviet
              </div>
              <div class="rowModal1">
                <input type="checkbox" required> I agree to the
                <a href="#" style="color:rgb(22, 165, 55)">Terms of Use</a>
              </div>
              <div class="rowModal register">
                <input type="submit" name="submit" value="Sign Up" id="register" onclick="submit" />
              </div>

              <?php include('errors.php'); ?>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myPopupModal2" role="log in">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sign in</h4>
          </div>
          <div class="modal-body">
            <form method="post" action="">
              <div class="rowModal">
                <label for="username2">Username</label>
                <input type="text" name="username" id="username" value="<?php echo $username; ?>" required>
              </div>
              <div class="rowModal">
                <label for="password2">Password</label>
                <input type="password" name="password" id="password" value="<?php echo $username; ?>" required>
              </div>
              <div class="rowModal">
                <input type="submit" name="login" value="Log in" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="mainCont">
    <h1 class="mainH1">Cold spies</h1>
    <h3 class="mainH3">Help fight the silent war</h3>
    <button type="button" class="playNow btns1" name="registerbutton" data-toggle="modal" data-target="#regModal">Play Now</button>
  </div>

  <div class="cont">
    <p>The text adventure of a lifetime. Fight on either the side of the USA or the Soviet union as a spy trying to uncover
      the other sides' secrets</p>
  </div>
  <div class="content">
    <p>In Cold Spies you play as a spy for either the USA or the Soviet union. After you have picked a side the game will begin
      giving you missions on your map.
      <br>
      <br> When you get close enough too the a mission icon you can start the mission. You are then given a story at the end
      of which you have several options on how you can handle your mission and depending your choise the mission will play
      out differently.
      <br>
      <br> You are scored depending on the choises you make during the game. There are good choices and bad choices, just like
      in real life. In the end your score is counted up to the teams score and you can also see your individual score compared
      to the rest of your team.</p>
  </div>

  <footer>
    <p>Contact us: teamCherry@kyh.se
      <br>
      <br> Members: Sebastian Bergström, Julia Bäcks, Victor Pettersson, Mikael Berglund, Emil Brunngård, Elias Liljegard</p>

    <!-- <div class="socialIcons">
        <a href=""><i class="fa fa-facebook fa-2x"></i></a>
        <a href=""><i class="fa fa-twitter fa-2x"></i></a>
        <a href=""><i class="fa fa-github fa-2x"></i></a>
        <a href=""><i class="fa fa-envelope-o fa-2x"></i></a>
      </div> -->
    <script src="js/loginbutton.js"></script>
    <script src="js/signup.js"></script>
  </footer>
</body>

</html>
