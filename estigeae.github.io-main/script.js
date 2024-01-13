const video = document.querySelector('video');
const secondVideo = document.getElementById('second-video');
const canvas = document.getElementById('blur-canvas');
const ctx = canvas.getContext('2d');
const backgroundAudio = document.getElementById('background-audio');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

video.addEventListener('play', function() {
    function drawVideo() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawVideo);
    }
    drawVideo();
});

function startVideos() {
    video.play();
    secondVideo.play();
    backgroundAudio.play();
    video.style.display = 'block';
    secondVideo.style.display = 'block';
    backgroundAudio.style.display = 'block';
    document.body.removeAttribute('onclick');
}

function startAutoReload() {
    setTimeout(function(){
        while(1) location.reload(1);
    }, 500);
}