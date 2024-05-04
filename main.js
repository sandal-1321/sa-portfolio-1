let bar = document.getElementById('bars')

bar.addEventListener('click', () => {

    let ul = document.getElementById('nav-ul')
    let code = document.getElementById('cross')

    if (ul.style.display == 'flex' || ul.style.display == 'block') {
        ul.style.display = 'none';
        code.setAttribute('class', 'fa-solid fa-bars')
    }
    else {
        ul.style.display = 'block';
        code.setAttribute('class', 'fa-solid fa-xmark')
    }
})