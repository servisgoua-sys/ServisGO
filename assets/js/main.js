// ServisGO - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');

    if (navToggle && navMenu && navClose) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation and submission
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Basic validation
            const requiredFields = ['name', 'email', 'subject', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    input.addEventListener('input', function() {
                        this.style.borderColor = '';
                    });
                }
            });
            
            if (!isValid) {
                showNotification('Будь ласка, заповніть всі обов\'язкові поля', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                showNotification('Будь ласка, введіть коректну email адресу', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Відправляємо...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Повідомлення успішно відправлено! Ми зв\'яжемося з вами найближчим часом.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification__content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
            }
            .notification__message {
                flex: 1;
            }
            .notification__close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background-color 0.2s;
            }
            .notification__close:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature__card, .service__card, .service-category, .benefit, .mission-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const isPercentage = finalNumber.includes('%');
                const isPlus = finalNumber.includes('+');
                const isSlash = finalNumber.includes('/');
                
                let numericValue;
                if (isSlash) {
                    numericValue = 24; // For 24/7
                } else {
                    numericValue = parseInt(finalNumber.replace(/\D/g, ''));
                }
                
                animateCounter(target, 0, numericValue, 2000, isPercentage, isPlus, isSlash);
                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, start, end, duration, isPercentage, isPlus, isSlash) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            
            let displayValue = current.toString();
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            if (isSlash) displayValue = '24/7';
            
            element.textContent = displayValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // Initially hide answers
            answer.style.display = 'none';
            
            question.style.cursor = 'pointer';
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('p');
                    if (otherAnswer) {
                        otherAnswer.style.display = 'none';
                    }
                });
                
                // Toggle current item
                answer.style.display = isOpen ? 'none' : 'block';
            });
        }
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Service category filtering (if needed)
    const serviceFilters = document.querySelectorAll('.service-filter');
    if (serviceFilters.length > 0) {
        serviceFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                const category = this.dataset.category;
                const serviceCards = document.querySelectorAll('.service__card');
                
                serviceCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Update active filter
                serviceFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Search functionality (if search input exists)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const serviceCards = document.querySelectorAll('.service__card');
            
            serviceCards.forEach(card => {
                const title = card.querySelector('.service__title').textContent.toLowerCase();
                const description = card.querySelector('.service__description').textContent.toLowerCase();
                
                if (title.includes(query) || description.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Initialize tooltips (if using a tooltip library)
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            
            setTimeout(() => tooltip.style.opacity = '1', 10);
            
            this.addEventListener('mouseleave', function() {
                tooltip.remove();
            });
        });
    });

    console.log('ServisGO website loaded successfully!');
});
