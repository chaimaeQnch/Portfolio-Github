const elements = [
    { bg: document.querySelector('.projet1'), titre: document.querySelector('.prj1') },
    { bg: document.querySelector('.projet2'), titre: document.querySelector('.prj2') },
    { bg: document.querySelector('.projet3'), titre: document.querySelector('.prj3') },
    { bg: document.querySelector('.projet4'), titre: document.querySelector('.prj4') }
];

elements.forEach(function(element) {
    element.bg.addEventListener('mouseover', function() {
        element.titre.style.color = '#f82a35';  
    });

    element.bg.addEventListener('mouseout', function() {
        element.titre.style.color = ''; 
    });
});
