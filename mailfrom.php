<?php
$to      = 'tarafenton21@gmail.com';
$subject = 'New Request from Website';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$body = 'Name: '.$name. "\r\n" .
'Email: '.$email. "\r\n".
'Phone: '.$phone. "\r\n".
'Message: '.$message.'';
$headers = 'From: '.$name. "\r\n" .
'Reply-To: '.$email. "\r\n";

mail($to, $subject, $body, $headers) or die("Error!");
echo "Thank You!";
?>