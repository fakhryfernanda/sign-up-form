const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector('button');

// Suppressing the Default Bubbles
inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
    });

    input.addEventListener('input', () => {
        if (input.checkValidity()) {input.style.borderColor = 'black'};
    });
});

// Styling Validation
button.addEventListener('click', () => {
    for (input of inputs) {
        if (!input.checkValidity()) {
            input.style.borderColor = 'red';
            input.focus();
            break;
        };

        if (input.checkValidity()) {
            input.style.borderColor = 'black';
        };
    };
});

// Check Password Match
form.addEventListener('submit', (e) => {
    if (confirmPassword.value !== password.value) {
        e.preventDefault();
        confirmPassword.style.borderColor = 'red';
    } else {
        confirmPassword.style.borderColor = 'black';
    };
});

