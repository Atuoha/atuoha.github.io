<?php
    
  $to = 'atuohainitiatives@gmail.com';
  $from = $_POST['name'];
  $from_email = $_POST['email'];
  $subject = $_POST['subject'] ;
  $message = 'Sent by: ' . $from_email . ' Message:' . $_POST['message'];
  $header = "From:" . $_POST['name'];

  mail($to, $subject, $message, $header);
  	
  

?>
