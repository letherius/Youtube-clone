// Sample video data 
const videos = [
    { id: 'VIDEO_ID_1', title: 'Video Title 1', thumbnail: 'life.png', youtubeUrl: 'https://www.youtube.com/watch?v=50AuGVOupv4' },
    { id: 'VIDEO_ID_2', title: 'Video Title 2', thumbnail: 'secrets.png', youtubeUrl: 'https://www.youtube.com/watch?v=PJc_iEkcnFo' },
    { id: 'VIDEO_ID_3', title: 'Video Title 3', thumbnail: 'lofi.png', youtubeUrl: 'https://www.youtube.com/watch?v=hIOGis3oIvA' },
    { id: 'VIDEO_ID_4', title: 'Video Title 4', thumbnail: 'AI.png', youtubeUrl: 'https://www.youtube.com/watch?v=YN9x04rhm7c' },
    { id: 'VIDEO_ID_5', title: 'Video Title 5', thumbnail: 'nature.png', youtubeUrl: 'https://www.youtube.com/watch?v=_Uqo79t5olk' },
    { id: 'VIDEO_ID_6', title: 'Video Title 6', thumbnail: 'thai.png', youtubeUrl: 'https://www.youtube.com/watch?v=RoP3Zqfw3iw' },
];

// Function to play a video
function playVideo(videoId) {
    const videoPlayer = document.getElementById('videoPlayer');
    const selectedVideo = videos.find(video => video.id === videoId);
    if (selectedVideo) {
        const youtubeVideoId = extractYouTubeVideoId(selectedVideo.youtubeUrl);
        videoPlayer.src = `https://www.youtube.com/embed/${youtubeVideoId}`;
    }
}

// Extract YouTube video ID from URL
function extractYouTubeVideoId(url) {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
}

// Populate video list
const videoList = document.querySelector('.video-list');
videos.forEach(video => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('video-thumbnail');
    thumbnailDiv.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}">
        <p>${video.title}</p>
    `;
    thumbnailDiv.onclick = () => playVideo(video.id);
    videoList.appendChild(thumbnailDiv);
});

// Function to search videos using YouTube Data API
function searchVideos() {
    const searchInput = document.getElementById('searchInput').value;
    // Make an API request to search for videos based on the searchInput
    // You can use the YouTube Data API here
    // Update the video list accordingly
    console.log(`Searching for: ${searchInput}`);
}