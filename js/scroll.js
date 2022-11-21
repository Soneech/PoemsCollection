document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
    window.scrollTo({ 
        top: 0, behavior: 'smooth' 
    });
});