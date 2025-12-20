  const openLoginBtn = document.getElementById('openLogin');
        const openLoginHeroBtn = document.getElementById('openLoginHero');
        const closeModalBtn = document.getElementById('closeModal');
        const loginModal = document.getElementById('loginModal');
        const loginForm = document.getElementById('loginForm');
        
        // Open modal when login buttons are clicked
        openLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
        
        openLoginHeroBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
        
        // Close modal when X is clicked
        closeModalBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
        
        // Handle login form submission
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert
            alert(`Login attempt for: ${username}\n\nIn a real application, this would validate credentials and redirect to the main dashboard.`);
            
            // Reset form and close modal
            loginForm.reset();
            loginModal.style.display = 'none';
        });
        
        // Handle contact form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const contactName = document.getElementById('contactName').value;
            const contactEmail = document.getElementById('contactEmail').value;
            const contactCompany = document.getElementById('contactCompany').value;
            const contactMessage = document.getElementById('contactMessage').value;
            
            // Show success message
            alert(`Thank you ${contactName}! Your message has been sent successfully.\n\nOur team will contact you at ${contactEmail} within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add subtle animation to feature cards on scroll
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
        
        // Observe feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });