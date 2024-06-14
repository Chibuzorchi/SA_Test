/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';

describe('Register', () => {

  beforeEach(() => {
    cy.visit('/');
    LoginPage.goToSignUp();
    RegisterPage.fillFields();
    RegisterPage.clickCreateAccount();
    RegisterPage.clickLogout();
  });

  it('Verify Users can log into account and view account details', () => {
   
    LoginPage.fillFields();
    LoginPage.clickSignIn();
    RegisterPage.insertCode();
    RegisterPage.clickSubmit(); 
    ProfilePage.goToProfile();
  })
  
})
