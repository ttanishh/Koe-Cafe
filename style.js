var navbar = document.getElementById("navbarr");
var menuu = document.getElementById("menuu");

window.addEventListener('scroll', function() {
    if(window.scrollY >= menuu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
});
