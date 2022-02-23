<?php
    $myemail = 'service@callcks.com';
    $name = $_POST[name];
    $company = $_POST[company];
    $phone = $_POST[phone];
    $email = $_POST[email];
    $marketing = $_POST[marketing];

    $to = "armper.95@gmail.com";
    $subject = "website notification. $name wants to contact to you";
    $senderSubject = "Thanks for contacting us";
    $body = "<html>
    <head>
      <title>$name wants to contact you</title>
    </head>
    <body style=\"font-family: sans-serif;\">
      <div style=\"background: #efefef; display: inline-block; border-radius: 10px; overflow: hidden;border-bottom: 8px solid #0B3760\">
      <h1 style=\"background-color: #AE271E;padding:15px;color:white;display:inline-block;margin-top:0;font-size: 24px; font-weight:light;margin-bottom:0;\">You have received a new request</h1>
        <div style=\"padding: 10px;\"> 
          <p style=\"font-weight: bold\">Name: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$name</span></p>
          <p style=\"font-weight: bold\">Company: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$company</span></p>
          <p style=\"font-weight: bold\">phone: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$phone</span></p>
          <p style=\"font-weight: bold\">email: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$email</span></p>
          <p style=\"font-weight: bold\">Also answered: <span style=\"font-weight: normal\">$marketing</span> to receive marketing</p>
          </div>
          <p style=\"text-align: center;\">Get in touch as soon as you can</p>
        </div>
    </body>
    </html>
    ";
    
    $bodySender = "<html>
    <head>
      <title>Thank you for contacting Us.</title>
    </head>
    <body style=\"font-family: sans-serif;\">
      <div style=\"background: #efefef; display: inline-block; border-radius: 10px; overflow: hidden;border-bottom: 8px solid #0B3760\">
      <h1 style=\"background-color: #AE271E;padding:15px;color:white;display:inline-block;margin-top:0;font-size: 24px; font-weight:light;margin-bottom:0;\">Hello, $name. We receive your request. </h1>
        <div style=\"padding: 10px;\"> 
          <p style=\"font-weight: bold\">Name: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$name</span></p>
          <p style=\"font-weight: bold\">Company: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$company</span></p>
          <p style=\"font-weight: bold\">phone: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$phone</span></p>
          <p style=\"font-weight: bold\">email: <span style=\"font-weight: normal; display: block; font-size: 18px; margin-top: 10px;\">$email</span></p>
          </div>
          <p style=\"text-align: center;\">We will in touch soon</p>
        </div>
    </body>
    </html>";

    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=utf-8";
    $headers[] = "To: CKES $myemail";
    $headers[] = "From: $email";
    
    $sender[] = "MIME-Version: 1.0";
    $sender[] = "Content-Type: text/html; charset=utf-8";
    $sender[] = "To: $email";
    $sender[] = "From: $myemail";

    mail($to, $subject, $body, implode("\r\n", $headers));
    mail($email, $senderSubject, $bodySender, implode("\r\n", $sender));
    
    echo "<script>alert(\"Your information were successfully sent\");
        window.location.href = \"/\";
    </script>";