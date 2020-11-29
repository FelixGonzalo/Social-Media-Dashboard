
// modo oscuro
const modo = document.querySelector('#darkMode-modo');
const checkbox = document.querySelector('#darkMode-checkbox')
checkbox.addEventListener('change', function(e){
    if (this.checked) {
        document.body.classList.toggle('modoOscuro')
        modo.innerHTML = 'Dark mode'
    } else {
        document.body.classList.remove('modoOscuro')
        modo.innerHTML = 'Light mode'
    }
})