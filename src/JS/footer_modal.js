    const modal = document.getElementById('footerModals');
    const btn = document.getElementById('footerBtn"');
    const span = document.getElementById('footer_modal__cross');

    btn.addEventListener('click', (e) => {
        modal.style.opacity = '1';
    })

    span.addEventListener('click', (e) => {
        modal.style.opacity = '0';
    })

    window.addEventListener('click', (e) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }); 