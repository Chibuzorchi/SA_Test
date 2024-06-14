import HomePageCourseEL from "../elements/HomePageCourseEL";

class HomePageCourse {
    goToHomePage = () => cy.get(HomePageCourseEL.HomePageLink()).click({ multiple: true });

    goToBusinessCourse = () => cy.get(HomePageCourseEL.BusinessAnalysisLink()).click();

    goBack = () => cy.go('back');

    goToDataAnalysisCourse = () => cy.get(HomePageCourseEL.DataAnalysisLink()).click();
}

export default new HomePageCourse();
