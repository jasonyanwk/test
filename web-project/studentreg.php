<?php
require_once 'control.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $name = $_POST['name'];
    $studentid = $_POST['studentid'];
    $year = $_POST['year'];
    $programe = $_POST['programe'];
    $password = $_POST['password'];
    
    $db = loadingdb(); //give  db
    studentreg($name, $studentid, $year, $programe, $password, $db);
}

?>


<form method="POST" >
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
    
    <label for="studentid">Student ID:</label>
    <input type="text" name="studentid" id="studentid">
    
    <label for="year">Year:</label>
    <input type="text" name="year" id="year">
    
    <label for="programe">Programme:</label>
    <input type="text" name="programe" id="programe">

    <label for="password">Programme:</label>
    <input type="password" name="password" id="password">
    
    <input type="submit" value="Submit">
</form>