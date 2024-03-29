<?php

$needsecupdate = false;

$data_sec = new Data_7_sec($_POST['esp_id']);
$data_sec->time = $dateTime->format('Y-m-d H:i:s');

if (isset($data['c0']) || isset($data['c1']) || isset($data['c2']) || isset($data['c3']) || isset($data['c4']) || isset($data['c5']) || isset($data['c6']) || isset($data['c7']) || isset($data['c8']) || isset($data['c9'])) {
    $needsecupdate = true;
    if (isset($data['c0'])) $data_sec->c0 = $data['c0'];
    if (isset($data['c1'])) $data_sec->c1 = $data['c1'];
    if (isset($data['c2'])) $data_sec->c2 = $data['c2'];
    if (isset($data['c3'])) $data_sec->c3 = $data['c3'];
    if (isset($data['c4'])) $data_sec->c4 = $data['c4'];
    if (isset($data['c5'])) $data_sec->c5 = $data['c5'];
    if (isset($data['c6'])) $data_sec->c6 = $data['c6'];
    if (isset($data['c7'])) $data_sec->c7 = $data['c7'];
    if (isset($data['c8'])) $data_sec->c8 = $data['c8'];
    if (isset($data['c9'])) $data_sec->c9 = $data['c9'];
    if (isset($data['c10'])) $data_sec->c10 = $data['c10'];
    if (isset($data['c11'])) $data_sec->c11 = $data['c11'];
    if (isset($data['c12'])) $data_sec->c12 = $data['c12'];
    if (isset($data['c13'])) $data_sec->c13 = $data['c13'];
    if (isset($data['c14'])) $data_sec->c14 = $data['c14'];
    if (isset($data['c15'])) $data_sec->c15 = $data['c15'];
    if (isset($data['c16'])) $data_sec->c16 = $data['c16'];
    if (isset($data['c17'])) $data_sec->c17 = $data['c17'];
    if (isset($data['c18'])) $data_sec->c18 = $data['c18'];
    if (isset($data['c19'])) $data_sec->c19 = $data['c19'];
    if (isset($data['c20'])) $data_sec->c20 = $data['c20'];
    if (isset($data['c21'])) $data_sec->c21 = $data['c21'];
    if (isset($data['c22'])) $data_sec->c22 = $data['c22'];
    if (isset($data['c23'])) $data_sec->c23 = $data['c23'];
    if (isset($data['c24'])) $data_sec->c24 = $data['c24'];
    if (isset($data['c25'])) $data_sec->c25 = $data['c25'];
    if (isset($data['c26'])) $data_sec->c26 = $data['c26'];
    if (isset($data['c27'])) $data_sec->c27 = $data['c27'];
    if (isset($data['c28'])) $data_sec->c28 = $data['c28'];
    if (isset($data['c29'])) $data_sec->c29 = $data['c29'];
    if (isset($data['c30'])) $data_sec->c30 = $data['c30'];
    if (isset($data['c31'])) $data_sec->c31 = $data['c31'];

    $data_sec->createTables();
}

// check last value
try {
    $lastData = Data_7_sec::getLast($_POST['esp_id']);
} catch (Throwable | Exception $e) {
    $lastData = null;
}

if (!is_null($lastData))
    $lastdatetime = new DateTime($lastData['time']);

if ($needsecupdate) {
    if (($re = $data_sec->insert()) === true) {
        $payload["status"]["sec"] = 'new sec data';
    } else {
        $payload["error"][] = '[7value32 sec], ' .  $data_sec->time . ', error:' . json_encode($re);
    }
}

// // check min diff
if (!is_null($lastData))
    $interval_min = strtotime($dateTime->format('Y-m-d H:i')) - strtotime($lastdatetime->format('Y-m-d H:i'));  //now-lastdata (in min)
else $interval_min = 0;

if ($interval_min && $needsecupdate) {
    $data_min = new Data_7_min($_POST['esp_id']);
    $data_min->createTables();

    $data_sec_av = Data_7_sec::getAvMin($data_sec->esp_id, $lastdatetime->format('Y-m-d H:i'));
    // var_dump($data_sec_av);
    if (!is_null($data_sec_av[0])) {
        $data_min->time = $lastdatetime->format('Y-m-d H:i');

        if (isset($data_sec_av[0])) $data_min->c0 = $data_sec_av[0];
        if (isset($data_sec_av[1])) $data_min->c1 = $data_sec_av[1];
        if (isset($data_sec_av[2])) $data_min->c2 = $data_sec_av[2];
        if (isset($data_sec_av[3])) $data_min->c3 = $data_sec_av[3];
        if (isset($data_sec_av[4])) $data_min->c4 = $data_sec_av[4];
        if (isset($data_sec_av[5])) $data_min->c5 = $data_sec_av[5];
        if (isset($data_sec_av[6])) $data_min->c6 = $data_sec_av[6];
        if (isset($data_sec_av[7])) $data_min->c7 = $data_sec_av[7];
        if (isset($data_sec_av[8])) $data_min->c8 = $data_sec_av[8];
        if (isset($data_sec_av[9])) $data_min->c9 = $data_sec_av[9];
        if (isset($data_sec_av[10])) $data_min->c10 = $data_sec_av[10];
        if (isset($data_sec_av[11])) $data_min->c11 = $data_sec_av[11];
        if (isset($data_sec_av[12])) $data_min->c12 = $data_sec_av[12];
        if (isset($data_sec_av[13])) $data_min->c13 = $data_sec_av[13];
        if (isset($data_sec_av[14])) $data_min->c14 = $data_sec_av[14];
        if (isset($data_sec_av[15])) $data_min->c15 = $data_sec_av[15];
        if (isset($data_sec_av[16])) $data_min->c16 = $data_sec_av[16];
        if (isset($data_sec_av[17])) $data_min->c17 = $data_sec_av[17];
        if (isset($data_sec_av[18])) $data_min->c18 = $data_sec_av[18];
        if (isset($data_sec_av[19])) $data_min->c19 = $data_sec_av[19];
        if (isset($data_sec_av[20])) $data_min->c20 = $data_sec_av[20];
        if (isset($data_sec_av[21])) $data_min->c21 = $data_sec_av[21];
        if (isset($data_sec_av[22])) $data_min->c22 = $data_sec_av[22];
        if (isset($data_sec_av[23])) $data_min->c23 = $data_sec_av[23];
        if (isset($data_sec_av[24])) $data_min->c24 = $data_sec_av[24];
        if (isset($data_sec_av[25])) $data_min->c25 = $data_sec_av[25];
        if (isset($data_sec_av[26])) $data_min->c26 = $data_sec_av[26];
        if (isset($data_sec_av[27])) $data_min->c27 = $data_sec_av[27];
        if (isset($data_sec_av[28])) $data_min->c28 = $data_sec_av[28];
        if (isset($data_sec_av[29])) $data_min->c29 = $data_sec_av[29];
        if (isset($data_sec_av[30])) $data_min->c30 = $data_sec_av[30];
        if (isset($data_sec_av[31])) $data_min->c31 = $data_sec_av[31];

        if (($re = $data_min->insert()) === true) {
            $payload["status"]["min"] = 'new min data';
        } else {
            $payload["error"][] = '[7value32 min], ' .  $data_min->time . ', error:' . json_encode($re);
        }
    }

    $interval_hour = strtotime($dateTime->format('Y-m-d H:00')) - strtotime($lastdatetime->format('Y-m-d H:00'));
    // var_dump($interval_hour);
    if ($interval_hour) {

        $data_hr = new Data_7_hr($_POST['esp_id']);
        $data_hr->createTables();

        $data_min_av = Data_7_min::getAvHr($data_sec->esp_id, $lastdatetime->format('Y-m-d H'));
        // var_dump($data_min_av);
        if (!is_null($data_min_av[0])) {
            $data_hr->time = $lastdatetime->format('Y-m-d H:00');

            if (isset($data_min_av[0])) $data_hr->c0 = $data_min_av[0];
            if (isset($data_min_av[1])) $data_hr->c1 = $data_min_av[1];
            if (isset($data_min_av[2])) $data_hr->c2 = $data_min_av[2];
            if (isset($data_min_av[3])) $data_hr->c3 = $data_min_av[3];
            if (isset($data_min_av[4])) $data_hr->c4 = $data_min_av[4];
            if (isset($data_min_av[5])) $data_hr->c5 = $data_min_av[5];
            if (isset($data_min_av[6])) $data_hr->c6 = $data_min_av[6];
            if (isset($data_min_av[7])) $data_hr->c7 = $data_min_av[7];
            if (isset($data_min_av[8])) $data_hr->c8 = $data_min_av[8];
            if (isset($data_min_av[9])) $data_hr->c9 = $data_min_av[9];
            if (isset($data_min_av[10])) $data_hr->c10 = $data_min_av[10];
            if (isset($data_min_av[11])) $data_hr->c11 = $data_min_av[11];
            if (isset($data_min_av[12])) $data_hr->c12 = $data_min_av[12];
            if (isset($data_min_av[13])) $data_hr->c13 = $data_min_av[13];
            if (isset($data_min_av[14])) $data_hr->c14 = $data_min_av[14];
            if (isset($data_min_av[15])) $data_hr->c15 = $data_min_av[15];
            if (isset($data_min_av[16])) $data_hr->c16 = $data_min_av[16];
            if (isset($data_min_av[17])) $data_hr->c17 = $data_min_av[17];
            if (isset($data_min_av[18])) $data_hr->c18 = $data_min_av[18];
            if (isset($data_min_av[19])) $data_hr->c19 = $data_min_av[19];
            if (isset($data_min_av[20])) $data_hr->c20 = $data_min_av[20];
            if (isset($data_min_av[21])) $data_hr->c21 = $data_min_av[21];
            if (isset($data_min_av[22])) $data_hr->c22 = $data_min_av[22];
            if (isset($data_min_av[23])) $data_hr->c23 = $data_min_av[23];
            if (isset($data_min_av[24])) $data_hr->c24 = $data_min_av[24];
            if (isset($data_min_av[25])) $data_hr->c25 = $data_min_av[25];
            if (isset($data_min_av[26])) $data_hr->c26 = $data_min_av[26];
            if (isset($data_min_av[27])) $data_hr->c27 = $data_min_av[27];
            if (isset($data_min_av[28])) $data_hr->c28 = $data_min_av[28];
            if (isset($data_min_av[29])) $data_hr->c29 = $data_min_av[29];
            if (isset($data_min_av[30])) $data_hr->c30 = $data_min_av[30];
            if (isset($data_min_av[31])) $data_hr->c31 = $data_min_av[31];

            if (($re = $data_hr->insert()) === true) {
                $payload["status"]["hr"] = 'new hr data';
            } else {
                $payload["error"][] = '[7value32 hr], ' .  $data_hr->time . ', error:' . json_encode($re);
            }
        }

        // check last day value
        try {
            $lastDays = Data_7_day::getLast($data_sec->esp_id);
        } catch (Throwable | Exception $e) {
            $lastDays = null;
        }

        if (!is_null($lastDays)) {
            $lastDays = new DateTime($lastDays['time']);
            // $interval_day = strtotime($dateTime->format('Y-m-d')) - strtotime($lastDays->format('Y-m-d'));
            $interval_day = date_diff($dateTime, $lastDays)->days;
        } else {
            $interval_day = strtotime($dateTime->format('Y-m-d')) - strtotime($lastdatetime->format('Y-m-d'));
            // if ($interval_day) $interval_day = 2;
        }

        // $interval_day = strtotime($dateTime->format('Y-m-d')) - strtotime($lastdatetime->format('Y-m-d'));
        // var_dump($interval_day);
        if ($interval_day >= 2 && !is_null($lastDays)) {

            $data_day = new Data_7_day($_POST['esp_id']);
            $data_day->createTables();


            for ($i = 1; $i < $interval_day; $i++) {

                $this_day = new DateTime($lastDays->format('Y-m-d') . '+' . $i . ' days');

                $data_hr_av = Data_7_hr::getAvDay($data_sec->esp_id, $this_day->format('Y-m-d'));

                if (!is_null($data_hr_av[0])) {

                    $data_day->time = $this_day->format('Y-m-d');
                    if (isset($data_hr_av[0])) $data_day->c0 = $data_hr_av[0];
                    if (isset($data_hr_av[1])) $data_day->c1 = $data_hr_av[1];
                    if (isset($data_hr_av[2])) $data_day->c2 = $data_hr_av[2];
                    if (isset($data_hr_av[3])) $data_day->c3 = $data_hr_av[3];
                    if (isset($data_hr_av[4])) $data_day->c4 = $data_hr_av[4];
                    if (isset($data_hr_av[5])) $data_day->c5 = $data_hr_av[5];
                    if (isset($data_hr_av[6])) $data_day->c6 = $data_hr_av[6];
                    if (isset($data_hr_av[7])) $data_day->c7 = $data_hr_av[7];
                    if (isset($data_hr_av[8])) $data_day->c8 = $data_hr_av[8];
                    if (isset($data_hr_av[9])) $data_day->c9 = $data_hr_av[9];
                    if (isset($data_hr_av[10])) $data_day->c10 = $data_hr_av[10];
                    if (isset($data_hr_av[11])) $data_day->c11 = $data_hr_av[11];
                    if (isset($data_hr_av[12])) $data_day->c12 = $data_hr_av[12];
                    if (isset($data_hr_av[13])) $data_day->c13 = $data_hr_av[13];
                    if (isset($data_hr_av[14])) $data_day->c14 = $data_hr_av[14];
                    if (isset($data_hr_av[15])) $data_day->c15 = $data_hr_av[15];
                    if (isset($data_hr_av[16])) $data_day->c16 = $data_hr_av[16];
                    if (isset($data_hr_av[17])) $data_day->c17 = $data_hr_av[17];
                    if (isset($data_hr_av[18])) $data_day->c18 = $data_hr_av[18];
                    if (isset($data_hr_av[19])) $data_day->c19 = $data_hr_av[19];
                    if (isset($data_hr_av[20])) $data_day->c20 = $data_hr_av[20];
                    if (isset($data_hr_av[21])) $data_day->c21 = $data_hr_av[21];
                    if (isset($data_hr_av[22])) $data_day->c22 = $data_hr_av[22];
                    if (isset($data_hr_av[23])) $data_day->c23 = $data_hr_av[23];
                    if (isset($data_hr_av[24])) $data_day->c24 = $data_hr_av[24];
                    if (isset($data_hr_av[25])) $data_day->c25 = $data_hr_av[25];
                    if (isset($data_hr_av[26])) $data_day->c26 = $data_hr_av[26];
                    if (isset($data_hr_av[27])) $data_day->c27 = $data_hr_av[27];
                    if (isset($data_hr_av[28])) $data_day->c28 = $data_hr_av[28];
                    if (isset($data_hr_av[29])) $data_day->c29 = $data_hr_av[29];
                    if (isset($data_hr_av[30])) $data_day->c30 = $data_hr_av[30];
                    if (isset($data_hr_av[31])) $data_day->c31 = $data_hr_av[31];

                    if (($re = $data_day->insert()) === true) {
                        $payload["status"]["day"] = 'new day data';
                    } else {
                        $payload["error"][] = '[7value32 day], ' . $data_day->time . ', error:' . json_encode($re);
                    }
                }
            }
        } elseif ($interval_day && is_null($lastDays)) {
            $data_day = new Data_7_day($_POST['esp_id']);
            $data_day->createTables();

            $data_hr_av = Data_7_hr::getAvDay($data_sec->esp_id, $lastdatetime->format('Y-m-d'));

            if (!is_null($data_hr_av[0])) {

                $data_day->time = $lastdatetime->format('Y-m-d');
                if (isset($data_hr_av[0])) $data_day->c0 = $data_hr_av[0];
                if (isset($data_hr_av[1])) $data_day->c1 = $data_hr_av[1];
                if (isset($data_hr_av[2])) $data_day->c2 = $data_hr_av[2];
                if (isset($data_hr_av[3])) $data_day->c3 = $data_hr_av[3];
                if (isset($data_hr_av[4])) $data_day->c4 = $data_hr_av[4];
                if (isset($data_hr_av[5])) $data_day->c5 = $data_hr_av[5];
                if (isset($data_hr_av[6])) $data_day->c6 = $data_hr_av[6];
                if (isset($data_hr_av[7])) $data_day->c7 = $data_hr_av[7];
                if (isset($data_hr_av[8])) $data_day->c8 = $data_hr_av[8];
                if (isset($data_hr_av[9])) $data_day->c9 = $data_hr_av[9];
                if (isset($data_hr_av[10])) $data_day->c10 = $data_hr_av[10];
                if (isset($data_hr_av[11])) $data_day->c11 = $data_hr_av[11];
                if (isset($data_hr_av[12])) $data_day->c12 = $data_hr_av[12];
                if (isset($data_hr_av[13])) $data_day->c13 = $data_hr_av[13];
                if (isset($data_hr_av[14])) $data_day->c14 = $data_hr_av[14];
                if (isset($data_hr_av[15])) $data_day->c15 = $data_hr_av[15];
                if (isset($data_hr_av[16])) $data_day->c16 = $data_hr_av[16];
                if (isset($data_hr_av[17])) $data_day->c17 = $data_hr_av[17];
                if (isset($data_hr_av[18])) $data_day->c18 = $data_hr_av[18];
                if (isset($data_hr_av[19])) $data_day->c19 = $data_hr_av[19];
                if (isset($data_hr_av[20])) $data_day->c20 = $data_hr_av[20];
                if (isset($data_hr_av[21])) $data_day->c21 = $data_hr_av[21];
                if (isset($data_hr_av[22])) $data_day->c22 = $data_hr_av[22];
                if (isset($data_hr_av[23])) $data_day->c23 = $data_hr_av[23];
                if (isset($data_hr_av[24])) $data_day->c24 = $data_hr_av[24];
                if (isset($data_hr_av[25])) $data_day->c25 = $data_hr_av[25];
                if (isset($data_hr_av[26])) $data_day->c26 = $data_hr_av[26];
                if (isset($data_hr_av[27])) $data_day->c27 = $data_hr_av[27];
                if (isset($data_hr_av[28])) $data_day->c28 = $data_hr_av[28];
                if (isset($data_hr_av[29])) $data_day->c29 = $data_hr_av[29];
                if (isset($data_hr_av[30])) $data_day->c30 = $data_hr_av[30];
                if (isset($data_hr_av[31])) $data_day->c31 = $data_hr_av[31];

                if (($re = $data_day->insert()) === true) {
                    $payload["status"]["day"] = 'new day data';
                } else {
                    $payload["error"][] = '[7value32 day], ' . $data_day->time . ', error:' . json_encode($re);
                }
            }
        }

        if (
            ($interval_day && is_null($lastDays)) ||
            ($interval_day >= 2 && !is_null($lastDays))
        ) {

            $line_token = Linenotify::getAll($data_sec->esp_id, 7);
            if (isset($line_token['line_token']) && $line_token['daily_notify'] &&  $payload["status"]["sec"] == 'new sec data' &&  $payload["status"]["day"] == 'new day data') {
                $line_sent[] = [0, $data_day->c0, $data_day->c1, $data_day->c2, $data_day->c3, $data_day->c4, $data_day->c5, $data_day->c6, $data_day->c7, $data_day->c8, $data_day->c9, $data_sec->esp_id, $line_token['line_token']];
                $line_sent_status .= "project 7 line in condition \n";
            }

            // detele old data
            Data_7_sec::deleteOldData($data_sec->esp_id);
            Data_7_min::deleteOldData($data_sec->esp_id);
            Data_7_hr::deleteOldData($data_sec->esp_id);
            Data_7_day::deleteOldData($data_sec->esp_id);
        }
    }
}