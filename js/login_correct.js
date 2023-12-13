document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.form-register__container form');

    forms.forEach(form => {
        const emailInput = form.querySelector('input[name="email"]');
        const passwordInput = form.querySelector('input[name="password"]');
        const errorMessages = form.querySelectorAll('.error-msg');

        form.addEventListener('submit', function (event) {
            let valid = true;

            if (!emailInput.value.trim()) {
                valid = false;
                errorMessages[2].style.display = 'block';
            } else {
                errorMessages[2].style.display = 'none';
            }

            if (!passwordInput.value.trim()) {
                valid = false;
                errorMessages[3].style.display = 'block';
            } else {
                errorMessages[3].style.display = 'none';
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    });
});
