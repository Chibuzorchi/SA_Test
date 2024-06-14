import SignUpEL from "../elements/SignUpEL";
import SignInEL from "../elements/SignInEL";
import Common from '../generic/CommonMethods';
import user from '../support/fakerUtils';

let inboxId = null;

class RegisterPage {

    fillFields() {
        let emailAddress = null;

        cy.get(SignUpEL.inputFirstName()).type(user.firstName);
        cy.get(SignUpEL.inputLastName()).type(user.lastName);
        cy.get(SignUpEL.inputUserName()).type("jumbo11");

        cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                inboxId = inbox.id;
                emailAddress = inbox.emailAddress;

                cy.get(SignUpEL.inputEmail()).type(emailAddress);
            });

        cy.get(SignUpEL.inputPassword()).type('Test@132');
        cy.get(SignUpEL.inputConfirmationPassword()).type('Test@132');
    };

    clickCreateAccount = () => cy.get(SignUpEL.btnCreateAccount()).click();
    clickLogout = () => cy.get(SignUpEL.bntLogout()).click();

    insertCode() {
        cy.mailslurp()
            .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))
            .then(email => {
                const emailBody = email.body;
                const parser = new DOMParser();
                const doc = parser.parseFromString(emailBody, 'text/html');
                const code = Common.GetCodeFromHTML(doc, 'div.tutor-email-content p', 'Login OTP:');

                // Ensure the code is exactly 6 digits
                const match = code.match(/\d{6}/);
                if (match) {
                    const otpCode = match[0];
                    cy.get(SignInEL.inputCode()).type(otpCode);
                } else {
                    throw new Error('Valid 6-digit OTP code not found');
                }
            });
    }

    clickSubmit = () => cy.get(SignInEL.btnSignIn()).click();

}

export default new RegisterPage();
