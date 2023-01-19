<?php

$expTime = new DateTime();
if (strtotime($expTime->format('Y-m-d')) >= strtotime("2023-03-01")) {
    var_dump($interval_hour);
    exit;
}

require 'login.php';