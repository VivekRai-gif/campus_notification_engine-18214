document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Show landing page on first load
    const landingPage = document.getElementById('landing-page');
    const enterAppBtn = document.getElementById('enter-app-btn');

    // Remove the display none if you want to show it
    landingPage.style.display = 'flex';

    enterAppBtn.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 500);
    });

    // Sidebar navigation simulation
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked
            link.classList.add('active');
            
            // In a real app, this would switch views. 
            // Here we just animate the main content to simulate a refresh
            const mainContent = document.querySelector('.dashboard-grid');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 300);
        });
    });

    // Optional: Add some interactive hover effects with JS (like tilting cards)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
