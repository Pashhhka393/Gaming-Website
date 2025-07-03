const videos = [
    'videos/hero-1.mp4',
    'videos/hero-2.mp4',
    'videos/hero-3.mp4',
    'videos/hero-4.mp4'
]

const video = document.getElementById('videoPlayer');
let currentIndex = 0;

function playVideo(index) {
  video.src = videos[index];
  video.load();
  video.play();
}

playVideo(currentIndex);

video.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % videos.length;
  playVideo(currentIndex);
});