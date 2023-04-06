<?php


require($_SERVER['DOCUMENT_ROOT'] . '/includes/init.php');


$esp_id = 0;
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&  strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    if (!empty($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST'] . "/dashboard") && isset($_REQUEST['id'])) {

        // >>>> Security check
        if (empty($_SESSION['skey']) || empty($_REQUEST['skey']) || ($_SESSION['skey'] != $_REQUEST['skey'])) {
            Auth::block();
        } else {
            // echo "AJAX request";
            $esp_id = $_REQUEST['id'];
        }
    } else {
        Auth::block();
    }
} else {
    Auth::block();
}


if ($esp_id) {
    try {
        if (isset($_REQUEST['point'])) {
            if (isset($_REQUEST['data']) && $_REQUEST['data'] == "sec") {
                $results = Data_7_sec::getLastMulti($esp_id, $_REQUEST['point']);
                $db = new Database();
                $conn = $db->getConn();
                $lastupdate = Esp_ID::getByESPID($conn, $esp_id)->lastupdate;

                if ($_REQUEST['point'] == 200 || isset($_REQUEST['getlabel'])) {
                    $sec = new Data_7_sec($esp_id);
                    $label = $sec->getLabel();
                }
            } else if (isset($_REQUEST['data']) && $_REQUEST['data'] == "min") {
                $results = Data_7_min::getLastMulti($esp_id, $_REQUEST['point']);
            } else if (isset($_REQUEST['data']) && $_REQUEST['data'] == "hr") {
                $results = Data_7_hr::getLastMulti($esp_id, $_REQUEST['point']);
            } else { // get day data
            }
        } else if (isset($_REQUEST['range'])) {
            if (isset($_REQUEST['data']) && $_REQUEST['data'] == "sec") {
                $results = Data_7_sec::getRange($esp_id, $_REQUEST['range']['start'], $_REQUEST['range']['end']);
            } else if (isset($_REQUEST['data']) && $_REQUEST['data'] == "min") {
                $results = Data_7_min::getRange($esp_id, $_REQUEST['range']['start'], $_REQUEST['range']['end']);
            } else if (isset($_REQUEST['data']) && $_REQUEST['data'] == "hr") {
                $results = Data_7_hr::getRange($esp_id, $_REQUEST['range']['start'], $_REQUEST['range']['end']);
            } else if (isset($_REQUEST['data']) && $_REQUEST['data'] == "day") {
                $results = Data_7_day::getRange($esp_id, $_REQUEST['range']['start'], $_REQUEST['range']['end']);
            }
        } else if (isset($_REQUEST['var-name-0'])) {
            // die($_REQUEST['var-name-0']);
            $var = [];
            // foreach ($_REQUEST as $key => $value) {
            if (isset($_REQUEST['var-name-0'])) $var["c0"] = $_REQUEST['var-name-0'];
            if (isset($_REQUEST['var-name-1'])) $var["c1"] = $_REQUEST['var-name-1'];
            if (isset($_REQUEST['var-name-2'])) $var["c2"] = $_REQUEST['var-name-2'];
            if (isset($_REQUEST['var-name-3'])) $var["c3"] = $_REQUEST['var-name-3'];
            if (isset($_REQUEST['var-name-4'])) $var["c4"] = $_REQUEST['var-name-4'];
            if (isset($_REQUEST['var-name-5'])) $var["c5"] = $_REQUEST['var-name-5'];
            if (isset($_REQUEST['var-name-6'])) $var["c6"] = $_REQUEST['var-name-6'];
            if (isset($_REQUEST['var-name-7'])) $var["c7"] = $_REQUEST['var-name-7'];
            if (isset($_REQUEST['var-name-8'])) $var["c8"] = $_REQUEST['var-name-8'];
            if (isset($_REQUEST['var-name-9'])) $var["c9"] = $_REQUEST['var-name-9'];
            if (isset($_REQUEST['var-name-10'])) $var["c10"] = $_REQUEST['var-name-10'];
            if (isset($_REQUEST['var-name-11'])) $var["c11"] = $_REQUEST['var-name-11'];
            if (isset($_REQUEST['var-name-12'])) $var["c12"] = $_REQUEST['var-name-12'];
            if (isset($_REQUEST['var-name-13'])) $var["c13"] = $_REQUEST['var-name-13'];
            if (isset($_REQUEST['var-name-14'])) $var["c14"] = $_REQUEST['var-name-14'];
            if (isset($_REQUEST['var-name-15'])) $var["c15"] = $_REQUEST['var-name-15'];
            if (isset($_REQUEST['var-name-16'])) $var["c16"] = $_REQUEST['var-name-16'];
            if (isset($_REQUEST['var-name-17'])) $var["c17"] = $_REQUEST['var-name-17'];
            if (isset($_REQUEST['var-name-18'])) $var["c18"] = $_REQUEST['var-name-18'];
            if (isset($_REQUEST['var-name-19'])) $var["c19"] = $_REQUEST['var-name-19'];
            if (isset($_REQUEST['var-name-20'])) $var["c20"] = $_REQUEST['var-name-20'];
            if (isset($_REQUEST['var-name-21'])) $var["c21"] = $_REQUEST['var-name-21'];
            if (isset($_REQUEST['var-name-22'])) $var["c22"] = $_REQUEST['var-name-22'];
            if (isset($_REQUEST['var-name-23'])) $var["c23"] = $_REQUEST['var-name-23'];
            if (isset($_REQUEST['var-name-24'])) $var["c24"] = $_REQUEST['var-name-24'];
            if (isset($_REQUEST['var-name-25'])) $var["c25"] = $_REQUEST['var-name-25'];
            if (isset($_REQUEST['var-name-26'])) $var["c26"] = $_REQUEST['var-name-26'];
            if (isset($_REQUEST['var-name-27'])) $var["c27"] = $_REQUEST['var-name-27'];
            if (isset($_REQUEST['var-name-28'])) $var["c28"] = $_REQUEST['var-name-28'];
            if (isset($_REQUEST['var-name-29'])) $var["c29"] = $_REQUEST['var-name-29'];
            if (isset($_REQUEST['var-name-30'])) $var["c30"] = $_REQUEST['var-name-30'];
            if (isset($_REQUEST['var-name-31'])) $var["c31"] = $_REQUEST['var-name-31'];
            // }

            // print_r($var);
            // echo(json_encode($var));

            $data = new Data_7_sec($esp_id);
            echo $data->insertLabel(json_encode($var));

            exit;
        } else if (isset($_GET["action"])) {

                $data = new Data_7_sec($esp_id);
                $oldColor = json_decode(($data->getColor())['data'], true);

            if ($_GET['action'] == "savecolor") {
                // var_dump($_POST);

                $newColor = [["param" => $_POST['var-color-select'], "condition" => $_POST['var-color-condition'], "value" => $_POST['var-color-value'], "color" => $_POST['var-color-color']]];

                if ($oldColor) {
                    $newColor = array_merge($newColor, $oldColor);
                }

                usort($newColor, function ($a, $b) {
                    return $a['param'] <=> $b['param'];
                });

                echo $data->insertColor(json_encode($newColor));
            } else if ($_GET['action'] == 'getcolor') {

                $data = [];
                if ($oldColor) {
                    foreach ($oldColor as $color) {
                        $data[] = [$color['param'], $color['condition'], $color['value'], $color['color']];
                    }
                }
                $result = ["data" => $data];
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
                exit;
            } else if ($_GET['action'] == 'del') {

                foreach ($oldColor as $key => $value) {
                    if ($value["param"] == $_REQUEST["delparam"] && $value["value"] == $_REQUEST["delvalue"]) {
                        unset($oldColor[$key]);
                    }
                }
                usort($oldColor, function ($a, $b) {
                    return $a['param'] <=> $b['param'];
                });

                echo $data->insertColor(json_encode($oldColor));
            }
        }
    } catch (Throwable $e) {
        die("nodata");
    }
}

if (isset($results)) {
    $var0 = [];
    $var1 = [];
    $var2 = [];
    $var3 = [];
    $var4 = [];
    $var5 = [];
    $var6 = [];
    $var7 = [];
    $var8 = [];
    $var9 = [];
    $var10 = [];
    $var11 = [];
    $var12 = [];
    $var13 = [];
    $var14 = [];
    $var15 = [];
    $var16 = [];
    $var17 = [];
    $var18 = [];
    $var19 = [];
    $var20 = [];
    $var21 = [];
    $var22 = [];
    $var23 = [];
    $var24 = [];
    $var25 = [];
    $var26 = [];
    $var27 = [];
    $var28 = [];
    $var29 = [];
    $var30 = [];
    $var31 = [];
    $time = [];
    foreach ($results as $result) {
        $var0[] = number_format((float)$result['c0'], 1, '.', '');
        $var1[] = number_format((float)$result['c1'], 1, '.', '');
        $var2[] = number_format((float)$result['c2'], 1, '.', '');
        $var3[] = number_format((float)$result['c3'], 1, '.', '');
        $var4[] = number_format((float)$result['c4'], 1, '.', '');
        $var5[] = number_format((float)$result['c5'], 1, '.', '');
        $var6[] = number_format((float)$result['c6'], 1, '.', '');
        $var7[] = number_format((float)$result['c7'], 1, '.', '');
        $var8[] = number_format((float)$result['c8'], 1, '.', '');
        $var9[] = number_format((float)$result['c9'], 1, '.', '');
        $var10[] = number_format((float)$result['c10'], 1, '.', '');
        $var11[] = number_format((float)$result['c11'], 1, '.', '');
        $var12[] = number_format((float)$result['c12'], 1, '.', '');
        $var13[] = number_format((float)$result['c13'], 1, '.', '');
        $var14[] = number_format((float)$result['c14'], 1, '.', '');
        $var15[] = number_format((float)$result['c15'], 1, '.', '');
        $var16[] = number_format((float)$result['c16'], 1, '.', '');
        $var17[] = number_format((float)$result['c17'], 1, '.', '');
        $var18[] = number_format((float)$result['c18'], 1, '.', '');
        $var19[] = number_format((float)$result['c19'], 1, '.', '');
        $var20[] = number_format((float)$result['c20'], 1, '.', '');
        $var21[] = number_format((float)$result['c21'], 1, '.', '');
        $var22[] = number_format((float)$result['c22'], 1, '.', '');
        $var23[] = number_format((float)$result['c23'], 1, '.', '');
        $var24[] = number_format((float)$result['c24'], 1, '.', '');
        $var25[] = number_format((float)$result['c25'], 1, '.', '');
        $var26[] = number_format((float)$result['c26'], 1, '.', '');
        $var27[] = number_format((float)$result['c27'], 1, '.', '');
        $var28[] = number_format((float)$result['c28'], 1, '.', '');
        $var29[] = number_format((float)$result['c29'], 1, '.', '');
        $var30[] = number_format((float)$result['c30'], 1, '.', '');
        $var31[] = number_format((float)$result['c31'], 1, '.', '');
        $time[] = $result['time'];
    }
    $data = array(
        "var0" => $var0, "var1" => $var1, "var2" => $var2, "var3" => $var3, "var4" => $var4, "var5" => $var5, "var6" => $var6, "var7" => $var7, "var8" => $var8, "var9" => $var9,
        "var10" => $var10, "var11" => $var11, "var12" => $var12, "var13" => $var13, "var14" => $var14, "var15" => $var15, "var16" => $var16, "var17" => $var17, "var18" => $var18, "var19" => $var19,
        "var20" => $var20, "var21" => $var21, "var22" => $var22, "var23" => $var23, "var24" => $var24, "var25" => $var25, "var26" => $var26, "var27" => $var27, "var28" => $var28, "var29" => $var29,
        "var30" => $var30, "var31" => $var31, "time" => $time
    );
    if (isset($lastupdate) && !is_null($lastupdate)) {
        $data += ["lastupdate" => $lastupdate];
    }
    if (isset($label['label'])) {
        $data += ["label" => $label['label']];
    }
    // var_dump(json_encode($data));
    echo json_encode($data);
    // echo json_encode($_REQUEST);
}
