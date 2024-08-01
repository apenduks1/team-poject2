const modal = document.getElementById('footerModals');
const btnFooter = document.getElementById('footerBtn');
const span = document.getElementById('footer_modal__cross');
const emailInput = document.getElementById('emailInput');

btnFooter.addEventListener('click', (e) => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Будь ласка, введіть коректну email адресу.");
        return;
    }

    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
})

span.addEventListener('click', (e) => {
    modal.style.opacity = '0';
})

window.addEventListener('click', (e) => {
    if (event.target == modal) {
        modal.style.opacity = '0';
    }
}); 
