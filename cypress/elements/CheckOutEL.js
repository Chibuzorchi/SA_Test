class CheckOutEL {
    
   
    //CheckOut Link
    proceedToCheckOut = () => ".checkout-button.button.alt.wc-forward"

     //CheckOut Inputs
     inputFirstName = () => "#billing_first_name";
     inputLastName = () => "#billing_last_name";
     selectCountry = () => "#select2-billing_country-container";
     inputAddress = () => "#billing_address_1";
     inputCity = () => "#billing_city";
     inputPostCode = () => "#billing_postcode";
     inputPhoneNo = () => "#billing_phone";
     inputEmail = () => "#billing_email";

     //Button
     placeOrder = () => "#place_order";

     //Student Portal Link
     studentPortal = () => "li[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-16033 last-menu-item'] a";

}

export default new CheckOutEL;
