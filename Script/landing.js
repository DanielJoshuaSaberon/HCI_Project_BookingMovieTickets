// Trailer
const trailerLinks = document.querySelectorAll('.trailer-link');

trailerLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.querySelector(this.getAttribute('href'));
        const video = modal.querySelector('video');
        modal.style.display = "flex";
        video.play();
    });
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        const video = modal.querySelector('video');
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modal = event.target;
        const video = modal.querySelector('video');
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0; 
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="flex"]');
        if (openModal) {
            const video = openModal.querySelector('video');
            openModal.style.display = "none";
            video.pause();
            video.currentTime = 0;
        }
    }
});
