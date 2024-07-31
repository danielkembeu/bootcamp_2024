// Database;

const usersDatabase = [];


// Notifications containers;
const successContainer = document.getElementById('notification_success');
const errorContainer = document.getElementById('notification_error');

const successMessage = document.querySelector('notification_success notification_title');
const errorMessage = document.querySelector('notification_error notification_title');

// Register form.
const registerForm = document.getElementById('register_form');

const regUsername = document.getElementById('reg_username');
const regEmail = document.getElementById('email');
const regPassword = document.getElementById('create_password');
const confirmPassword = document.getElementById('confirm_password');

console.log({ errorContainer, successContainer })
console.log({
    regUsername, regEmail, regPassword, confirmPassword
})
function createNewUser() {
    if (regEmail.value !== "" || regPassword.value !== "") {
        errorMessage.lastElementChild.textContent = "Please fill all the fields properly !";
        errorMessage.lastElementChild.style.color = 'red';
        errorContainer.lastElementChild.style.display = 'visible';
    }
    console.log({
        regEmail,
        regUsername,
        regPassword,
        confirmPassword,
    });
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    createNewUser();
});
