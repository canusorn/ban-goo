 <?php

    if (isset($_POST['id'])) {
        $thisID = $_POST['id'];
    } else {
        $thisID = $_GET['id'];
    }

    if (isset($_POST['skey'])) {
        $thisSKEY = $_POST['skey'];
    } else {
        $thisSKEY = $_SESSION['skey'];
    }

    ?>


 <!-- Main content -->
 <section class="content">
     <div class="container-fluid text-right">
         <div class="row">
             <div class="col-md-4"></div>
             <div class="col">
                 <div class="card">
                     <div class="card-body">
                         <div class="container">
                             <div class="col">
                                 <div class="row justify-content-end">
                                     <div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input pin-switch" id="output-D5"><label class="custom-control-label" for="output-D5">D5</label></div>
                                 </div>
                                 <div class="row justify-content-end">
                                     <p class="card-text"><span style="font-size: 2em; color:gray;"><i class="fa-regular fa-lightbulb mr-2"></i></span><B>D6</B></p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-0-label" class="card-title"></h5>
                         <p id="var-0-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-1-label" class="card-title"></h5>
                         <p id="var-1-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
         </div>
         <div class="row">
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-2-label" class="card-title"></h5>
                         <p id="var-2-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-3-label" class="card-title"></h5>
                         <p id="var-3-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-4-label" class="card-title"></h5>
                         <p id="var-4-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-5-label" class="card-title"></h5>
                         <p id="var-5-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
         </div>
         <div class="row">
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-6-label" class="card-title"></h5>
                         <p id="var-6-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-7-label" class="card-title"></h5>
                         <p id="var-7-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-8-label" class="card-title"></h5>
                         <p id="var-8-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <h5 id="var-9-label" class="card-title"></h5>
                         <p id="var-9-value" class="card-text h2"></p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>


 <script>
     var esp_id = <?= $thisID ?>;
     var sk = '<?= $thisSKEY; ?>';
 </script>

 <script src="js/dashboard.js"></script>