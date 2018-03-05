<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/leaderboard.css">
  <title>Leaderboard</title>
  </head>
  <body>
    <table>
  <tr>
    <th>Username</th>
    <th>Team</th>
    <th>Score</th>
  </tr>
  <?php
  $conn= mysqli_connect("crockett.highstone.biz", "cherry", "cherry123", "coldspies");
  if (!$conn) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
  echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
  echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
  exit;
  }
$sql = "SELECT username, team, score from player";
$result = $conn-> query($sql) or die($conn->error);

  while ($row = $result -> fetch_assoc()) {
   echo "<tr><td>". $row["username"] . "</td><td>". $row["team"] . "</td><td>". $row["score"] . "</td></tr>";
  }
  echo "</table>";



$conn-> close();
  ?>
</table>





  </body>
</html>
