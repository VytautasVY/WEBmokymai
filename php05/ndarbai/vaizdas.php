<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mokausi PHP</title>
</head>
<body>
    <h3>Mano namų darbai:</h3>
    <ul>
        <?php foreach($namuDarbai as $namuDarbas) : ?>
            <li>
                <?php if($namuDarbas->atlikta) : ?>
                    <del><?php echo $namuDarbas->aprasas; ?></del>
                    <?php else : ?><?php echo $namuDarbas->aprasas; ?>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>