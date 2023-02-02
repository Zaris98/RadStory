<?php
    $to = "kajun.pang@hotmail.com";
    $subject = "New Feedback";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: $email" . "\r\n";
    mail($to, $subject, $message, $headers);
    header("Location: feedback-received.html");
?>