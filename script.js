document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    const headerTitle = document.querySelector('.header-title');
    
    function updateScrollProgress() {
        // Calculate how far the user has scrolled
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        // Update the width of the progress bar
        progressBar.style.width = scrollPercentage + '%';
        
        // Shrink and align the header title based on scroll position
        if (scrollTop > 50) {
            headerTitle.classList.add('scrolled');
        } else {
            headerTitle.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initialize on page load
    updateScrollProgress();
});
