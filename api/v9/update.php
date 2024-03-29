<?php

require($_SERVER['DOCUMENT_ROOT'] . '/includes/init.php');

$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST) && isset($_POST['esp_id']) && isset($_POST['user_id'])) {

    date_default_timezone_set('Asia/Bangkok');
    $dateTime = new DateTime();

    $db = new Database();
    $conn = $db->getConn();

    $esp_id = Esp_ID::getByESPID($conn, $_POST['esp_id']);


    $payload = [];  // store return status
    $line_sent = []; // store line sent
    $line_sent_status = $dateTime->format('Y-m-d H:i:s') . "  esp id : " . $_POST['esp_id'] . "\n";; // store line sent status


        // update lastupdate from device
        Esp_ID::lastTimeUpdate($conn, $_POST['esp_id'], $dateTime->format('Y-m-d H:i:s'));

        // update sec data for each project
        foreach ($_POST['data'] as $data) {
            if ($data['project_id'] == 0) {
                require("0custom.php");
            } else if ($data['project_id'] == 1) {
                require("1acmeter.php");
            } else if ($data['project_id'] == 2) {
                require("2pmmeter.php");
            } else if ($data['project_id'] == 3) {
                require("3dcmeter.php");
            } else if ($data['project_id'] == 4) {
                require("4dht.php");
            } else if ($data['project_id'] == 6) {
                require("6acmeter3p.php");
            }else if ($data['project_id'] == 7) {
                require("7value32.php");
            }
        }

        // update io
        require("pin.php");

        // update timer
        require("timer.php");

        if ($esp_id->need_ota) echo "&32765";   // if need ota update from server


        // full echo
        // echo "32765&" . (json_encode($payload));

        if (!empty($payload["error"])) {
            $datalog = $dateTime->format('Y-m-d H:i:s') . ", EspID:" . $_POST['esp_id'] . "\n";
            foreach ($payload["error"] as  $error) {
                $datalog .= "-" . $error . "\n";
            }
            file_put_contents('error.log', $datalog . "\n", FILE_APPEND);
            // file_put_contents('var_dump.log', $datalog);
        }

        // notify line sent
        require 'line_noti.php';
}