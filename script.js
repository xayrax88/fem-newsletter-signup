function handleSignupFormSubmit(e) {
    e.preventDefault();

    const formDataEntries = new FormData(signupForm).entries();
    const { email } = Object.fromEntries(formDataEntries);
    //Submit email data to API

    const emailErrorMsg = validateEmail(email);

    if (!emailErrorMsg) {
        const emailErrorMsgElement = document.querySelector('.email .form-field__msg');
    }
}

function validateEmail(email) {
    if (!email) return 'Email is required';

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        return 'Please enter a valid email';
    }

    return '';

}