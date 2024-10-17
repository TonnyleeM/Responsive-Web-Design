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
            if (scrollPosition >= section.offsetTop - 150 && scrollPosition < (section.offsetTop + section.offsetHeight - 150)) {
                const currentId = section.attributes.id.value;
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
        document.querySelector(selector).classList.add('active');
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted!');
        console.log('Name:', this.name.value);
        console.log('Email:', this.email.value);
        console.log('Message:', this.message.value);
        
        // Clear the form
        this.reset();
        
        // Show a success message (you can style this in your CSS)
        alert('Thank you for your message! I will get back to you soon.');
    });

    // Add a simple animation to skill items
    const skillItems = document.querySelectorAll('#skills-list li');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
