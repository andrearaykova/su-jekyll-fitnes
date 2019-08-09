window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName('body')[0].classList.add('loaded');
});

if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}