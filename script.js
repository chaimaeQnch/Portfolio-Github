const typed = new Typed ('.multiple', {
    strings:['Frontend Developer', 'Backend Developer'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:600,
    loop: true
}); 

function toggleMenu() {
    const menu = document.getElementById('liens');
    menu.classList.toggle('show');
}


