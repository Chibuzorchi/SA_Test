import SignInEL from "../elements/SignInEL";
// import user from '../support/fakerUtils';


class LoginPage {

    goToSignUp = () => cy.get(SignInEL.linkCreateAccount()).click();
    
    fillFields(){

        cy.get(SignInEL.inputUserName()).type('jumbo11');
        cy.get(SignInEL.inputPassword()).type('Test@132');
    };

    clickSignIn = () => cy.get(SignInEL.btnSignIn()).click();

}   

export default new LoginPage;