import ProfileEL from "../elements/ProfileEL";


class ProfilePage {

    goToProfile = () => cy.get(ProfileEL.linkProfile()).click();

}   

export default new ProfilePage;