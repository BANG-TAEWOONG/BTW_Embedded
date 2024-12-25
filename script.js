const video = document.getElementById("mainVideo");
const muteButton = document.getElementById("muteButton");
const header = document.querySelector('header');
const galleryContainer = document.querySelector('.gallery-container');

// 동영상이 로드된 후 2:24부터 재생
video.addEventListener("loadedmetadata", () => {
    video.currentTime = 144; // 2분 24초 = 144초
    video.play();
});

// 소리 제어 버튼 클릭 이벤트
muteButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "🔊"; // 소리 켜짐 아이콘
    } else {
        video.muted = true;
        muteButton.textContent = "🔈"; // 소리 꺼짐 아이콘
    }
});

// 페이지 새로고침 시 애니메이션 실행
window.addEventListener('load', () => {
    header.style.animation = 'fadeIn 1s ease-in forwards';
});

// 갤러리 최신순 정렬
const images = [
    { src: 'thumb6.jpg', title: '작품 6' },
    { src: 'thumb5.jpg', title: '작품 5' },
    { src: 'thumb4.jpg', title: '작품 4' },
    { src: 'thumb3.jpg', title: '작품 3' },
    { src: 'thumb2.jpg', title: '작품 2' },
    { src: 'thumb1.jpg', title: '작품 1' },
];

galleryContainer.innerHTML = images
    .map(
        (img) =>
            `<div class="gallery-item">
                <img src="${img.src}" alt="${img.title}">
             </div>`
    )
    .join('');