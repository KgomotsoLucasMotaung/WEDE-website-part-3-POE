// JavaScript for form validation and submission

document.addEventListener('DOMContentLoaded', () => {
    // Enquiry form handling
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const phone = this.phone.value.trim();
            const service = this.service.value;
            const message = this.message.value.trim();
            const responseDiv = document.getElementById('response');

            // Basic validation
            if (!name || !email || !phone || !service || !message) {
                responseDiv.textContent = 'Please fill in all fields.';
                responseDiv.style.color = 'red';
                return;
            }

            // Simulate processing and response
            responseDiv.style.color = 'green';
            responseDiv.textContent = `Thank you, ${name}. Your enquiry about "${service}" has been received. We will contact you shortly.`;
            this.reset();
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const phone = this.phone.value.trim();
            const type = this.type.value;
            const message = this.message.value.trim();
            const responseDiv = document.getElementById('contactResponse');

            // Basic validation
            if (!name || !email || !phone || !type || !message) {
                responseDiv.textContent = 'Please fill in all fields.';
                responseDiv.style.color = 'red';
                return;
            }

            // Simulate sending email
            responseDiv.style.color = 'green';
            responseDiv.textContent = `Thank you, ${name}. Your message has been sent. We will get back to you soon.`;
            this.reset();
        });
    }
});
