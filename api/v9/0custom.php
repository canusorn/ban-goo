<?php

if (file_exists("custom/" . $_POST['esp_id'] . ".php")) {
    require("custom/" . $_POST['esp_id'] . ".php");
    $default = false;
} else {
    $default = true;
}

if ($default) {
    require("custom/default.php");
}
