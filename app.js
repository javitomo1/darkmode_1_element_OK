const botonDarkmode = document.getElementById("darkmode")
const texto = document.getElementById("dmode")

botonDarkmode.addEventListener('click', function(){
    texto.classList.toggle('dark')
})