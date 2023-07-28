<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- php 07 -->
<ul>
    
<?php

$cities4 = ['Tokijas', 'Vašingtonas', 'Maskva', 'Londonas'];


for ($i = 0; $i < count($cities4); $i++) {
    echo "<li>".$cities4[$i]."</li>";
}
?>
</ul>

<ul>
<?php foreach ($cities4 as $city) {
    echo "<li>".$city ."</li>";
}
?>
</ul>

</body>
</html>

<!-- PHP 08 -->
<?php
$temp = [4, 3, 9, 19, 19, 9, 12, 20, 24, 20, 12, 14, 18, 21, 20, 23, 16, 16, 15, 19, 19, 17, 17, 15, 12, 13, 13, 15, 19, 21];

$totalTemperatures = count($temp);
$sumTemperatures = array_sum($temp);
$averageTemperature = $sumTemperatures / $totalTemperatures;
$averageTemperature = round($averageTemperature, 2);

sort($temp);

$salciausiaTemp = array_slice($temp, 0, 5);

rsort($temp);

$silciausiaTemp = array_slice($temp, 0, 5);

echo "Vidutine temp: " . $averageTemperature . "°C<br>";
echo "Penkios salciausios temp: ";
foreach ($salciausiaTemp as $temperature) {
    echo $temperature . "°C. ";
}
echo "<br>";

echo "Penkios silciausios temp: ";
foreach ($silciausiaTemp as $temperature) {
    echo $temperature . "°C. ";
}
echo "<br>";
?>

<!-- PHP 9 -->

<?php

$ceu = array(
    "Italija" => "Roma",
    "Liuksemburgas" => "Liuksemburgas",
    "Belgija" => "Briuselis",
    "Danija" => "Kopenhaga",
    "Suomija" => "Helsinkis",
    "Prancuzija" => "Paryzius",
    "Slovakija" => "Bratislava",
    "Slovenija" => "Liublijana",
    "Vokietija" => "Berlynas",
    "Graikija" => "Athenai",
    "Airija" => "Dublinas",
    "Nyderlandai" => "Amsterdamas",
    "Portugalija" => "Lisabona",
    "Ispanija" => "Madridas",
    "Svedija" => "Stokholmas",
    "Didzioji Britanija" => "Londonas",
    "Kipras" => "Nikosija",
    "Lietuva" => "Vilnius",
    "Cekija" => "Praha",
    "Estija" => "Talinas",
    "Vengrija" => "Budapeshtas",
    "Latvija" => "Ryga",
    "Malta" => "Valeta",
    "Austrija" => "Viena",
    "Bulgarija" => "Sofija",
    "Rumunija" => "Bukareshtas",
    "Lenkija" => "Varsuva"
);

asort($ceu);
foreach ($ceu as $valstybe => $sostine) {
    echo "Valstybe: $valstybe, Sostine: $sostine<br>";
}
?>




