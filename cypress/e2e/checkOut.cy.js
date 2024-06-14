/// <reference types="cypress" />

import HomePageCourse from '../pages/HomePageCourse';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import addToCart from '../pages/addToCart';
import checkOut from '../pages/checkOut';

describe('Register', () => {

    beforeEach(() => {
      cy.visit('/');
      LoginPage.goToSignUp();
      RegisterPage.fillFields();
      RegisterPage.clickCreateAccount();
      RegisterPage.clickLogout();
    });
  
  
    it('Verify Users can select course, checkout and view order on order history', () => {
      LoginPage.fillFields();
      LoginPage.clickSignIn();
      RegisterPage.insertCode();
      RegisterPage.clickSubmit();
      HomePageCourse.goToHomePage();
      addToCart.addDataToCart();
      addToCart.backToCourse();
      addToCart.addBusinessToCart();
      checkOut.goToCheckOut();
      checkOut.fillFields();
      checkOut.viewOrder();
      checkOut.goToDashboard();
      checkOut.goToOrderHistory();
    })
    
  })
  