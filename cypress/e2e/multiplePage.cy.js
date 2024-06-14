/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage';
import MutiplePage from '../pages/MutiplePage';
import RegisterPage from '../pages/RegisterPage';

describe('Register', () => {

  beforeEach(() => {
    cy.visit('/');
    LoginPage.goToSignUp();
    RegisterPage.fillFields();
    RegisterPage.clickCreateAccount();
    RegisterPage.clickLogout();
  });

  it('Verify user can navigate to Enrolled courses, Wishlist, Reviews and Order history', () => {
   
    LoginPage.fillFields();
    LoginPage.clickSignIn();
    RegisterPage.insertCode();
    RegisterPage.clickSubmit(); 
    MutiplePage.goToEnrolledCourse();
    MutiplePage.goBack();
    MutiplePage.goToWishlist();
    MutiplePage.goBack();
    MutiplePage.goToReviews();
    MutiplePage.goBack();
    MutiplePage.goToOrderHistory();
    MutiplePage.goBack();
    
  })
  
})
