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
     <div class="container-fluid">
         <div class="row">
             <div class="col-6"></div>
             <div class="col-3">var1</div>
             <div class="col-3">var2</div>
         </div>
         <div class="row">
             <div class="col-3">var3</div>
             <div class="col-3">var4</div>
             <div class="col-3">var5</div>
             <div class="col-3">var6</div>
         </div>
         <div class="row">
             <div class="col-3">var7</div>
             <div class="col-3">var8</div>
             <div class="col-3">var9</div>
             <div class="col-3">var10</div>
         </div>
     </div>
 </section>


 <script>
     var esp_id = <?= $thisID ?>;
     var sk = '<?= $thisSKEY; ?>';
 </script>