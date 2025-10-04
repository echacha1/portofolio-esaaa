// Smooth scroll animation for cards
document.addEventListener('DOMContentLoaded', function() {
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.card, .profile-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add click animation to tool badges
    const toolBadges = document.querySelectorAll('.tool-badge');
    toolBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 500);
        });
    });

    // Add hover effect to portfolio links
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Interactive profile image
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }

    // Add ripple effect to cards on click
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.1)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.left = e.offsetX - 50 + 'px';
            ripple.style.top = e.offsetY - 50 + 'px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add dynamic year badge update for "Freelancer" section
    const freelancerYearBadge = document.querySelector('.experience-card:first-child .year-badge');
    if (freelancerYearBadge && freelancerYearBadge.textContent.includes('now')) {
        const currentYear = new Date().getFullYear();
        freelancerYearBadge.textContent = `2021 - ${currentYear}`;
    }

    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                cards.forEach((card, index) => {
                    const speed = (index % 3 + 1) * 0.05;
                    card.style.transform = `translateY(${scrolled * speed}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add typing effect to profile intro (optional)
    const profileIntro = document.querySelector('.profile-intro p');
    if (profileIntro) {
        const originalText = profileIntro.innerHTML;
        let charIndex = 0;
        
        // Uncomment below to enable typing effect
        /*
        profileIntro.innerHTML = '';
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                profileIntro.innerHTML += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 30);
            }
        }
        
        setTimeout(typeWriter, 500);
        */
    }

    // Interest tags interaction
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.background = '#4a4a4a';
            this.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                this.style.background = '#2a2a2a';
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Language flags interaction
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });

    console.log('Portfolio website loaded successfully!');
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);