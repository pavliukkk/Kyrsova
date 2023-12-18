document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservationForm");
    const successModal = document.getElementById("successfull_reservation");
    const wrapper = document.getElementById("wrapper");

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const dateInput = document.querySelector('input[type="date"]');
        const timeInput = document.querySelector('input[type="time"]');

        if (!dateInput.value || !timeInput.value) {
            if (!dateInput.value && !timeInput.value) {
                document.getElementById("select_both").style.display = "block";
            } else if (!dateInput.value) {
                document.getElementById("select_date").style.display = "block";
            } else {
                document.getElementById("select_time").style.display = "block";
            }
        } else {
            setTimeout(function() {
                successModal.style.display = "block";
                wrapper.classList.add("blur");
            
                function closeModalAndSubmitForm() {
                    successModal.style.display = "none";
                    wrapper.classList.remove("blur");
                    if (reservationForm.checkValidity()) {
                        reservationForm.submit();
                    }
                }
            
                successModal.addEventListener("click", function(event) {
                    if (event.target.classList.contains("close")) {
                        closeModalAndSubmitForm();
                    }
                });
            
                document.addEventListener("click", function(event) {
                    if (!successModal.contains(event.target)) {
                        closeModalAndSubmitForm();
                    }
                });
            }, 300);
        }
    });
});
