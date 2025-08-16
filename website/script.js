document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = 1;
    }, 300);
});

document.querySelectorAll('.link-anim').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.background = 'rgba(58,123,213,0.08)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.background = 'none';
    });
});

