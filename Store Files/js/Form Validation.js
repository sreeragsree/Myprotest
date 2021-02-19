// These are Global variables for logic/answer check

// Store Item Prices
priceItem_1 = 3
priceItem_2 = 5

minimumOrderPrice = 10
    // 2020 Sales Tax Rates in Canadian Provinces and Territories Reference: www.canada.ca
taxAB = 5
taxBC = 5
taxMB = 5
taxNB = 15
taxNL = 15
taxNS = 15
taxNT = 5
taxNU = 5
taxQC = 5
taxON = 13
taxPE = 15
taxSK = 5
taxYT = 5

taxIncluded = 0


var postcodeRegex = /^[A-Za-z][0-9][A-Za-z][\s]?[0-9][A-Za-z][0-9]$/;
var streetNameRegex = /^[\w',-\\/.\s]/;
var cityNameRegex = /^[\w',-\\/.\s]/;
var houseNumberRegex = /^[\w',-\\/.\s]/;
var NameRegex = /^[\w',-\\/.\s]/;
var emailRegex = /\S+@\S+\.\S+/; //anystring@anystring.anystring
var craditCardNameRegex = /^[\w',-\\/.\s]/;
var creditCardRegex = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
var cvvRegex = /^[0-9][0-9][0-9]$/;

//Arrays for data handling such as Itemized Price and Cart Items purchased and 

var itemizedCartPrice = [];

var item_1_total_Price = []
var item_2_total_Price = []
var orderTotal = 0
var cartDisplay = ""
var userEmailRegex = /\S+@\S+\.\S+/;
var cartDisplay1 = ""
var item_2_quantity = 0
var item_1_total = 0
var item_2_total = 0
var subTotal = 0


//These 3 Global Arrays will hold/show the data for Cart Display Item # , Quantity, Itemized total
var cart_Display_Items = [];
var cart_Display_quantity = []
var cart_Display_Itemized_Price = []


function add111ToCart() {
    item_1_Quantity = document.getElementById("quantity_1").value; //getting the quantity entered by customer


    if (item_1_Quantity != 0) {


        /*  Cart calculation 
            1) Calculating total for item # 1; 
            2) Pushing Item #1 in display cart Array
            3) Pushing Item #1's quantity in to display cart Array for quantity
            4) Pushing total Item #1 price in to cart Display Array for Item Total  */
        item_1_total = item_1_Quantity * priceItem_1
        cart_Display_Items.push("(item # 1) Wrench ")
        cart_Display_quantity.push(item_1_Quantity)
        cart_Display_Itemized_Price.push(item_1_total)

        cart_Display_Items.push("(item # 2) Screw Driver")

        //Summing up Grand Total taxes will be applied at checkout NOT yet
        subTotal += item_1_total


        // Sending Data from Item #1 to Cart Display Div
        cartDisplay1 = `Item # 1 (x ${item_1_Quantity})..........$${item_1_total}`
        document.getElementById("carTDisplay1").innerHTML = cartDisplay1



        // Notifying User that Item # 1 has been added acording to selected quantity 
        storeErrorMessage = `Added to Cart for quantity of ${item_1_Quantity}`
        document.getElementById("storeErrorMessage1").style.color = 'cyan';
        document.getElementById("storeErrorMessage1").style.textEmphasis = 'bold';
        document.getElementById("storeErrorMessage1").innerHTML = storeErrorMessage
        document.getElementById("quantity_1").value = 'none'


    } else {

        //User has not entered any quantity so Notification is shown. quantity has to be chosen and more than 1
        subTotal = 0
        orderTotal = 0
            // Resetting the quantity entered by user to avoid over-loading the card
        document.getElementById("quantity_1").value = 'none'
        storeErrorMessage = "Please select the quantity of item"
        document.getElementById("storeErrorMessage1").innerHTML = storeErrorMessage
        document.getElementById("storeErrorMessage1").style.color = 'maroon';
        document.getElementById("quantity_1").value = 'none'

    }




}


function add222ToCart() {
    item_2_Quantity = document.getElementById("quantity_2").value; //getting the quantity entered by customer


    if (item_2_Quantity != 0) {


        /*  Cart calculation 
            1) Calculating total for item # 1; 
            2) Pushing Item #1 in display cart Array
            3) Pushing Item #1's quantity in to display cart Array for quantity
            4) Pushing total Item #1 price in to cart Display Array for Item Total  */
        item_2_total = item_2_Quantity * priceItem_2
        cart_Display_Items.push("(item # 2) Screw Driver")
        cart_Display_quantity.push(item_2_Quantity)
        cart_Display_Itemized_Price.push(item_2_total)

        //Summing up Grand Total taxes will be applied at checkout NOT yet
        subTotal += item_2_total


        // Sending Data from Item #1 to Cart Display Div
        cartDisplay2 = `Item # 2 (x ${item_2_Quantity})..........$${item_2_total}`
        document.getElementById("carTDisplay2").innerHTML = cartDisplay2




        // Notifying User that Item # 1 has been added acording to selected quantity 
        storeErrorMessage = `Added to Cart for quantity of ${item_2_Quantity}`
        document.getElementById("storeErrorMessage2").style.color = 'cyan';
        document.getElementById("storeErrorMessage2").style.textEmphasis = 'bold';
        document.getElementById("storeErrorMessage2").innerHTML = storeErrorMessage
        document.getElementById("quantity_2").value = 'none'


    } else {

        //User has not entered any quantity so Notification is shown. quantity has to be chosen and more than 1
        subTotal = 0
        orderTotal = 0
            // Resetting the quantity entered by user to avoid over-loading the card
        document.getElementById("quantity_2").value = 'none'
        storeErrorMessage = "Please select the quantity of item"
        document.getElementById("storeErrorMessage2").innerHTML = storeErrorMessage
        document.getElementById("storeErrorMessage2").style.color = 'maroon';
        document.getElementById("quantity_2").value = 'none'

    }



}


function userRegistration() {
    if (subTotal < minimumOrderPrice) {
        registrationErrorMessage = "Minimum order should be at or above $ 10"
        document.getElementById("storeErrorMessage3").innerHTML = registrationErrorMessage
        document.getElementById("storeErrorMessage3").style.color = 'maroon';
        document.getElementById("storeErrorMessage4").innerHTML = registrationErrorMessage
        document.getElementById("storeErrorMessage4").style.color = 'maroon';

        cartDisplay2 = ``
        document.getElementById("carTDisplay2").innerHTML = cartDisplay2

        // Sending Data from Item #1 to Cart Display Div
        cartDisplay1 = ``
        document.getElementById("carTDisplay1").innerHTML = cartDisplay1

        cart_Display_Items.pop("(item # 2) Screw Driver")
        cart_Display_quantity.pop(item_2_Quantity)
        cart_Display_Itemized_Price.pop(item_2_total)
        cart_Display_Items.pop("(item # 1) Wrench ")
        cart_Display_quantity.pop(item_1_Quantity)
        cart_Display_Itemized_Price.pop(item_1_total)







        // Notifying User that Item # 1 has been added acording to selected quantity 
        storeErrorMessage = ``

        //document.getElementById("shopingCart").style.display = 'none'
        subTotal = 0
        orderTotal = 0

    } else {
        //document.getElementById("shopingCart").style.display = 'block'
        document.getElementById("storeMainPage").style.display = 'none';
        document.getElementById("userRegistration").style.display = 'block';

    }


}

function userVarification() {

    registrationEmail = document.getElementById("userEmail").value
    var chosenPassword = document.getElementById("chosenPassword").value
    var retypedPassword = document.getElementById("retypedPassword").value

    if (emailRegex.test(registrationEmail) == true) {

        if (chosenPassword != "") {
            if (retypedPassword != "") {
                if (chosenPassword != retypedPassword) {
                    mismatechedPassword = "Paswords Do not Match"
                    document.getElementById("registrationErrorMessage").innerHTML = mismatechedPassword;
                    document.getElementById("registrationErrorMessage").style.color = 'maroon';
                } else {
                    document.getElementById("userRegistration").style.display = 'none'
                    document.getElementById("paymentform").style.display = 'block'
                }


            } else {
                noRetypedPassword = "Please Re-Type the  password";
                document.getElementById("registrationErrorMessage").innerHTML = noRetypedPassword;
                document.getElementById("registrationErrorMessage").style.color = 'maroon';
            }
        } else {
            noPassword = "Please Enter a password";
            document.getElementById("registrationErrorMessage").innerHTML = noPasswords;
            document.getElementById("registrationErrorMessage").style.color = 'maroon';
        }
    } else {
        wrongEmail = "Please Enter a Valid email";
        document.getElementById("registrationErrorMessage").innerHTML = wrongEmail;
        document.getElementById("registrationErrorMessage").style.color = 'maroon';
    }




}


function finalizeCheckout() {



    fullName = document.getElementById("fullName").value
    emailAdress = document.getElementById("email").value
    houseNumber = document.getElementById("house_number").value
    streetName = document.getElementById("street").value
    cityName = document.getElementById("city").value
    zipCode = document.getElementById("zip").value
    nameOnC_Card = document.getElementById("cname").value
    creditCardCheck = document.getElementById("ccnum").value
    cvvCheck = document.getElementById("cvv").value
    provinceName = document.getElementById("Province").value
    expiryMonth = document.getElementById("expiryMonth").value
    expiryYear = document.getElementById("expiryYear").value

    if (NameRegex.test(fullName) == true) {

        if (userEmailRegex.test(emailAdress) == true) {
            if (houseNumberRegex.test(houseNumber) == true) {
                if (streetNameRegex.test(streetName) == true) {
                    if (cityNameRegex.test(cityName) == true) {
                        if (NameRegex.test(provinceName) != "") {

                            if (provinceName == "Newfoundland Labrador") {
                                taxIncluded = (subTotal / 100) * taxNL
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';


                            } else if (provinceName == "Ontario") {
                                taxIncluded = (subTotal / 100) * taxON
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';

                            } else if (provinceName == "British Columbia") {
                                taxIncluded = (subTotal / 100) * taxBC
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Saskatchewan") {
                                taxIncluded = (subTotal / 100) * taxSK
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Quebec") {
                                taxIncluded = (subTotal / 100) * taxQC
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Prince Edward Island") {
                                taxIncluded = (subTotal / 100) * taxPE
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Manitoba") {
                                taxIncluded = (subTotal / 100) * taxMB
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Yukon") {
                                taxIncluded = (subTotal / 100) * taxYT
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Northwest Territories") {
                                taxIncluded = (subTotal / 100) * taxNT
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "Nunavut") {
                                taxIncluded = (subTotal / 100) * taxNU
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "New Brunswick") {
                                taxIncluded = (subTotal / 100) * taxNB
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else if (provinceName == "NovaScotia") {
                                taxIncluded = (subTotal / 100) * taxNS
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            } else //provinceName == "Alberta"
                            {
                                taxIncluded = (subTotal / 100) * taxAB
                                taxIncluded = taxIncluded.toFixed(0);
                                taxIncluded = parseInt(taxIncluded)
                                orderTotal = subTotal + taxIncluded
                                carTDisplayTaxes = `Taxes.......................$${taxIncluded}`
                                document.getElementById("carTDisplayTaxes").innerHTML = carTDisplayTaxes
                                carTDisplayTotal = `Total .....................$${orderTotal}`
                                document.getElementById("carTDisplayTotal").innerHTML = carTDisplayTotal
                                includedTax = ` $${taxIncluded} Taxes have been included in the Total`
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'yellow';
                                includedTax = "Taxes have been included in the Total!!"
                                document.getElementById("taxCalculationDone").innerHTML = includedTax
                                document.getElementById("taxCalculationDone").style.color = 'cyan';
                            }





                            if (postcodeRegex.test(zipCode) == true) {
                                if (craditCardNameRegex.test(nameOnC_Card) == true) {
                                    if (creditCardRegex.test(creditCardCheck) == true) {
                                        if (NameRegex.test(expiryMonth) != "") {
                                            if (NameRegex.test(expiryYear) != "") {
                                                if (cvvRegex.test(cvvCheck) == true) {
                                                    shippingEmail = emailAdress
                                                    document.getElementById("shopingCart").style.display = 'none'

                                                    if (cart_Display_Itemized_Price[2] != NaN) {
                                                        //   document.getElementById("Purchased Items").innerHTML = `${carItems[]}`;

                                                        document.getElementById("Purchased Items").innerText = `Items...............................................Price
                                                                                                            ${cart_Display_Items[0]}(x${cart_Display_quantity[0]})..................$${cart_Display_Itemized_Price[0]}
                                                                                                            ${cart_Display_Items[1]}(x${cart_Display_quantity[1]})..........$${cart_Display_Itemized_Price[1]}
                                                                                                            Sub-Total........................................$${subTotal}
                                                                                                            Tax..................................................$${taxIncluded}
                                                                                                            Total................................................$${orderTotal}`;



                                                    } else { document.getElementById("Purchased Items").innerText = `Items.......................................Price
                                                                                                                    ${cart_Display_Items[0]}(x${cart_Display_quantity[0]})..........$${cart_Display_Itemized_Price[0]}
                                                    
                                                                                                                    Sub-Total................................$${subTotal}
                                                                                                                    Tax..........................................$${taxIncluded}
                                                                                                                    Total........................................$${orderTotal}`; }


                                                    document.getElementById("shipping_Email").innerHTML = shippingEmail
                                                    document.getElementById("shipping address").innerText = `${fullName} 
                                                                                                ${houseNumber} ${streetName} 
                                                                                                ${cityName} ${zipCode}
                                                                                                ${provinceName}`
                                                        // document.getElementById("CartDev").style.display = 'none';
                                                    document.getElementById("paymentform").style.display = 'none';
                                                    document.getElementById("storeMainPage").style.display = 'none';
                                                    document.getElementById("recieptGeneration").style.display = 'block'

                                                } else {
                                                    wrongCVVnumber = "Please Enter a Valid CVV number"
                                                    document.getElementById("paymentErrorMessage").innerHTML = wrongCVVnumber
                                                    document.getElementById("paymentErrorMessage").style.color = 'maroon';
                                                }

                                            } else {
                                                wrongExpirationYear = "Please Enter Card Expiration Year"
                                                document.getElementById("paymentErrorMessage").innerHTML = wrongExpirationYear
                                                document.getElementById("paymentErrorMessage").style.color = 'maroon';
                                            }
                                        } else {
                                            wrongExpirationMonth = "Please Enter Card Expiration Month"
                                            document.getElementById("paymentErrorMessage").innerHTML = wrongExpirationMonth
                                            document.getElementById("paymentErrorMessage").style.color = 'maroon';

                                        }


                                    } else {
                                        wrongCcNumber = "Please Enter a Credit Card number "
                                        document.getElementById("paymentErrorMessage").innerHTML = wrongCcNumber
                                        document.getElementById("paymentErrorMessage").style.color = 'maroon';
                                    }
                                } else {
                                    wrongCCName = "Please Enter a Valid Name on Credit Card"
                                    document.getElementById("paymentErrorMessage").innerHTML = wrongCCName
                                    document.getElementById("paymentErrorMessage").style.color = 'maroon';
                                }
                            } else {
                                wrongzip = "Please Enter a Zip Code"
                                document.getElementById("paymentErrorMessage").innerHTML = wrongzip
                                document.getElementById("paymentErrorMessage").style.color = 'maroon';
                            }
                        } else {
                            alert('Provice nil')

                            wrongProvince = "Please Select a Province"
                            document.getElementById("paymentErrorMessage").innerHTML = wrongProvince
                            document.getElementById("paymentErrorMessage").style.color = 'maroon';
                        }
                    } else {
                        wrongCity = "Please Enter a Valid City Name"
                        document.getElementById("paymentErrorMessage").innerHTML = wrongCity;
                        document.getElementById("paymentErrorMessage").style.color = 'maroon';
                    }
                } else {
                    wrongStreet = "Please Enter a Valid Street Name"
                    document.getElementById("paymentErrorMessage").innerHTML = wrongStreet
                    document.getElementById("paymentErrorMessage").style.color = 'maroon';
                }

            } else {
                wrongHouse = "Please Enter a valid house Number"
                document.getElementById("paymentErrorMessage").innerHTML = wrongHouse;
                document.getElementById("paymentErrorMessage").style.color = 'maroon';
            }
        } else {
            wrongEmail = "Please Enter a Valid Email"
            document.getElementById("paymentErrorMessage").innerHTML = wrongEmail;
            document.getElementById("paymentErrorMessage").style.color = 'maroon';
        }
    } else {
        wrongName = "Please Enter a Valid Name"
        document.getElementById("paymentErrorMessage").innerHTML = wrongName;
        document.getElementById("paymentErrorMessage").style.color = 'maroon';
    }
}