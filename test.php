<?php

require($_SERVER['DOCUMENT_ROOT'] . '/includes/init.php');

$pin = new ControlPin();
$pin->esp_id=123321;
var_dump($pin->createDefault());
