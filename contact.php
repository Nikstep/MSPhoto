<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
         $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = ($_POST["phone"]);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! Na něco jste zapomněli, prosím vyplňte všechna pole";
            exit;
        }
        # Antispam
        if (isset($_POST["website"]) && $_POST["website"] == "") {
        
        $recipient = "nikstepwn@gmail.com";

        $subject = "New contact from $name";

        $email_content = "Name: $name\n\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Děkuji. Vaše zpráva byla odeslána";
        } else {
            http_response_code(500);
            echo "Oops! Něco se pokazilo a vaše zpráva nemohla být zaslána";
        }
        
        } else {
            http_response_code(400);
            exit;
        }

    } else {
        http_response_code(403);
        echo "Nastal problém s odelsáním, prosím opakujte akci";
    }

?>