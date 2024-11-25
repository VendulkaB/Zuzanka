const countdownElement = document.getElementById("countdown");
const eventDate = new Date("2024-12-14T15:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Za ${days} dní, ${hours} hodin, ${minutes} minut, ${seconds} sekund`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
