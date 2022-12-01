document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        let element = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: element.offsetTop, behavior: 'smooth'
        });
    });
});

try {
    document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
        window.scrollTo({ 
            top: 0, behavior: 'smooth' 
        });
    });
} catch {};
