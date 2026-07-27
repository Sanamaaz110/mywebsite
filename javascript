// JavaScript Code for Mobile Menu Dropdown Toggle

// 1. Elements ko select karna
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// 2. Button par click event lagana
menuBtn.addEventListener('click', function() {
    // Dropdown menu par 'active' class toggle hogi (show/hide hoga)
    dropdownMenu.classList.toggle('active');
});
