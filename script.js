// YouTube API setup
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-video', {
        videoId: 'KsA2R40f2_Q',
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            playlist: 'KsA2R40f2_Q'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.setVolume(30); // Adjust volume if necessary
}

// Cursor heart effect
document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.getElementById('cursor-effect-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Page navigation with fade effect
function navigateToPage(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});
