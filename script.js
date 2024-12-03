// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation items when scrolling
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute('id');
                removeAllActiveClasses();
                addActiveClass(currentId);
            }
        });
    });

    function removeAllActiveClasses() {
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('active');
        });
    }

    function addActiveClass(id) {
        const selector = `#navbar a[href="#${id}"]`;
        const activeLink = document.querySelector(selector);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Form submission handling with basic client-side validation
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        // In a real-world scenario, you would send this data to a backend
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        // Clear the form
        this.reset();
        
        // Show a success message
        alert('Thank you for your message! I will get back to you soon.');
    });

    // Add subtle animation to skill items
    const skillItems = document.querySelectorAll('#skills-list li');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#2980b9';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#3498db';
        });
    });
});
