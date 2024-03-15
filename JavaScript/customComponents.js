
// ----- MODAL PERSONNALISE ----- 


const open = document.getElementById('openModal');
const modal_container = document.getElementById('modalContainer');
const close = document.getElementById('closeModal');

if (open != null && close != null) {
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });
};


// ----- ACCORDÉON - AVERTISSEMENT -----


var accordionItems = document.querySelectorAll('.warning-accordion');

accordionItems.forEach((item) => {
    const header = item.querySelector('.alert-danger');
    const content = item.querySelector('.warning-accordion-content');

    header.addEventListener('click', () => {
        content.classList.toggle('active');
    });
});
