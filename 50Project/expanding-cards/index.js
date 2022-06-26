const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function() {
        removeAddActive();
        this.classList.add('active');
    })
})

function removeAddActive() {
    items.forEach((item) => {
        item.classList.remove('active');
        
    })
}