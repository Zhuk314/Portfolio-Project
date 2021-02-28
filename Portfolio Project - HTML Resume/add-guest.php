<?php

//Make sure the user is coming from the form
if (!($_SERVER['REQUEST_METHOD'] == 'POST')) {

    //Send user to guestbook page
    header("location: guestbook.html");
}

// Turn on error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Connect to database

$username = 'yzhukgre';
$password = 'Myx]EYjQf3[346';
$hostname = 'localhost';
$database = 'yzhukgre_grc';

$cnxn = mysqli_connect($hostname, $username, $password, $database)
or die("Error connecting to database");
//echo "Connected!";

    /*
    echo "<pre>";
    var_dump($_POST);
    echo "</pre>";
    */

    /*
    array(11) {
        ["fname"]=>
      string(5) "Yurii"
        ["lname"]=>
      string(4) "Zhuk"
        ["jobTitle"]=>
      string(0) ""
        ["company"]=>
      string(0) ""
        ["linkedInURL"]=>
      string(0) ""
        ["emailAdd"]=>
      string(22) "iamyuriizhuk@gmail.com"
        ["meetingType"]=>
      string(6) "meetup"
        ["placeWeMet"]=>
      string(0) ""
        ["message"]=>
      string(0) ""
        ["addMeCheckbox"]=>
      string(3) "yes"
        ["emailFormat"]=>
      string(4) "html"
    }
    */

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$jobTitle = $_POST['jobTitle'];
$company = $_POST['company'];
$linkedInURL = $_POST['linkedInURL'];
$emailAdd = $_POST['emailAdd'];

$meetingType = $_POST['meetingType'];
$placeWeMet = $_POST['placeWeMet'];

$message = $_POST['message'];

$addMeCheckbox = $_POST['addMeCheckbox'];
$emailFormat = $_POST['emailFormat'];


//VALIDATE DATA BEFORE INSERTING INTO DATABASE
$sql = "INSERT INTO guestbook VALUES ('$fname', '$lname', '$jobTitle', '$company', '$linkedInURL',
                              '$emailAdd', '$meetingType', '$placeWeMet', '$message', '$addMeCheckbox', '$emailFormat',CURRENT_TIMESTAMP)";
//echo $sql;

$success = mysqli_query($cnxn, $sql);

if ($success) {
    echo "<h3>You were added!</h3>";
} else {
    echo "Something went wrong";
}