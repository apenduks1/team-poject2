    const modalFooter = document.querySelector('.modal-js');
    const btnFooter = document.getElementById('footerBtn');
    const span = document.getElementById('.footer_modal__cross');
    console.log(btnFooter);
    console.log('modal',modalFooter);

    btnFooter.addEventListener('click', () => {
        console.log('click');
        modalFooter.classList.remove("is__hidden")
        document.body.style.overflow = 'hidden'
    })

    span.addEventListener('click', (e) => {
        modal.classList.add("is__hidden")
        document.body.style.overflow = 'visible'

    })
    
    // window.addEventListener('click', (e) => {
    //     if (event.target == modal) {
    //         modal.classList.add("is__hidden")

    //     }
    // }); 
