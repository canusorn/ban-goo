<?php

/**
 * SQLite Create Table Demo
 */
class Data_0_sec
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
    public $time;

    public function __construct($esp_id)
    {
        $this->esp_id = $esp_id;
        $this->pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
    }

    public function createTables()
    {
        $commands = [
            'CREATE TABLE IF NOT EXISTS \'0_sec\'(
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
	                                    time TEXT NOT NULL UNIQUE)',
            'CREATE INDEX IF NOT EXISTS time_index ON \'0_sec\' (time);'
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
        $sql = "INSERT INTO '0_sec' VALUES(:c0,:c1,:c2,:c3,:c4,:c5,:c6,:c7,:c8,:c9,:time)";
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
                FROM '0_sec'
                ORDER BY 'time' DESC;";
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $stmt = $pdo->query($sql);
        //var_dump($sql);
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public static function getLast($esp_id, $columns = '*')
    {
        $pdo = new \PDO("sqlite:" . $_SERVER['DOCUMENT_ROOT'] . "/db/$esp_id.db");
        $sql = "SELECT $columns FROM '0_sec' ORDER BY time DESC LIMIT 1";
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
        $sql = "SELECT $columns FROM '0_sec' ORDER BY time DESC LIMIT {$limit}";
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
        $sql = "SELECT printf('%.1f',avg(c0)),printf('%.1f',avg(c1)),printf('%.1f',avg(c2)),printf('%.1f',avg(c3)),printf('%.1f',avg(c4)),printf('%.1f',avg(c5)),printf('%.1f',avg(c6)),printf('%.1f',avg(c7)),printf('%.1f',avg(c8)),printf('%.1f',avg(c9))
                FROM '0_sec' 
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
        $sql = "SELECT $columns FROM '0_sec' 
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
        $sql = "DELETE FROM '0_sec' 
        WHERE date(time) <= date('now', '-" . SECDATALIMIT . " days')";
        
        $stmt = $pdo->prepare($sql);
        
        return $stmt->execute();
    }


    // for json file
    public function creatTableVarLabel()
    {
        $commands = [
            'CREATE TABLE IF NOT EXISTS \'0_json\'(
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

        $sql = "SELECT * FROM '0_json'
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

        $sql = "INSERT INTO '0_json' (label)
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
            'CREATE TABLE IF NOT EXISTS \'0_color\'(
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

        $sql = "INSERT INTO '0_color' (data)
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

        $sql = "SELECT * FROM '0_color'
                ORDER BY time DESC";

        $stmt = $this->pdo->prepare($sql);
        
        if ($stmt->execute()) {
            $result = $stmt->fetch(\PDO::FETCH_ASSOC);
            return $result;
        }
    }
}
