document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.querySelector('input[name="password"]');
    const confirmPasswordField = document.querySelector('input[name="confirm_password"]');
    const differentPasswordsError = document.getElementById('different_passwords');
    const shortPasswordsError = document.getElementById('short_passwords');
    const weakPasswordError = document.getElementById('weak_password');
    const signUpForm = document.querySelector('.register_form');

    differentPasswordsError.style.display = 'none';
    shortPasswordsError.style.display = 'none';
    weakPasswordError.style.display = 'none';

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняємо стандартну відправку форми

        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        if (password !== confirmPassword) {
            differentPasswordsError.style.display = 'block';
        } else {
            differentPasswordsError.style.display = 'none';
        }

        if (password.length < 8) {
            shortPasswordsError.style.display = 'block';
        } else {
            shortPasswordsError.style.display = 'none';
        }

        const containsLetter = /[a-zA-Z]/.test(password); // Перевірка наявності букви в паролі

        if (!containsLetter) {
            weakPasswordError.style.display = 'block';
        } else {
            weakPasswordError.style.display = 'none';
        }

        // Якщо умови виконані, то можна відправити форму
        if (differentPasswordsError.style.display === 'none' && 
            shortPasswordsError.style.display === 'none' &&
            weakPasswordError.style.display === 'none') {
            this.submit();
        }
    });
});