var goTopButton = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);


function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopButton.classList.add("go-top--show");
        goTopButton.addEventListener("click", goTop);
    } else {
        goTopButton.classList.remove("go-top--show");
        goTopButton.removeEventListener("click", goTop);
    }
}

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ 
            top: 0, behavior: 'smooth' 
        });
    }
}