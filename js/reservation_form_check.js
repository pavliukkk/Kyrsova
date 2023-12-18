document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('.reservation__form-input');
    const errorMessages = document.querySelectorAll('.error-msg');
    const dateInput = form.querySelector('input[type="date"]');
    const timeInput = form.querySelector('input[type="time"]');
    const dateField = document.querySelector('input[type="date"]');
    
    // Set the minimum date to the current date
    let currentDate = new Date().toISOString().split('T')[0]; // Current date in "YYYY-MM-DD" format
    dateInput.setAttribute('min', currentDate);
 
    form.addEventListener('submit', function (event) {
        let dateSelected = !!dateInput.value;
        let timeSelected = !!timeInput.value;
 
        if (!dateSelected && !timeSelected) {
            errorMessages[2].style.display = 'block';
            errorMessages[0].style.display = 'none';
            errorMessages[1].style.display = 'none';
            errorMessages[3].style.display = 'none';
            event.preventDefault();
        } else if (!dateSelected) {
            errorMessages[0].style.display = 'block';
            errorMessages[1].style.display = 'none';
            errorMessages[2].style.display = 'none';
            errorMessages[3].style.display = 'none';
            event.preventDefault();
        } else if (!timeSelected) {
            errorMessages[1].style.display = 'block';
            errorMessages[0].style.display = 'none';
            errorMessages[2].style.display = 'none';
            errorMessages[3].style.display = 'none';
            event.preventDefault();
        }
    });
 });
 