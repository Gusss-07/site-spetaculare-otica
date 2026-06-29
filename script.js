// Remove comportamentos indesejados e garante estabilidade do layout no touch
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carrosselTrack');
    
    if (track) {
        // Garante que o carrossel inicie perfeitamente alinhado no primeiro item (index 0)
        track.parentElement.scrollLeft = 0;
    }
});