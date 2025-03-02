const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const emailErrorMsg = document.querySelector(".error-msg");
const successMsg = document.querySelector(".success-msg");

successMsg.style.display = "none";

function validateEmail(email) {
    if (!email) return "Email is required";

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isValidEmail.test(email)) {
        return "Please enter a valid email";
    }
    return "";
}

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    const errorMsg = validateEmail(email);

    if (errorMsg) {
        emailErrorMsg.textContent = errorMsg;
        emailErrorMsg.style.color = "red";
        return;
    }

    document.querySelector(".signup-container").style.display = "none";
    successMsg.style.display = "block";
});

successMsg.querySelector(".dismiss-btn").addEventListener("click", () => {
    successMsg.style.display = "none";

    document.querySelector(".signup-container").style.display = "block";

    emailInput.value = "";
    emailErrorMsg.textContent = "";
});