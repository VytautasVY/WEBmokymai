<?php
    class Car {
        public $bakas;
        public function degaluKiekis($litrai) {
            $this -> bakas += $litrai;
            return $this;
        }
        public function atstumas($km) {
            $litrai = $km * 0.08;
            $this -> bakas -= $litrai;
            return $this;
        }
    }

    $bmw = new Car();

    $likutis = $bmw -> degaluKiekis(10) -> atstumas(40) -> bakas;
    echo 'Bake bus likę: ' . $likutis . ' L';
?>

<?php
$data1 = new DateTime();
$data2 = new DateTime();

$capetown = new DateTimeZone('Africa/Johannesburg');
$vilnius = new DateTimeZone('Europe/Vilnius');

$data1 -> setTimezone($capetown);
$data2 -> setTimezone($vilnius);

echo 'Laikas Keiptaune: ' . $data1 -> format('g:ia, l, F j, Y') . '<br>';
echo 'Laikas Vilniuje: ' . $data2 -> format('g:ia, l, F j, Y') . '<br>';
?>

<!-- PHP #13 -->

<?php
   class Person {
    public $vardas;
    public $pavarde;
    public function pasisveikinimas() {
        return "Sveiki, mano vardas yra $this->vardas $this->pavarde.";
    }
}

$person1 = new Person();
$person1->vardas = "Jonas";
$person1->pavarde = "Jonaitis";

$person2 = new Person();
$person2->vardas = "Petras";
$person2->pavarde = "Petraitis";

echo $person1->pasisveikinimas() . "<br>";
echo $person2->pasisveikinimas();

?>

<!-- PHP #14 -->

<?php

function displayCurrentYear() {
    $currentYear = date('Y');
    $webPageYear = 2015;
    
    if ($currentYear > $webPageYear) {
        echo "© $webPageYear-$currentYear";
    } else {
        echo "© $currentYear";
    }
}

?>

<?php
displayCurrentYear();
?>
