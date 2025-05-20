const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click',() =>{
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach(link =>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove('active');
        navLinks.classList.remove('active');
    });

});


