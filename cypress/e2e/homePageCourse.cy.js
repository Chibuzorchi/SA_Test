/// <reference types="cypress" />

import HomePageCourse from '../pages/HomePageCourse';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

describe('Register', () => {

    beforeEach(() => {
      cy.visit('/');
      LoginPage.goToSignUp();
      RegisterPage.fillFields();
      RegisterPage.clickCreateAccount();
      RegisterPage.clickLogout();
    });
  
  
    it('Verify Users can page forward and back through the courses on the homepage', () => {
      
      LoginPage.fillFields();
      LoginPage.clickSignIn();
      RegisterPage.insertCode();
      RegisterPage.clickSubmit();
      HomePageCourse.goToHomePage();
      HomePageCourse.goToBusinessCourse();
      HomePageCourse.goBack();
      HomePageCourse.goToDataAnalysisCourse();
      HomePageCourse.goBack();
    })
    
  })
  