<?php

require_once '../includes/init.php';
Auth::requireLogin();

// header('Cache-Control: no-cache');

$db = new Database();
$conn = $db->getConn();

require 'includes/edit-device-name.php';

$data = Esp_ID::getAllByUSERID($conn, $_SESSION['user_id']);

foreach ($data as $device) {
  if (isset($_GET['id']) && $_GET['id'] == $device['esp_id']) {
    $activedevice = $device;
  }
}

$custom_pages = Custom_page::getByUSERID($conn, $_SESSION['user_id']);
// var_dump($custom_pages);
// exit;
// var_dump($_SESSION);exit;

if (isset($_GET['id'])) {
  if (!Auth::canView($_GET['id'], $data)) Auth::block();
}

$email = User::getEmail($conn, $_SESSION['user_id']);
?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>IoTkiddie Dashboard</title>
  <link rel="icon" type="image/x-icon" href="/includes/img/favicon.ico">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <!-- <link rel="stylesheet" href="includes/plugins/fontawesome-free/css/all.min.css"> -->
  <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- bootstrap icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="includes/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="includes/dist/css/adminlte.min.css">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/css/adminlte.min.css"> -->
  <!-- jQuery -->
  <script src="includes/plugins/jquery/jquery.min.js"></script>
  <!-- Daterange picker -->
  <link rel="stylesheet" href="includes/plugins/daterangepicker/daterangepicker.css">
  <!-- uPlot -->
  <link rel="stylesheet" href="includes/plugins/uplot/uPlot.min.css">
  <!-- data table -->
  <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css"> -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css">
  <!-- jQuery Timepicker -->
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">


</head>

<body class="hold-transition dark-mode layout-top-nav">
  <div class="wrapper">

    <!-- Preloader -->
    <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__wobble" src="../includes/img/logo.png" alt="IoTbundle LOGO" height="60" width="60">
    </div>

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark">

      <div class="container-fluid">
        <a href="/dashboard" class="navbar-brand">
          <img src="../includes/img/logo.png" alt="BAN-GOO Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
          <span class="brand-text font-weight-light">BAN-GOO</span>
        </a>

        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/dashboard" class="nav-link active">Device</a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/dashboard/profile.php" class="nav-link">Profile</a>
          </li>
        </ul>
        <!-- Right navbar links -->
        <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <div class="media">
                <i class="fas fa-user"></i>
                  <div class="media-body">
                    <h3 class="dropdown-item-title pl-2">
                     <?= $email ?>
                    </h3>
                  </div>
                </div>

              </a>
              <div class="dropdown-divider"></div>
              <a href="../logout.php" class="dropdown-item">
                <div class="media">
                <i class="fa-solid fa-right-from-bracket"></i>
                <div class="media-body">
                    <h4 class="dropdown-item-title pl-2">
                      Log out
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /.navbar -->


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">