<?php

$servername = "localhost";
$username = "root";
$password = "0ls6z15UDf";
$dbname = "tmnt";

$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT name,turtle FROM results";
$result = mysqli_query($conn,$query);

$arr = array();
$i = 0;

while ($row = $result->fetch_assoc()){
	
	$arr[$i]['name'] = $row['name'];
	$arr[$i]['turtle'] = $row['turtle'];
	$i += 1;
	
}

echo "arr=".json_encode($arr);

?>