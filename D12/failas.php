<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $filename = 'text.txt';
        $file = fopen($filename, "r");

        $filesize = filesize($filename);
        $filetext = fread($file, $filesize);
        fclose($file);

        echo "Failo dyids: $filesize B";
        echo "<pre>$filetext</pre>";
    ?>
</body>
</html>
