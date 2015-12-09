<?php

$name = $_POST["name"];

$servername = "localhost";
$username = "root";
$password = "0ls6z15UDf";
$dbname = "tmnt";

$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT name FROM results ORDER BY numb LIMIT 25";
$result = mysqli_query($conn,$query);

while ($row = $result->fetch_assoc()){
	if ($row['name'] == $name){
		echo 'fail';
	};
};

?>