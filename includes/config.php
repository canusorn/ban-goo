<?php

// local server
define('DB_HOST','localhost');
define('DB_NAME','bangooco_iot');
define('DB_USER','root');
define('DB_PASS','');

// define('DB_HOST','localhost');
// define('DB_NAME','bangooco_iot');
// define('DB_USER','bangooco_db');
// define('DB_PASS','123456789');

// allow no authen espid which not regis before to use
define('ALLOWNEWESPID',true);

define('SECDATALIMIT',2);   //sec data limit in day
define('MINDATALIMIT',15);   //minute data limit in day
define('HRDATALIMIT',3);   //hr data limit in mounths
define('DAYDATALIMIT',4);   //day data limit in years
