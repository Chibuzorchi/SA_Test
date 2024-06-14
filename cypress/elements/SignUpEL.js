class SignUpEL {

    //Inputs
    inputFirstName = () => 'input[name="first_name"]';
    inputLastName = () => 'input[name="last_name"]';
    inputUserName = () => 'input[name="user_login"]';
    inputEmail = () => 'input[name="email"]';
    inputPassword = () => 'input[name="password"]';
    inputConfirmationPassword = () => 'input[name="password_confirmation"]';

    //Buttons
    btnCreateAccount = () => 'button[type="submit"]';
    // bntLogout = () => cy.xpath("//span[normalize-space()='Logout']").click();
    bntLogout = () => "a[href='https://smartapproaches.org/dashboard/logout']";


}

export default new SignUpEL;