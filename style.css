// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Auto-Select Package from Pricing Table to Booking Form
function selectPackage(packageName) {
    const packageDropdown = document.getElementById('package');
    for (let i = 0; i < packageDropdown.options.length; i++) {
        // Automatically selects Basic, Standard, or Premium based on user click
        if (packageDropdown.options[i].text.toLowerCase().includes(packageName.toLowerCase())) {
            packageDropdown.selectedIndex = i;
            break;
        }
    }
}

// WhatsApp Booking Form Submission Logic
function submitToWhatsApp(event) {
    event.preventDefault(); // Prevents page reload

    // Fetch values input by the user
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const bike = document.getElementById('bike').value.trim();
    const pkg = document.getElementById('package').value;

    if(!name || !phone || !bike || !pkg) {
        alert("Please fill all the fields before submitting.");
        return;
    }

    // Format the message for WhatsApp (Line breaks handled via %0A)
    const message = `*NEW BOOKING - HA PPF ON BIKE*%0A%0A*Client Name:* ${name}%0A*Contact:* ${phone}%0A*Bike Make/Model:* ${bike}%0A*Selected Quality:* ${pkg}%0A%0A_Please confirm my slot for the Full Bike PPF installation._`;

    // Target WhatsApp Number (Pakistan code 92)
    const whatsappNumber = "923452268329";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in a new tab/app
    window.open(whatsappURL, '_blank');

    // Redirect the current browser window to Thank You page
    window.location.href = 'thanks.html';
}
