<?php 
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email']
$tel = $_POST['tel'];
$dateFrom = $_POST['dateFrom'];
$dateTo = $_POST['dateTo'];
$pocetOsob = $_POST['pocetOsob'];
$pocetDeti = $_POST['pocetDeti'];
$formcontent="From: $name  $surname\n Telefonne císlo: $tel \n Datum od: $dateFrom \n Datum do: $dateTo \n Pocet osob: $pocetOsob \n Pocet deti: $pocetDeti";
$recipient = "smacuga@enli.sk";
$subject = "Rezervacia";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>