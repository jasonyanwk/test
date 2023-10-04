<?php
/*
 * @Author: shaky shaky
 * @Date: 2023-09-21 20:26:54
 * @LastEditors: shaky shaky
 * @LastEditTime: 2023-09-21 22:57:37
 * @FilePath: \web-project\control.php
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

//  database connection
function loadingdb() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydatabase";

    $db = new mysqli($servername, $username, $password, $dbname);
    if ($db->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
    return $db;
}

// 

///this student info update database
function studentreg($name, $studentid, $year, $programe, $password, $db)
 {
    $sql = "INSERT INTO students (name, studentid, year, programe, password) 
    VALUES ('$name', '$studentid', '$year', '$programe', '$password')";
    if ($db->query($sql) === TRUE) {
       
        $db->close(); // close data base
        exit();
    } else {
       
    }
}

function checkpassword($name, $password)
{
    $db = loadingdb();

    $query = "SELECT * FROM students WHERE name = '$name' AND password = '$password'";
    $result = mysqli_query($db, $query);

//   check
    if (mysqli_num_rows($result) == 1) {
 
        echo "用户名和密码匹配";
    } else {
    
        echo "用户名和密码不匹配！";
    }

  
    mysqli_close($db);
}




