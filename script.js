var wrapper = document.querySelector('.wrapper');
var but = document.querySelector('.but');
var iconclose = document.querySelector('.icon-close');

but.addEventListener('click', function () {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', function () {
    wrapper.classList.remove('active-popup');
});

