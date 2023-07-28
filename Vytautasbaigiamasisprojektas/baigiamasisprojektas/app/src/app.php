<?php
    $email = trim($_POST['email']);


    if(!empty($email)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            include 'db.php';
        }
    }
?>