<?php

    if (isset($_POST['submit'])) {

    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "nikstepwn@gmail.com";
    $subject = "Form from: MSPhoto";
    $headers = "Mail from:". $email;
    $txt = 'Přišla ti zpráva od: '.$name.".\n\n". $message;

    mail($to, $subject, $txt, $headers);

<<<<<<< HEAD
    }
=======
    header("Location: index.html?mailsend"); 
>>>>>>> 2ecc286eb61b7883d31dd22dffbc093a908256b7

?>
