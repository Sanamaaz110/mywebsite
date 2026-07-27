// Mobile Menu Toggle Script
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('active');
});

// Close menu automatically when a link is clicked
const menuLinks = document.querySelectorAll('.dropdown-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
    });
});
