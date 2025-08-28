        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Testimonial Slider
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentTestimonial = index;
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showTestimonial(index);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        
        // Form Validation
        const appointmentForm = document.getElementById('appointmentForm');
        
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('fullName');
            const nameError = document.getElementById('nameError');
            
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate phone
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
            
            if (!phoneRegex.test(phoneInput.value)) {
                phoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
            }
            
            // Validate department
            const departmentInput = document.getElementById('department');
            const departmentError = document.getElementById('departmentError');
            
            if (departmentInput.value === '') {
                departmentError.style.display = 'block';
                isValid = false;
            } else {
                departmentError.style.display = 'none';
            }
            
            // Validate date
            const dateInput = document.getElementById('date');
            const dateError = document.getElementById('dateError');
            
            if (dateInput.value === '') {
                dateError.style.display = 'block';
                isValid = false;
            } else {
                dateError.style.display = 'none';
            }
            
            // If form is valid, show success message
            if (isValid) {
                const successMessage = document.getElementById('successMessage');
                const errorMessage = document.getElementById('errorMessage');
                
                // In a real application, you would send the form data to a server here
                // For this example, we'll just show a success message
                
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    appointmentForm.reset();
                    successMessage.style.display = 'none';
                }, 3000);
            } else {
                // Show error message if form is invalid
                document.getElementById('errorMessage').style.display = 'block';
            }
        });
        
        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIcon = darkModeToggle.querySelector('i');
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        }
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        });