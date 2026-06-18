// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "rgba(15,23,42,0.95)";
}
else{
navbar.style.background = "rgba(255,255,255,0.08)";
}

});

// Smooth Reveal Animation

const cards = document.querySelectorAll(
'.card, .book-card, .feature, .testimonial'
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}

});

});

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "0.6s ease";

observer.observe(card);

});