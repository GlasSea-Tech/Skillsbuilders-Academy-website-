
// Select all navbar links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
  });
});

    AOS.init({
      duration: 1000,
      once: true,
    });
  