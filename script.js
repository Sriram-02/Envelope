document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    const headerTitle = document.querySelector('.header-title');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const body = document.body;
    
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
        // Function to open the sidebar
    
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        body.classList.add('sidebar-open');
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        body.classList.remove('sidebar-open');
    }

    // Event listeners for opening and closing the sidebar
    sidebarToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
    
    // Initialize on page load
    updateScrollProgress();
});
