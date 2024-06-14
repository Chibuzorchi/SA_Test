import AddToCartEL from "../elements/AddToCartEL"
import HomePageCourseEL from "../elements/HomePageCourseEL";

class AddToCart {
    goToHomePage = () => cy.get(HomePageCourseEL.HomePageLink()).click();

    addBusinessToCart = () => cy.get(AddToCartEL.BusinessAnalysisCart()).click();

    backToCourse = () => cy.get(AddToCartEL.BackToHomePage()).click();

    addDataToCart = () => cy.get(AddToCartEL.DataAnalysisCart()).click();
}

export default new AddToCart();
