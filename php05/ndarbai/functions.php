<?php
    function dbJungtis() {
        try {
            return $pdo = new PDO('mysql:host=127.0.0.1; dbname=homework', 'root', 'root');
        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }

    function visosUzduotys($pdo) {
        $teiginys = $pdo->prepare('SELECT * from ndarbai');
        $teiginys->execute();

        return $teiginys->fetchAll(PDO::FETCH_CLASS, 'namuDarbas');
    }