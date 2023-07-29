<?php
    require __DIR__ . '/../app/src/app.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baigiamasis projektas</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Poppins:wght@500;600;700&family=Volkhov:wght@700&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../app/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"/>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    </style>
    <script>
    function myFunction() {
            let x = document.getElementById("mMenu")
            if (x.style.display === "block") {
                x.style.display = "none"
            } else {
                x.style.display = "block"
            }
        }
    </script>
</head>

<body>
    <?php 
       include '../app/views/header.php';
       include '../app/views/content.php';
       include '../app/views/footer.php';       
    ?>

<script>
        Fancybox.bind('[data-fancybox="gallery"]', {});
</script>
<script>
    document.querySelectorAll(".carousel").forEach(carousel => {
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonsHtml = Array.from(items, () => {
            return `<span class="carousel__button"></span>`;
        });

        carousel.insertAdjacentHTML("beforeend", `<div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
        `);
        const buttons = carousel.querySelectorAll(".carousel__button");
        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                // un-select all items
                items.forEach(item => item.classList.remove("carousel__item--selected"));
                buttons.forEach(button => button.classList.remove("carousel__button--selected"));

                items[i].classList.add("carousel__item--selected");
                button.classList.add("carousel__button--selected");
            })
        });
    });
</script>

</body>

</html>