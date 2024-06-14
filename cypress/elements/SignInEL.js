class SignInEL {
    
    //Inputs
    inputUserName = () => 'input[name="log"]';
    inputPassword = () => 'input[name="pwd"]';
    inputCode = () => 'input[name="tutor-login-otp"]'

    //Links
    linkCreateAccount = () => 'a.tutor-btn.tutor-btn-link[href="https://smartapproaches.org/student-registration/?redirect_to=https://smartapproaches.org/dashboard/"]';

    //Buttons
    btnSignIn = () => 'button[type="submit"]';
}

export default new SignInEL;