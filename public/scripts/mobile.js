const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-items a');

const toggleMobileMenu = () => {
  mobileMenuElement.classList.toggle('open');
};

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);

// Function to close the mobile menu
const closeMobileMenu = () => {
  mobileMenuElement.classList.remove('open');
};

// Add a click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});
