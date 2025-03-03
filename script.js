const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const emailErrorMsg = document.querySelector(".error-msg");
const successMsg = document.querySelector(".success-msg-container");

//  successMsg.style.display = "none";
successMsg.classList.remove("show");

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
        emailInput.style.backgroundColor = "hsl(15, 100%, 61%)";
        // emailInput.style.color = "red";
        return;
    }

    document.querySelector(".signup-container").style.display = "none";
    //successMsg.style.display = "block";
    successMsg.classList.add("show")


});

successMsg.querySelector(".dismiss-btn").addEventListener("click", () => {
    //successMsg.style.display = "none";
    successMsg.classList.remove("show");

    // document.querySelector(".signup-container").style.display = "block";
    const signupContainer = document.querySelector(".signup-container");
    signupContainer.style.visibility = "visible";
    signupContainer.style.opacity = "1";
    signupContainer.style.display = "flex";

    emailInput.value = "";
    emailInput.style.backgroundColor = "white";
    emailErrorMsg.textContent = "";
});