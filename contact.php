<?php

if (isset($_POST["submit"]))
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mailTO = "nikstepwn@gmail.com";
    $headers = "Form from: MSPhoto";
    $txt = "Přišla ti zpráva od ".$name ".\n\n".$message "telefon:".$phone "email: ".$email;

    mail($mailTO, $txt, $headers);

    header("Location: index.html?mailsend"); 

?>
