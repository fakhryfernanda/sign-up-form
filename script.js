const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

// Suppressing the Default Bubbles
inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
    });
});

// Styling Validation
button.addEventListener('click', () => {
    for (input of inputs) {
        if (!input.checkValidity()) {
            input.style.borderColor = 'red';
            input.focus();
            break;
        } else {
            input.style.borderColor = 'black';
        };
    };
});