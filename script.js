// Mobile Navbar Toggle Menu
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle icon between hamburger and cross
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Dynamic WhatsApp Booking Handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop normal form submit

    // Collect data values from form fields
    const name = document.getElementById('name').value;
    const bike = document.getElementById('bike').value;
    const packageChoice = document.getElementById('package').value;
    
    // Store your direct Pakistani phone number string
    const phoneNumber = "923452268329";

    // Formulate clean, pre-filled WhatsApp message format
    const message = `Hello Apex PPF Lahore! I want to book a PPF slot.%0A%0A` + 
                    `*Name:* ${encodeURIComponent(name)}%0A` + 
                    `*Bike Model:* ${encodeURIComponent(bike)}%0A` + 
                    `*Selected Package:* ${encodeURIComponent(packageChoice)}`;

    // Build the finalized WhatsApp redirection link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect user to WhatsApp application directly
    window.open(whatsappUrl, '_blank');
});
