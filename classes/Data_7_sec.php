<?php

/**
 * SQLite Create Table Demo
 */
class Data_7_sec
{

    private $pdo;
    public $esp_id;
    public $c0;
    public $c1;
    public $c2;
    public $c3;
    public $c4;
    public $c5;
    public $c6;
    public $c7;
    public $c8;
    public $c9;
    public $c10;
    public $c11;
    public $c12;
    public $c13;
    public $c14;
    public $c15;
    public $c16;
    public $c17;
    public $c18;
    public $c19;
    public $c20;
    public $c21;
    public $c22;
    public $c23;
    public $c24;
    public $c25;
    public $c26;
    public $c27;
    public $c28;
    public $c29;
    public $c30;
    public $c31;
    public $time;

    public function __construct($esp_id)
    {
        $this->esp_id = $esp_id;
        $this->pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
    }

    public function createTables()
    {
        $commands = [
            'CREATE TABLE IF NOT EXISTS \'7_sec\'(
                                        c0	REAL,
                        	            c1	REAL,
	                                    c2	REAL,
	                                    c3	REAL,
	                                    c4	REAL,
	                                    c5	REAL,
	                                    c6	REAL,
	                                    c7	REAL,
	                                    c8	REAL,
	                                    c9	REAL,
                                        c10	REAL,
                        	            c11	REAL,
	                                    c12	REAL,
	                                    c13	REAL,
	                                    c14	REAL,
	                                    c15	REAL,
	                                    c16	REAL,
	                                    c17	REAL,
	                                    c18	REAL,
	                                    c19	REAL,
                                        c20	REAL,
                        	            c21	REAL,
	                                    c22	REAL,
	                                    c23	REAL,
	                                    c24	REAL,
	                                    c25	REAL,
	                                    c26	REAL,
	                                    c27	REAL,
	                                    c28	REAL,
	                                    c29	REAL,
	                                    c30	REAL,
	                                    c31	REAL,
	                                    time TEXT NOT NULL UNIQUE)',
            'CREATE INDEX IF NOT EXISTS time_index ON \'7_sec\' (time);'
        ];
        //var_dump($commands);

        // execute the sql commands to create new tables
        $error = [];
        foreach ($commands as $command) {
            if (!$this->pdo->exec($command)) {
                $error[] = 1;
            }
        }
        if (empty($error)) {
            return true;
        }
    }

    public function insert()
    {
        $sql = "INSERT INTO '7_sec' VALUES(:c0,:c1,:c2,:c3,:c4,:c5,:c6,:c7,:c8,:c9,:c10,:c11,:c12,:c13,:c14,:c15,:c16,:c17,:c18,:c19,:c20,:c21,:c22,:c23,:c24,:c25,:c26,:c27,:c28,:c29,:c30,:c31,:time)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':c0', $this->c0);
        $stmt->bindValue(':c1', $this->c1);
        $stmt->bindValue(':c2', $this->c2);
        $stmt->bindValue(':c3', $this->c3);
        $stmt->bindValue(':c4', $this->c4);
        $stmt->bindValue(':c5', $this->c5);
        $stmt->bindValue(':c6', $this->c6);
        $stmt->bindValue(':c7', $this->c7);
        $stmt->bindValue(':c8', $this->c8);
        $stmt->bindValue(':c9', $this->c9);
        $stmt->bindValue(':c10', $this->c10);
        $stmt->bindValue(':c11', $this->c11);
        $stmt->bindValue(':c12', $this->c12);
        $stmt->bindValue(':c13', $this->c13);
        $stmt->bindValue(':c14', $this->c14);
        $stmt->bindValue(':c15', $this->c15);
        $stmt->bindValue(':c16', $this->c16);
        $stmt->bindValue(':c17', $this->c17);
        $stmt->bindValue(':c18', $this->c18);
        $stmt->bindValue(':c19', $this->c19);
        $stmt->bindValue(':c20', $this->c20);
        $stmt->bindValue(':c21', $this->c21);
        $stmt->bindValue(':c22', $this->c22);
        $stmt->bindValue(':c23', $this->c23);
        $stmt->bindValue(':c24', $this->c24);
        $stmt->bindValue(':c25', $this->c25);
        $stmt->bindValue(':c26', $this->c26);
        $stmt->bindValue(':c27', $this->c27);
        $stmt->bindValue(':c28', $this->c28);
        $stmt->bindValue(':c29', $this->c29);
        $stmt->bindValue(':c30', $this->c30);
        $stmt->bindValue(':c31', $this->c31);
        $stmt->bindValue(':time', $this->time);

        if ($stmt->execute()) {
            return true;
        } else {
            return $stmt->errorInfo();
        }

        //$this->pdo->lastInsertId();
    }


    public static function getByESPID($pdo, $esp_id, $columns = '*')
    {
        $sql = "SELECT {$columns}
                FROM '7_sec'
                ORDER BY 'time' DESC;";
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $stmt = $pdo->query($sql);
        //var_dump($sql);
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public static function getLast($esp_id, $columns = '*')
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "SELECT $columns FROM '7_sec' ORDER BY time DESC LIMIT 1";
        $stmt = $pdo->prepare($sql);
        // $stmt->bindParam(':esp_id', $esp_id);
        if ($stmt->execute()) {
            $result = $stmt->fetch(\PDO::FETCH_ASSOC);
            return $result;
        }
    }

    public static function getLastMulti($esp_id, $limit = 10, $columns = '*')
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "SELECT $columns FROM '7_sec' ORDER BY time DESC LIMIT {$limit}";
        $stmt = $pdo->prepare($sql);
        //$stmt->bindValue(':esp_id', $esp_id);
        if ($stmt->execute()) {
            $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        }
    }

    public static function getAvMin($esp_id, $time)
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "SELECT printf('%.1f',avg(c0)),printf('%.1f',avg(c1)),printf('%.1f',avg(c2)),printf('%.1f',avg(c3)),printf('%.1f',avg(c4)),printf('%.1f',avg(c5)),printf('%.1f',avg(c6)),printf('%.1f',avg(c7)),printf('%.1f',avg(c8)),printf('%.1f',avg(c9)),
                        printf('%.1f',avg(c10)),printf('%.1f',avg(c11)),printf('%.1f',avg(c12)),printf('%.1f',avg(c13)),printf('%.1f',avg(c14)),printf('%.1f',avg(c15)),printf('%.1f',avg(c16)),printf('%.1f',avg(c17)),printf('%.1f',avg(c18)),printf('%.1f',avg(c19)),
                        printf('%.1f',avg(c20)),printf('%.1f',avg(c21)),printf('%.1f',avg(c22)),printf('%.1f',avg(c23)),printf('%.1f',avg(c24)),printf('%.1f',avg(c25)),printf('%.1f',avg(c26)),printf('%.1f',avg(c27)),printf('%.1f',avg(c28)),printf('%.1f',avg(c29)),
                        printf('%.1f',avg(c30)),printf('%.1f',avg(c31))
                FROM '7_sec' 
                WHERE time LIKE '{$time}%';";
        //var_dump($sql);
        $stmt = $pdo->prepare($sql);
        //$stmt->bindValue(':esp_id', $esp_id);
        if ($stmt->execute()) {
            $result = $stmt->fetch();
            // var_dump($result);
            return $result;
        }
    }

    public static function getRange($esp_id, $start, $end, $columns = '*')
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "SELECT $columns FROM '7_sec' 
        WHERE datetime(time) 
        BETWEEN datetime('{$start}') AND datetime('{$end}')
        ORDER BY time DESC";
        $stmt = $pdo->prepare($sql);
        //$stmt->bindValue(':esp_id', $esp_id);
        if ($stmt->execute()) {
            $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        }
    }

    public static function deleteOldData($esp_id)
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "DELETE FROM '7_sec' 
        WHERE date(time) <= date('now', '-" . SECDATALIMIT . " days')";
        
        $stmt = $pdo->prepare($sql);
        
        return $stmt->execute();
    }


    // for json file
    public function creatTableVarLabel()
    {
        $commands = [
            'CREATE TABLE IF NOT EXISTS \'7_json\'(
            label	TEXT,
            time TEXT  DEFAULT CURRENT_TIMESTAMP)'
        ];
        //var_dump($commands);

        // execute the sql commands to create new tables
        $error = [];
        foreach ($commands as $command) {
            if (!$this->pdo->exec($command)) {
                $error[] = 1;
            }
        }
        if (empty($error)) {
            return true;
        }
    }

    public function getLabel()
    {
        $this->creatTableVarLabel();

        $sql = "SELECT * FROM '7_json'
                ORDER BY time DESC";

        $stmt = $this->pdo->prepare($sql);
        
        if ($stmt->execute()) {
            $result = $stmt->fetch(\PDO::FETCH_ASSOC);
            return $result;
        }
    }

    public function insertLabel($json)
    {
        $this->creatTableVarLabel();

        $sql = "INSERT INTO '7_json' (label)
                VALUES(:json)";

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':json', $json);

        if ($stmt->execute()) {
            return true;
        } else {
            return $stmt->errorInfo();
        }

    }


    // for json file
    public function creatTableColor()
    {
        $commands = [
            'CREATE TABLE IF NOT EXISTS \'7_color\'(
                                            data	TEXT,
            time TEXT  DEFAULT CURRENT_TIMESTAMP)'
        ];
        
        $error = [];
        foreach ($commands as $command) {
            if (!$this->pdo->exec($command)) {
                $error[] = 1;
            }
        }
        if (empty($error)) {
            return true;
        }
    }


    public function insertColor($json)
    {
        $this->creatTableColor();

        $sql = "INSERT INTO '7_color' (data)
                VALUES(:json)";

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':json', $json);

        if ($stmt->execute()) {
            return true;
        } else {
            return $stmt->errorInfo();
        }

    }

    public function getColor()
    {
        $this->creatTableColor();

        $sql = "SELECT * FROM '7_color'
                ORDER BY time DESC";

        $stmt = $this->pdo->prepare($sql);
        
        if ($stmt->execute()) {
            $result = $stmt->fetch(\PDO::FETCH_ASSOC);
            return $result;
        }
    }
}
