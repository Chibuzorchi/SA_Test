import MultiplePageEL from "../elements/MultiplePageEL";


class MultiplePage {

    goToEnrolledCourse = () => cy.get(MultiplePageEL.EnrolledCourses()).click({multiple: true});

    goToWishlist = () => cy.get(MultiplePageEL.Wishlist()).click();

    goToReviews = () => cy.get(MultiplePageEL.Reviews()).click();

    goToOrderHistory = () => cy.get(MultiplePageEL.OrderHistory()).click();

    goBack = () => cy.go('back');
    
}   

export default new MultiplePage;