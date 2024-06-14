import SignInEL from "../elements/SignInEL";
// import user from '../support/fakerUtils';


class LoginPage {

    goToSignUp = () => cy.get(SignInEL.linkCreateAccount()).click();
    
    fillFields(){
        const userName = 
        cy.get(SignInEL.inputUserName()).type('fuck99');
        cy.get(SignInEL.inputPassword()).type('Test@132');
    };

    clickSignIn = () => cy.get(SignInEL.btnSignIn()).click();

}   

export default new LoginPage;