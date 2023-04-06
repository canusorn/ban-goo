<?php

if (!isset($activedevice)) {
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/init.php');
    $db = new Database();
    $conn = $db->getConn();

    $activedevice = Esp_ID::getByESPID($conn, $_POST['id'], '*', "array");
}

?>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">

        <div class="d-inline-flex flex-column">
            <div class="btn-group btn-group-toggle mb-3 " data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="overview_option" href="#overview" autocomplete="off" checked> ภาพรวม
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="history_option" autocomplete="off"> ประวัติย้อนหลัง
                </label>
            </div>
        </div>

        <div class="row">
            <div class="col" id="value">
                <div class="card">
                    <!-- Loading (remove the following to stop the loading)-->
                    <div class="overlay dark">
                        <i class="fas fa-3x fa-sync-alt"></i>
                        <h3></h3>
                    </div>
                    <!-- end loading -->
                    <div class="card-header">
                        <h5 class="card-title">ค่าล่าสุด</h5>
                        <div class="card-tools">
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editvarcolor">
                                <i class="fa-solid fa-bell text-light"></i>
                            </button>
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editvarname">
                                <i class="bi bi-pencil-square text-light"></i>
                            </button>
                            <button type="button" class="btn btn-tool text-light" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <!-- ./card-body -->
                    <div class="card-body">
                        <div class="row">
                            <?php for ($var = 0; $var < 32; $var++) : ?>
                                <div class="col-xl-2 col-sm-4 pb-3">
                                    <div class="description-block">
                                        <!-- <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span> -->
                                        <h5 class="description-header mb-2" id="var-<?= $var; ?>-value"></h5>
                                        <span class="description-text" id="var-<?= $var; ?>-label">var<?= $var ?></span>
                                    </div>
                                    <!-- /.description-block -->
                                </div>
                            <?php endfor; ?>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>

                    <div class="card-footer" id="time"></div>
                    <!-- /.card-footer -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->

        </div>
        <!-- /.col -->


        <div class="row">
            <div class="col-md-12" id="chart">
                <div class="card">
                    <!-- Loading (remove the following to stop the loading)-->
                    <div class="overlay dark">
                        <i class="fas fa-3x fa-sync-alt"></i>
                        <h3></h3>
                    </div>
                    <!-- end loading -->
                    <div class="card-header">
                        <h5 class="card-title" id="chart_name">ค่าล่าสุด</h5>
                        <div class="card-tools history_option_class">
                            <ul class="nav nav-pills ml-auto p-2">
                                <li class="nav-item day_view_class p-1"><a class="nav-link active" id="day_view" href="#Chartday" data-toggle="tab">รายวัน</a></li>
                                <li class="nav-item day_view_class p-1"><a class="nav-link" id="mouth_view" href="#Charthistory" data-toggle="tab">เดือน</a></li>
                                <li class="nav-item day_view_class p-1 pr-2"><a class="nav-link" id="history_view" href="#uplot" data-toggle="tab">ย้อนหลัง</a></li>

                                <div class="btn-group month-view-page">
                                    <button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle text-light" data-toggle="dropdown" data-offset="-52">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                    <div class="dropdown-menu history-dropdown" role="menu">
                                        <p id="month-line" class="dropdown-item">กราฟเส้น</p>
                                        <p id="month-bar" class="dropdown-item">กราฟแท่ง</p>
                                    </div>
                                </div>
                                <button type="button" id="month_csvdownload" class="btn btn-outline-secondary text-light btn-sm month-view-page" title="download csv file">
                                    <i class="fa-solid fa-download"></i>&nbsp;<span>CSV</span>
                                </button>

                                <button type="button" id="csvdownload" class="btn btn-outline-secondary text-light btn-sm  history_view_class" title="download csv file">
                                    <i class="fa-solid fa-download"></i>&nbsp;<span>CSV</span>
                                </button>
                                <button type="button" class="btn btn-outline-secondary text-light btn-sm daterange history_view_class" title="Date range">
                                    <i class="far fa-calendar-alt"></i>&nbsp;<span></span>
                                </button>
                                <button type="button" class="btn btn-tool history_view_class text-light " data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>

                            </ul>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row" id="Chartday">
                            <?php for ($var = 0; $var < 32; $var++) : ?>
                                <div class="col-md-6 var_<?= $var ?>_class">
                                    <div class="chart">
                                        <canvas id="Chart<?= $var ?>" height="300" style="height: 300px;"></canvas>
                                    </div>
                                </div>
                            <?php endfor; ?>
                        </div>
                        <!-- /.row -->

                        <!-- /.card-header -->
                        <div class="row" id="Charthistory">
                            <?php for ($var = 0; $var < 32; $var++) : ?>
                                <div class="col-md-6 var_<?= $var ?>_class">
                                    <div class="chart">
                                        <canvas id="Chart_history_<?= $var ?>" height="300" style="height: 300px;"></canvas>
                                    </div>
                                </div>
                            <?php endfor; ?>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="chart" id="uplot">
                                    <div id="areaChart" style="min-height: 250px; height: 400px; max-height: 400px; max-width: 100%;"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="col-md-12" id="google_table">
                <div class="card">

                    <!-- Loading (remove the following to stop the loading)-->
                    <div class="overlay dark">
                        <i class="fas fa-3x fa-sync-alt"></i>
                        <h3></h3>
                    </div>
                    <!-- end loading -->

                    <div class="card-header">
                        <h5 class="card-title">table</h5>
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body text-dark">
                        <div id="table_div" class="text-dark"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- toast  -->
    <div aria-live="polite" aria-atomic="true" class="position-fixed bottom-5 right-5 p-5 m-3" style="z-index: 5; right: 5px; bottom: 5px;">
        <div class="toast text-white bg-success border-0" data-delay="5000" style="position: absolute; bottom: 0; right: 0;">
            <div class="toast-header">
                <i class="fa-solid fa-bell"></i>
                <strong class="mr-auto"> IoTkiddie</strong>
                <!-- <small>now</small> -->
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                <p id="toast-body"></p>
            </div>
        </div>
    </div>

</section>


<!-- for rename var -->
<div class="modal fade" id="editvarname" tabindex="-1" aria-labelledby="edit-device-name" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form id="edit-var-form" method="post" action="ajax/07value32.php">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit-var-name">แก้ไขชื่อ Parameter</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <?php for ($var = 0; $var < 32; $var++) : ?>
                                <div class="form-group var_<?= $var; ?>_class col-md-4">
                                    <label for="var-name-<?= $var; ?>" class="col-form-label">Parameter <?= $var; ?></label>
                                    <input type="text" class="form-control" id="var-name-<?= $var; ?>" name="var-name-<?= $var; ?>" value="Var<?= $var ?>">
                                </div>
                            <?php endfor; ?>
                            <input type="hidden" name="id" value="<?= $_GET['id'] ?>">
                            <input type="hidden" name="skey" value="<?= $_SESSION['skey'] ?>" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="text-align: right">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                    <button type="submit" class="btn btn-primary">ตกลง</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- for color var -->
<div class="modal fade" id="editvarcolor" tabindex="-1" aria-labelledby="edit-device-name" aria-hidden="true">


    <link rel="stylesheet" type="text/css" href="includes/dist/js/coloris.min.css">
    <script type="text/javascript" src="includes/dist/js/coloris.min.js"></script>

    <style type="text/css">
        .coloris-select {
            flex-shrink: 0;
            width: 300px;
            margin-bottom: 30px;
        }

        .clr-picker {
            z-index: 2000;
        }
    </style>



    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form id="edit-color-form" method="post" action="ajax/07value32.php?action=savecolor">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit-var-color">แก้ไขชื่อ Parameter</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="var-color-select" data-toggle="tooltip" title="ค่าที่ต้องการ">Parameter</label>
                                        <select class="form-control" name="var-color-select" id="var-color-select">
                                            <?php for ($var = 0; $var < 32; $var++) : ?>
                                                <option value="<?= $var ?>" id="var-color-<?= $var ?>">Var <?= $var ?></option>
                                            <?php endfor; ?>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="var-color-condition" data-toggle="tooltip" title="เงื่อนไขที่ต้องการ">Parameter</label>
                                        <select class="form-control" id="var-color-condition" name="var-color-condition">
                                            <option value="H">มากกว่า</option>
                                            <option value="L">น้อยกว่า</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="var-color-value">ค่าที่ต้องการ</label>
                                            <input type="number" step="any" class="form-control form-control-border" name="var-color-value" />
                                        </div>
                                    </div>

                                    <div class="col coloris-select">
                                        <label for="var-color-color">สี</label>
                                        <div class="clr-field" style="color: rgb(89, 145, 138);"><button type="button" aria-labelledby="clr-open-label"></button>
                                            <input id="var-color-color" name="var-color-color" type="text" value="green" data-coloris="">
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <input type="hidden" name="id" value="<?= $_GET['id'] ?>">
                            <input type="hidden" name="skey" value="<?= $_SESSION['skey'] ?>" />
                        </div>
                    </div>
                    <div class="div" style="text-align: right">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                        <button type="submit" class="btn btn-primary">เพิ่ม</button>
                    </div>

                    <!-- <div class="modal-footer"> -->
                    <hr class="mb-3">
                    <h3>แจ้งเตือนสี</h3>
                    <table class="table table-hover table-striped text-center text-light" id="color_table" style="width:100%">
                        <thead>
                            <tr>
                                <th scope="col">Paremeter</th>
                                <th scope="col">Condition</th>
                                <th scope="col">Color</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <!-- </div> -->

            </form>

            <script type="text/javascript">
                /** Default configuration **/

                Coloris({
                    el: '.coloris',
                    swatches: [
                        '#264653',
                        '#2a9d8f',
                        '#e9c46a',
                        '#f4a261',
                        '#e76f51',
                        '#d62828',
                        '#023e8a',
                        '#0077b6',
                        '#0096c7',
                        '#00b4d8',
                        '#48cae4'
                    ]
                });

                /** Instances **/

                Coloris.setInstance('.instance1', {
                    theme: 'pill',
                    themeMode: 'dark',
                    formatToggle: true,
                    closeButton: true,
                    clearButton: true,
                    swatches: [
                        '#067bc2',
                        '#84bcda',
                        '#80e377',
                        '#ecc30b',
                        '#f37748',
                        '#d56062'
                    ]
                });

                Coloris.setInstance('.instance2', {
                    theme: 'polaroid'
                });

                Coloris.setInstance('.instance3', {
                    theme: 'polaroid',
                    swatchesOnly: true
                });
            </script>

        </div>
    </div>
</div>

<!-- script for real time chart -->
<script>
    var p_id = 7;
    var esp_id = <?= $_REQUEST['id'] ?>;
    var sk = '<?= $_SESSION['skey']; ?>';
    $("#dashboard-tab").remove();
</script>
<script type="text/javascript" src="js/07value32.js?n=8"></script>
<script type="text/javascript" src="js/line-timer.js?n=1"></script>