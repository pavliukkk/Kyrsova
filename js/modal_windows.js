document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("login");
    const wrapper = document.getElementById("wrapper");

    // Затримка відображення модального вікна через 2 секунди
    setTimeout(function() {
        loginModal.style.display = "block";
        wrapper.classList.add("blur");
    }, 2000);

    function closeModal() {
        const successModal = document.getElementById('successfull_reservation');
        successModal.style.display = "none";
        loginModal.style.display = "none";
        wrapper.classList.remove("blur");
    }

    document.querySelectorAll(".close").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    });
});
