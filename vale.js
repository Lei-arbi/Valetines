// Music toggle
const music = document.getElementById('valentineMusic');
const toggle = document.getElementById('musicToggle');

// Attempt autoplay on page load
window.addEventListener('load', () => {
    music.play().catch(() => {
        console.log('Autoplay blocked, click the heart to play.');
    });
});

toggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggle.textContent = '❤';
    } else {
        music.pause();
        toggle.textContent = '♡';
    }
});
