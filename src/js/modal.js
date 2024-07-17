document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var saveModalBtn = document.getElementById('saveModalBtn');
    var userInput = document.getElementById('userInput');
    var userNameDisplay = document.getElementById('userName');
    
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }

    saveModalBtn.onclick = function() {
        var name = userInput.value.trim();
        if (name === "") {
            name = "User";
        }
        userNameDisplay.textContent = name;
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});