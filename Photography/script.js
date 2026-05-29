// Navbar Scroll Effect

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');
  
    if(window.scrollY > 50){
        header.style.background = '#000';
    }
  
    else{
        header.style.background = 'rgba(0,0,0,0.7)';
    }
  
  });
  
  // Contact Form
  
  const form = document.querySelector('.contact-form');
  
  form.addEventListener('submit', (e) => {
  
    e.preventDefault();
  
    alert('Thank You! Your message has been sent.');
  
    form.reset();
  
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });