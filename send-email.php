<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$responseMessage = '';  // This will hold the message for success or error
$responseClass = '';    // Class for the message (success or error)

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  try {
    set_time_limit(-1);
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtpout.secureserver.net';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->Username = 'support@mumbaikitchensolution.com';
    $mail->Password = 'Mumbaikitchen@123';

    // Recipients
    $mail->setFrom('support@mumbaikitchensolution.com', 'Mumbai Kitchen Solution');
    $mail->addAddress('support@mumbaikitchensolution.com', 'Mumbai Kitchen Solution');
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $body = "<h2>New Message from $name</h2>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Subject:</strong> $subject</p>";
    $body .= "<p><strong>Message:</strong></p>";
    $body .= "<p>$message</p>";

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Lead Data';
    $mail->Body = $body;
    $mail->Debugoutput = 'html';

    if ($mail->send()) {
      // Success: Show success message with green color
      $responseMessage = 'OK';
      $responseClass = 'alert alert-success';  // Green success message
    } else {
      // Error: This part shouldn't be reached in normal circumstances
      $responseMessage = 'There was a problem sending the email.';
      $responseClass = 'alert alert-danger';  // Red error message
    }
  } catch (Exception $e) {
    // If an error occurs during the send process
    $responseMessage = 'Unable to send email. '.
    $responseClass = 'alert alert-danger';  // Red error message
  }
}

echo $responseMessage;
?>
