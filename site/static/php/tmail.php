<?php
$to      = 'gerd.wuetherich@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: gerd@gerd-wuetherich.de' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>