function pourCoffee(x) {
    x.classList.toggle('bi-cup-hot')
}

function showHide() {
    let x = document.getElementById('hidden')
    if(x.style.display === 'block') {
        x.style.display = 'none'
    } else {
        x.style.display = 'block'
    }       
}

function swapContent() {
    let x = document.getElementById('tekstas')
    if(x.innerHTML === 'Labas vakaras') {
        x.innerHTML = 'Labas rytas'
    } else {
        x.innerHTML = 'Labas vakaras'
    }
}

function addClass() {
    let a = document.getElementById('manotekstas')
    a.classList.toggle('manostilius')
}