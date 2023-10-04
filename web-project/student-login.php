<!-- /*
 * @Author: shaky shaky
 * @Date: 2023-09-21 22:32:46
 * @LastEditors: shaky shaky
 * @LastEditTime: 2023-09-21 22:37:04
 * @FilePath: \web-project\student-login.php
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */ -->
 <?php
require_once 'control.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentID = $_POST['studentid'];
    $password = $_POST['password'];
    checkpassword($studentID, $password);
}
?>

 <form method="POST">
    <label for="studentid">Student ID:</label>
    <input type="text" name="studentid" id="studentid">

    <label for="password">password:</label>
    <input type="password" name="password" id="password">
    
    <input type="submit" value="Submit">
</form>