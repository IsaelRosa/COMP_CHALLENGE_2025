// Contador Regressivo
function updateCountdown() {
    const eventDate = new Date('2024-11-10').getTime();
    const agora = new Date().getTime();
    const distancia = eventDate - agora;

    document.getElementById('days').innerText = Math.floor(distancia / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((distancia % (1000 * 60)) / 1000);
}

updateCountdown(); // Adicione esta linha logo antes do setInterval
setInterval(updateCountdown, 1000);

// Formulário de Inscrição
document.getElementById('formInscricao').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inscrição enviada! Em breve entraremos em contato.');
    this.reset();
});