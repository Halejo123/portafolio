document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});