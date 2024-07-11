document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('footer_modals');
    var btn = document.getElementById('footer__btn"');
    var span = document.getElementsByClassName('footer_modal__close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});