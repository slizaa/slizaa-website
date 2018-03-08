<?php

        $name;$email;$message;$captcha;
        if(isset($_POST['name']))
          $email=$_POST['name'];
        if(isset($_POST['email']))
          $email=$_POST['email'];
        if(isset($_POST['message']))
          $message=$_POST['message'];
        if(isset($_POST['g-recaptcha-response']))
          $captcha=$_POST['g-recaptcha-response'];

        if(!$captcha){
          echo '<h2>Please check the the captcha form.</h2>';
          exit;
        }
        $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LeJrBQTAAAAALYw3n0gvHYLYUhTxThiAm9E4Jk_&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);
        if($response['success'] == false)
        {
          echo '<h2>You are spammer ! Get the @$%K out</h2>';
        }
        else
        {
$to      = 'gerd.wuetherich@gmail.com';
$subject = '[NEUE NACHRICHT ÜBER WUETHERICH.COM]';
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo 'success';
    exit();
        }
?>