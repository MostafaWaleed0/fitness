/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('js-nav-menu'),
	navToggle = document.getElementById('js-nav-toggle'),
	navClose = document.getElementById('js-nav-close');
	
navToggle.addEventListener('click', () => {
	navMenu.setAttribute('data-visible', true);
});

// ===== MENU CLOSE =====
navClose.addEventListener('click', () => {
	navMenu.setAttribute('data-visible', false);
});
