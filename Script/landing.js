const trailerLinks = document.querySelectorAll('.trailer-link');

trailerLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.querySelector(this.getAttribute('href'));
        const video = modal.querySelector('video');
        modal.style.display = "flex";
        video.play();

        // Request fullscreen
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (document.fullscreenElement) {
            // Exit fullscreen if in fullscreen mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        } else {
            // Close the modal if not in fullscreen
            const openModal = document.querySelector('.modal[style*="flex"]');
            if (openModal) {
                closeModal(openModal);
            }
        }
    }
});

function closeModal(modal) {
    const video = modal.querySelector('video');
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;

    // Exit fullscreen
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}
