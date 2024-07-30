// document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const saveModalBtn = document.getElementById('saveModalBtn');
    const userInput = document.getElementById('userInput');
    const userNameDisplay = document.getElementById('userName');
    
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }

    saveModalBtn.onclick = function() {
        const name = userInput.value.trim();
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
// });