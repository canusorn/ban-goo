<?php



require 'includes/header.php';

?>


<script type="text/javascript">
  document.title = "<?= $activedevice['device_name'] . " | BAN-GOO Dashboard" ?>"
</script>

<?php
// device to display
if (!isset($esp_id)) {
  $esp_id = Esp_ID::getByESPID($conn, $_GET['id']);
}
?>


<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">


    <div class="row mb-2">
      <div class="col-sm-6">
        <?php if ($esp_id) : ?>
          <div class="d-flex flex-row bd-highlight mb-3">
            <h1 class="m-0 pr-2"><?= $activedevice['device_name'] ?></h1>
            <span id="device_status" class="badge badge-secondary align-self-center"></span>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editdevicename">
              <i class="bi bi-pencil-square text-dark"></i>
            </button>
          </div>
        <?php else : ?>
          <h1 class="m-0">ไม่พบอุปกรณ์</h1>
        <?php endif; ?>
      </div><!-- /.col -->
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="/dashboard">Device</a></li>
          <?php if (!is_null($data)) : ?><li class="breadcrumb-item active"><?= $activedevice['device_name'] ?></li>
          <?php endif; ?>
        </ol>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->




<?php

// device to display
if ($esp_id) {
  $projects = explode(",", $esp_id->project_id); ?>
  <?php if (count($projects) > 1 || (!is_null($activedevice['version']) && $activedevice['version'] >= 9)) : ?>

    <div class="container-fluid">
      <div class="d-flex justify-content-end">
        <h2 class="mr-3" id="this-time"></h2>
        <ul class="nav nav-pills mb-3 ml-3 mr-3 flex-right" id="project-tab">

          <li class="nav-item">
            <a class="nav-link btn-secondary text-light <?= isset($_GET['p']) && $_GET['p'] == "dashboard"  ? "active" : "" ?>" id="dashboard-tab" href="device.php?id=<?= $_GET['id'] ?>&p=dashboard">Dashboard</a>
          </li>

          <?php

          if (isset($_GET['project']) && in_array($_GET['project'], $projects)) {
            $project = $_GET['project'];
          } else {
            $project = $projects[0];
          }

          foreach ($projects as $i => $project_id) : ?>
            <li class="nav-item">
              <a class="nav-link btn-secondary text-light <?= ($project_id == $project  && !isset($_GET['p'])) ? "active" : "" ?>" id="project-<?= $project_id ?>-tab" href="device.php?id=<?= $_GET['id'] ?>&p=data&project=<?= $project_id ?>">

                <?php if ($project_id == 0) : ?>
                  Data</a>
            </li>
          <?php elseif ($project_id == 1) : ?>
            AC Meter</a></li>
          <?php elseif ($project_id == 2) : ?>
            PM Meter</a></li>
          <?php elseif ($project_id == 3) : ?>
            DC Meter</a></li>
          <?php elseif ($project_id == 4) : ?>
            DHT</a></li>
          <?php elseif ($project_id == 5) : ?>
            SmartFarm Solar</a></li>
          <?php elseif ($project_id == 6) : ?>
            AC Meter 3 Phase</a></li>
            <?php elseif ($project_id == 7) : ?>
            Data 32 value</a></li>
          <?php endif; ?>
        <?php endforeach; ?>

        <li class="nav-item">
          <a class="nav-link btn-secondary text-light <?= (isset($_GET['p']) && $_GET['p'] == "pin") ? "active" : "" ?>" id="pin-tab" href="device.php?id=<?= $_GET['id'] ?>&p=pin">
            Pin</a>


        </ul>
      </div>
    </div>
<?php endif;
} ?>

<div class="container-fluid" id="body-content">

  <?php
  if (isset($_GET['p']) && $_GET['p'] == 'pin') {
    require 'includes/pin.php';
  } else if (isset($_GET['p']) && $_GET['p'] == 'data' || isset($_GET['project'])) {
    if (!isset($project)) $project = $esp_id->project_id;

    if ($project == 0) {
      require 'includes/custom/custom.php';
    } else if ($project == 1) {

      if (!is_null($activedevice['version']) && $activedevice['version'] >= 9)
        require 'includes/01acmeter_v9.php';
      else
        require 'includes/01acmeter.php';
    } else if ($project == 2) {
      if (!is_null($activedevice['version']) && $activedevice['version'] >= 9)
        require 'includes/02pmmeter_v9.php';
      else
        require 'includes/02pmmeter.php';
    } else if ($project == 3) {
      require 'includes/03dcmeter_v9.php';
    } else if ($project == 4) {
      if (!is_null($activedevice['version']) && $activedevice['version'] >= 9)
        require 'includes/04dht_v9.php';
      else
        require 'includes/04dht.php';
    } else if ($project == 5) {
      if (!is_null($activedevice['version']) && $activedevice['version'] >= 9)
        require 'includes/05smartfarm-solar_v9.php';
      else
        require 'includes/05smartfarm-solar.php';
    } else if ($project == 6) {
      require 'includes/06acmeter_3p_v9.php';
    } else if ($project == 7) {
      require 'includes/07value32.php';
    }
  } else {
    require 'includes/dashboard.php';
  }
  ?>

</div>

<!-- for rename device -->
<div class="modal fade" id="editdevicename" tabindex="-1" aria-labelledby="edit-device-name" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="edit-device-name">แก้ไขชื่ออุปกรณ์</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="edit-form" action="device.php?id=<?= $_GET['id'] ?>" method="post">
          <div class="form-group">
            <label for="device-name" class="col-form-label">ชื่ออุปกรณ์:</label>
            <input type="text" class="form-control" id="device-name" name="device-name" value="<?= $activedevice['device_name'] ?>">
          </div>
          <div style="text-align: right">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
            <button type="submit" class="btn btn-primary">ตกลง</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<script>
  <?php
  if (!is_null($activedevice['version']) && $activedevice['version'] >= 9) : ?>
    var version = <?= $activedevice['version'] ?>;
  <?php else : ?>
    var version = 0;
  <?php endif; ?>
</script>
<script src="js/pagefetch.js"></script>

<?php require 'includes/footer.php'; ?>

<script type="text/javascript">
  $(document).ready(function() {
    $("a[href='/dashboard']").addClass("active");
    $("a[href='/dashboard']").parent().addClass("menu-open");


    // setInterval(function(){$("#this-time").html(moment().format('DD-MM-YYYY HH:mm:ss'));},1000);
  });
</script>

<?php 
$projects = explode(",", $esp_id->project_id);
 if($projects[0] != 0) : ?>

<script type="text/javascript">
  $(document).ready(function() {
    $("#dashboard-tab").remove();

  });
</script>

<?php endif; ?>