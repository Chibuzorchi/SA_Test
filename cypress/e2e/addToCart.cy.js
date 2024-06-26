/// <reference types="cypress" />

import HomePageCourse from '../pages/HomePageCourse';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import addToCart from '../pages/addToCart';

describe('Register', () => {

    beforeEach(() => {
      cy.visit('/');
      LoginPage.goToSignUp();
      RegisterPage.fillFields();
      RegisterPage.clickCreateAccount();
      RegisterPage.clickLogout();
    });
  
  
    it('Verify Users can add courses to the cart', () => {
      LoginPage.fillFields();
      LoginPage.clickSignIn();
      RegisterPage.insertCode();
      RegisterPage.clickSubmit();
      HomePageCourse.goToHomePage();
      addToCart.addDataToCart();
      addToCart.backToCourse();
      addToCart.addBusinessToCart();
    })
    
  })
  