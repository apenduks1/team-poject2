const modalFooter = document.querySelector('.modal-js');
const btnFooter = document.getElementById('footerBtn');
const spanFooter = document.querySelector('.footer_modal__close');
const inputFooter = document.querySelector('.footer__email_type');
console.log(spanFooter);
console.log('modal', modalFooter);

btnFooter.addEventListener('click', () => {
    if (inputFooter.value !== '' && inputFooter.value.includes('@')) {
        modalFooter.classList.remove("is__hidden")
        document.body.style.overflow = 'hidden'
    } else {
        alert('Будь ласка, введіть коректну електронну пошту')
    }
})

spanFooter.addEventListener('click', () => {
    console.log('click');

    modalFooter.classList.add("is__hidden")
    document.body.style.overflow = 'visible'

})

window.addEventListener('click', (event) => {
    if (event.target == modalFooter) {
        modalFooter.classList.add("is__hidden")

    }
}); 
