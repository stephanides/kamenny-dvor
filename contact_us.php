<?php 
$name = $_POST['firstname'];
$email = $_POST['e-mail'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "info@stamatinvest.sk";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>