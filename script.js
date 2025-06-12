document.addEventListener('DOMContentLoaded', function() {
    // Tutorial filtering (for tutorials page)
    const categoryButtons = document.querySelectorAll('.category');
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    
    if (categoryButtons.length > 0 && tutorialCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter tutorials
                if (category === 'all') {
                    tutorialCards.forEach(card => card.style.display = 'block');
                } else {
                    tutorialCards.forEach(card => {
                        if (card.getAttribute('data-category') === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Video modal functionality
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('youtubeVideo');
    const closeButton = document.querySelector('.close-button');
    const watchButtons = document.querySelectorAll('.watch-tutorial');
    const playButtons = document.querySelectorAll('.play-button');
    
    // Function to open modal with YouTube video
    function openVideoModal(videoId) {
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Close modal function
    function closeVideoModal() {
        videoFrame.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Add event listeners to watch buttons
    if (watchButtons.length > 0) {
        watchButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.tutorial-card');
                const videoId = card.getAttribute('data-video');
                openVideoModal(videoId);
            });
        });
    }
    
    // Add event listeners to play buttons in images
    if (playButtons.length > 0) {
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.tutorial-card');
                const videoId = card.getAttribute('data-video');
                openVideoModal(videoId);
            });
        });
    }
    
    // Close modal when clicking on close button
    if (closeButton) {
        closeButton.addEventListener('click', closeVideoModal);
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeVideoModal();
            }
        });
    }
});