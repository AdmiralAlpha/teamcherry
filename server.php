<?php
session_start();

$username = "";
$email = "";
$password = "";
$errors = array(); 

$db = mysqli_connect('localhost', 'cherry', 'test', 'testcherry');

if (isset($_POST['submit'])) {
  
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password = mysqli_real_escape_string($db, $_POST['password']);
  $cPassword = mysqli_real_escape_string($db, $_POST['cPassword']);

  
  if (empty($username)) { array_push($errors, "Fill in username"); }
  if (empty($email)) { array_push($errors, "Fill in email"); }
  if (empty($password)) { array_push($errors, "Fill in password"); }

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

  //If zero errors, inputs will insert into database and direkt to player profile 
  if (count($errors) == 0) {

  	$query = "INSERT INTO player (username, email, password) 
  			  VALUES('$username', '$email', '$password')";
  	mysqli_query($db, $query);
  	$_SESSION['username'] = $username;
  	$_SESSION['success'] = "Logged in!";
    header('location: index.php');
  }
}

