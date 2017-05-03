<?php
$to      = 'tarafenton21@gmail.com';
$subject = 'New Request from Website';
$name2 = $_POST['name1'];
$email2 = $_POST['email1'];
$phone2 = $_POST['phone1'];
$message2 = $_POST['msg1'];
$body = 'Name: '.$name2. "\r\n" .
'Email: '.$email2. "\r\n".
'Phone: '.$phone2. "\r\n".
'Message: '.$message2.'';
$headers = 'From: '.$name2. "\r\n" .
'Reply-To: '.$email2. "\r\n";

mail($to, $subject, $body, $headers) or die("Error!");
echo "Thank You! Your message has been sent.";
?>