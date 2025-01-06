// Detectar el desplazamiento de la página para mostrar el widget de Discord
window.addEventListener('scroll', function () {
    let discordWidget = document.getElementById('discord-widget');
    if (window.scrollY > 200) { // Mostrar el widget después de que el usuario haya desplazado 200px
        discordWidget.style.bottom = '20px'; // Mostrar el widget en la parte inferior
    } else {
        discordWidget.style.bottom = '-100px'; // Ocultar el widget fuera de la pantalla
    }
});
