<?php
$name = $_POST["name"];
$a = $_POST["a"];
$b = $_POST["b"];
$c = $_POST["c"];
$d = $_POST["d"];
$e = $_POST["e"];
$f = $_POST["f"];
$g = $_POST["g"];
$h = $_POST["h"];
$i = $_POST["i"];
$j = $_POST["j"];
$turtle = 'who';

$mike = 0;
$don = 0;
$raph = 0;
$leo = 0;

if ($a == "1"){
	$mike += 1;
} else if ($a == "2"){
	$don += 1;
} else if ($a == "3") {
	$raph += 1;
} else {
	$leo += 1;
};

if ($b == "1"){
	$raph += 1;
} else if ($b == "2"){
	$mike += 1;
} else if ($b == "3") {
	$don += 1;
} else {
	$leo += 1;
};

if ($c == "1"){
	$leo += 2;
} else if ($c == "2"){
	$mike += 2;
};

if ($d == "1"){
	$raph += 2;
} else if ($d == "2"){
	$don += 2;
};

if ($e == "1"){
	$raph += 1;
} else if ($e == "2"){
	$leo += 1;
} else if ($e == "3") {
	$don += 1;
} else {
	$mike += 1;
};

if ($f == "1"){
	$leo += 1;
} else if ($f == "2"){
	$don += 1;
} else if ($f == "3") {
	$mike += 1;
} else {
	$raph += 1;
};

if ($g == "1"){
	$raph += 1;
} else if ($g == "2"){
	$don += 1;
} else if ($g == "3") {
	$leo += 1;
} else {
	$mike += 1;
};

if ($h == "1"){
	$leo += 1;
} else if ($h == "2"){
	$raph += 1;
} else if ($h == "3") {
	$don += 1;
} else {
	$mike += 1;
};

if ($i == "1"){
	$raph += 1;
} else if ($i == "2"){
	$leo += 1;
} else if ($i == "3") {
	$don += 1;
} else {
	$mike += 1;
};

if ($j == "1"){
	$don += 1;
} else if ($j == "2"){
	$leo += 1;
} else if ($j == "3") {
	$raph += 1;
} else {
	$mike += 1;
};

if (max($don,$raph,$leo,$mike) == $don){
	$turtle = "don";
};

if (max($don,$raph,$leo,$mike) == $raph){
	$turtle = "raph";
};

if (max($don,$raph,$leo,$mike) == $leo){
	$turtle = "leo";
};

if (max($don,$raph,$leo,$mike) == $mike){
	$turtle = "mike";
};

$servername = "localhost";
$username = "root";
$password = "0ls6z15UDf";
$dbname = "tmnt";

$conn = new mysqli($servername, $username, $password, $dbname);

$query = "INSERT INTO results (name, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, mike, don, raph, leo, turtle)
VALUES ('{$name}',{$a},{$b},{$c},{$d},{$e},{$f},{$g},{$h},{$i},{$j},{$mike},{$don},{$raph},{$leo},'{$turtle}')";
$result = mysqli_query($conn,$query) or die (mysqli_error($conn));

if ($result == 1){
	echo "res = {name:'{$name}',q1:{$a},q2:{$b},q3:{$c},q4:{$d},q5:{$e},q6:{$f},q7:{$g},q8:{$h},q9:{$i},q10:{$j},mike:{$mike},don:{$don},raph:{$raph},leo:{$leo},turtle:'{$turtle}'};";
} else {
	echo "error";
}

?>