import AddToCartEL from "../elements/AddToCartEL"
import CheckOutEL from "../elements/CheckOutEL";
import HomePageCourseEL from "../elements/HomePageCourseEL";
import MultiplePageEL from "../elements/MultiplePageEL";

class CheckOut {
    goToHomePage = () => cy.get(HomePageCourseEL.HomePageLink()).click({multiple: true});

    addBusinessToCart = () => cy.get(AddToCartEL.BusinessAnalysisCart()).click();

    backToCourse = () => cy.get(AddToCartEL.BackToHomePage()).click();

    addDataToCart = () => cy.get(AddToCartEL.DataAnalysisCart()).click();

    goToCheckOut = () => cy.get(CheckOutEL.proceedToCheckOut()).click();

    fillFields(){
        cy.get(CheckOutEL.inputFirstName()).type('Dace');
        cy.get(CheckOutEL.inputLastName()).type('funk');
        //cy.get(CheckOutEL.selectCountry()).select('United Kingdom');
        cy.get(CheckOutEL.inputAddress()).type('fhsdb 33 4 hj');
        cy.get(CheckOutEL.inputCity()).type('London');
        cy.get(CheckOutEL.inputPostCode()).type('E1 7DD');
        cy.get(CheckOutEL.inputPhoneNo()).type('24365887707');
        cy.get(CheckOutEL.inputEmail()).clear().type('tgdb@gmail.com');
     
    };

    viewOrder = () => cy.get(CheckOutEL.placeOrder()).click();
    goToDashboard = () => cy.get(CheckOutEL.studentPortal()).click();
    goToOrderHistory = () => cy.get(MultiplePageEL.OrderHistory()).click();
}

export default new CheckOut();
