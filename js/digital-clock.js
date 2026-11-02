function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const session = hours >= 12 ? 'PM' : 'AM';

    // Apply leading zeros
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Update the DOM
    document.getElementById('clock-face').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${session}`;
    document.getElementById('calendar-date').innerHTML = now.toLocaleDateString();
}

setInterval(updateClock, 1000);