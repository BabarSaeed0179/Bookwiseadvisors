// Mobile navigation controls.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

// Slow the decorative hero video slightly so its motion feels calmer.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.defaultPlaybackRate = 0.75;
  heroVideo.playbackRate = 0.75;
}

// Open or close the menu when the menu button is clicked.
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.menu-icon').textContent = isOpen ? '×' : '☰';
});

// Close the mobile menu after a visitor chooses a page section.
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('.menu-icon').textContent = '☰';
  });
});
