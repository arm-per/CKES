<?php
    $myemail = 'noreply@ckes.com';
    $name = $_POST[/** Aquí va el input[name] del interesado **/];
    $company = $_POST[/** Aquí va el input[name] del nombre de la empresa **/];
    $phone = $_POST[/** Aquí va el input[name] del teléfono del interesado **/];
    $email = $_POST[/** Aquí va el input[name] del correo del interesado **/];
    $marketing = $_POST[/** Aquí va el input[name] de marketing**/];

    $to = "$myemail";
    $subject = "website notification. $name wants to contact to you";
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

    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=utf-8";
    $headers[] = "To: CKES $myemail";
    $headers[] = "From: $email";

    mail($to, $subject, $body, implode("\r\n", $headers));
    echo "<script>alert(\"Your information were successfully sent\"</script>"