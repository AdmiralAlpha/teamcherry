<?php
session_start();

$username = "";
$email = "";
$errors = array(); 
$password = "";

$db = mysqli_connect('crockett.highstone.biz', 'cherry', 'cherry123', 'coldspies');

if (isset($_POST['submit'])) {
  
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password = mysqli_real_escape_string($db, $_POST['password']);
  $cPassword = mysqli_real_escape_string($db, $_POST['cPassword']);
  $team = mysqli_real_escape_string($db, $_POST['team']);
  
  if (empty($username)) { array_push($errors, "Fill in username"); }
  if (empty($email)) { array_push($errors, "Fill in email"); }
  if (empty($password)) { array_push($errors, "Fill in password"); }

  if(strlen($_POST['password']) < 4){
    array_push($errors, "Password is too short");
  }

  if ($password != $cPassword) {
	array_push($errors, "Passwords do not match");
  }

  $user_check_query = "SELECT * FROM player WHERE username='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);

  if ($user) {
    if ($user['email'] === $email) {
      array_push($errors, "Email already exists");
    }
    if ($user['username'] === $username) {
      array_push($errors, "Username already exists");
    }
  }

  /*USA*/
  if (count($errors) == 0 && $team =='usa') {
  	$query = "INSERT INTO player (username, email, password, team) 
  			  VALUES('$username', '$email', '$password', '$team')";
  	mysqli_query($db, $query);
  	$_SESSION['username'] = $username;
  	$_SESSION['success'] = "You are logged in!";
    header('location: html/usprofile.php');
  }
  
  /*Soviet*/
  if (count($errors) == 0 && $team =='soviet') {
  	$query = "INSERT INTO player (username, email, password, team) 
  			  VALUES('$username', '$email', '$password', '$team')";
  	mysqli_query($db, $query);
  	$_SESSION['username'] = $username;
  	$_SESSION['success'] = "You are logged in!";
    header('location: html/sovprofile.php');
  }
}

if (isset($_POST['login'])) {
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  if (empty($username)) {
  	array_push($errors, "Fill in username");
  }
  if (empty($password)) {
  	array_push($errors, "Fill in password");
  }

  if (count($errors) == 0) {
  	$query = "SELECT * FROM player WHERE username='$username' AND password='$password'";
    $results = mysqli_query($db, $query);
    $user = mysqli_fetch_assoc($results);
    
  if (mysqli_num_rows($results) == 1) {
    if ($user['team'] === 'usa') {
      $_SESSION['username'] = $username;
      header('location: html/usprofile.php');
    }

    if ($user['team'] === 'soviet') {
      $_SESSION['username'] = $username;
      header('location: html/sovprofile.php');
    }
  }

  }
    else {
  		array_push($errors, "Wrong username or password");
    }
  }

