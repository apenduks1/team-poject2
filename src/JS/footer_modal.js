    const modal = document.getElementById('footerModals');
    const btnFooter = document.getElementById('footerBtn');
    const span = document.querySelector('.footer_modal__cross');

    btnFooter.addEventListener('click', (e) => {
      modal.classList.remove("is_hidden")
    })

    span.addEventListener('click', (e) => {
        modal.classList.add("is_hidden")
    })
    
    window.addEventListener('click', (e) => {
        if (event.target == modal) {
            modal.classList.add("is_hidden")

        }
    }); 
