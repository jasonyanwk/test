<?php
// 假设您使用 MySQL 数据库
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webproject";

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接数据库失败: " . $conn->connect_error);
}

include 'Calendar.php';
$calendar = new Calendar();

// 处理添加事件的逻辑
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $eventDate = $_POST["event_date"];
    $eventDescription = $_POST["event_description"];

    // 将事件插入到数据库中
    $sql = "INSERT INTO events (`date`, description) VALUES ('$eventDate', '$eventDescription')";
    if ($conn->query($sql) === true) {
        // 重定向到当前页面，以刷新事件列表
        header("Location: ".$_SERVER['PHP_SELF']);
        exit();
    } else {
        echo "添加事件时出错：" . $conn->error;
    }
}

// 从数据库中获取事件列表
$sql = "SELECT * FROM events ORDER BY `date` DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $eventDate = $row['date'];
        $eventDescription = $row['description'];

        $calendar->add_event($eventDescription, $eventDate, 1, 'green');
    }
    echo $calendar;
} else {
    echo '<p>No Events</p>';
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>HSU CALENDAR</title>
    <link href="css/calendar.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
    
    <div class="header">
        <button class="custom-button" onclick="goBack()">BACK</button>
        <div class="logo-container">
            <img src="hsu.png" alt="Logo">
        </div>
        <div class="calendar-title">
            <h1>HSU CALENDAR</h1>
        </div>
    </div>


    <div style="border: 1px solid black; padding: 10px;">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <h2>Add Event</h2>
            <label for="event_date">Date:</label>
            <input type="date" name="event_date" id="event_date" required><br>
            <label for="event_description">Events:</label>
            <input type="text" name="event_description" id="event_description" required><br>
            <div class="chat-container">
                <label for="event_tips">Tips:</label>
                <div class="chat-log" id="chat-log"></div>
                <input type="text" id="chat-input" placeholder="Type your message..." />
            </div>
            <input type="submit" value="Submit">
        </form>

        <div class="event-list">
            <h2>Event List</h2>
     
        </div>
    </div>


    <script>
        function goBack() {
         
        }
    </script>
</body>
</html>