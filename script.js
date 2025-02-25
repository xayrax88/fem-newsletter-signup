document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const emailErrorMsg = document.querySelector(".dkh-form-field__messages");
    const successMsg = document.querySelector(".success-msg");
    const dismissBtn = successMsg.querySelector("button");


    successMsg.style.display = "none";

    function validateEmail(email) {
        if (!email) return "Email is required";

        const isValidEmail = /^\S+@\S+\.\S+$/;
        if (!isValidEmail.test(email)) {
            return "Please enter a valid email";
        }

        return "";
    }

    // Handle form submit
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const emailError = validateEmail(email);

        if (emailError) {
            emailErrorMsg.textContent = emailError;
            emailErrorMsg.style.color = "red";
            emailInput.style.border = "1px solid red";
            return;
        }

        // Reset error messages if valid
        emailErrorMsg.textContent = "";
        emailInput.style.border = "1px solid #ccc";

        // Update the success message with user's email
        successMsg.querySelector("p").innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;

        // Show success message & hide signup form
        successMsg.style.display = "block";
        signupForm.parentElement.style.display = "none";
    });

    // Dismiss success message
    dismissBtn.addEventListener("click", function () {
        successMsg.style.display = "none";
        signupForm.parentElement.style.display = "block"; // Show form again
        emailInput.value = ""; // Reset input field
    });
});
