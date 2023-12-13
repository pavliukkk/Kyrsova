document.addEventListener('DOMContentLoaded', function () {
   const form = document.querySelector('form');
   const inputs = form.querySelectorAll('.reservation__form-input');
   const errorMessages = document.querySelectorAll('.error-msg');
   const dateInput = form.querySelector('input[type="date"]');
   const timeInput = form.querySelector('input[type="time"]');
   
   form.addEventListener('submit', function (event) {
       let dateSelected = !!dateInput.value;
       let timeSelected = !!timeInput.value;
       let currentDate = new Date().toISOString().split('T')[0]; // Поточна дата в форматі "YYYY-MM-DD"

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
       } else if (dateInput.value < currentDate) {
           errorMessages[3].style.display = 'block';
           errorMessages[0].style.display = 'none';
           errorMessages[1].style.display = 'none';
           errorMessages[2].style.display = 'none';
           event.preventDefault();
       } else {
           errorMessages[0].style.display = 'none';
           errorMessages[1].style.display = 'none';
           errorMessages[2].style.display = 'none';
           errorMessages[3].style.display = 'none';
       }
   });

   dateInput.addEventListener('change', function () {
       let currentDate = new Date().toISOString().split('T')[0]; // Поточна дата в форматі "YYYY-MM-DD"
       if (dateInput.value < currentDate) {
           dateInput.value = currentDate; // Встановлення поточної дати, якщо вибрана дата є минулою
       }
   });
});
