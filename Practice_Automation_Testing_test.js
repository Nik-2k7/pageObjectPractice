const assert = require('assert');
Feature('Practice_Automation_Testing');

Scenario('Registration & Login', ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(practice_pageobjectPage.label_MyAccount, 3);
    I.click(practice_pageobjectPage.label_MyAccount);
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_email, 'xyz@gmail.com');
    I.fillField(practice_pageobjectPage.input_password, 'Test@1234!');
    I.click(practice_pageobjectPage.btn_register);
    I.wait(3);
    I.fillField(practice_pageobjectPage.input_username, 'xyz@gmail.com');
    I.fillField(practice_pageobjectPage.input_loginPassword, 'Test@1234!');
    I.click(practice_pageobjectPage.btn_login);
    I.wait(2);
});

Scenario('1. Home Page with Three Sliders Only', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    let numOfSliders = await I.grabNumberOfVisibleElements('//img[@data-x="50"]');
    console.log(numOfSliders == 3);
    await assert.equal(numOfSliders, 3);
    I.wait(2);
});

Scenario('2. Home Page with three Arrivals only', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
});

Scenario('3. Home Page - Images in Arrivals should navigate', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
});

Scenario("4.Home page - Arrivals-Images-Description", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.see('Product Description');
    I.see(2);
});

Scenario('5.Home page - Arrivals-Images-Review', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.click(practice_pageobjectPage.label_Review);
    I.see('Reviews');
    I.see(2);
});

Scenario('6.Home page - Arrivals-Images-Add to Basket', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(2);
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.wait(3);
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.wait(2);
    I.see('Selenium Ruby');
    I.see('₹500.00')
});

Scenario('7.Home page - Arrivals-Add to Basket with more books', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.fillField(practice_pageobjectPage.input_noOfBooks, '8706');
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.wait(3);
});

Scenario("9.Home-Arrivals-Add to Basket-Items-Coupon", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.fillField(practice_pageobjectPage.input_coupon, 'krishnasakinala');
    I.wait(5);
    I.click(practice_pageobjectPage.label_applyCoupon);
    I.wait(2);
    I.see('Coupon code applied successfully.');
    I.wait(2);
});

Scenario("10.Home-Arrivals-Add to Basket-Items-Coupon value<450", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.input_ImgMasteringJavacript);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Mastering JavaScript');
    I.see('₹350.00');
    I.wait(5);
    I.fillField(practice_pageobjectPage.input_coupon, 'krishnasakinala');
    I.wait(5);
    I.click(practice_pageobjectPage.label_applyCoupon);
    I.wait(2);
    I.see('The minimum spend for this coupon is ₹450.00.');
    I.wait(2);
});

Scenario("11.Home-Arrivals-Add to Basket-Items-Remove book", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.input_ImgMasteringJavacript);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Mastering JavaScript');
    I.see('₹350.00');
    I.wait(5);
    I.click(practice_pageobjectPage.label_remove);
    I.wait(3);
});

Scenario("12.Home-Arrivals-Add to Basket-Items-Add book", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.fillField(practice_pageobjectPage.input_quantity, '2');
    I.wait(3);
    I.click(practice_pageobjectPage.label_updateBasket);
    I.wait(3);
});

Scenario("13.Home-Arrivals-Add to Basket-Items-Check-out-Book Final Price", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.see('Total');
    I.wait(1);
    I.see('₹510.00');
    I.wait(2);
});

Scenario("15.Home-Arrivals-Add to Basket-Items-Check-out-Total & Sub-Total Condition", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.see('Subtotal');
    I.wait(3);
    I.see('₹500.00');
    I.wait(2);
    I.see('Total');
    I.wait(2);
    I.see('₹510.00');
    I.wait(2);
});

Scenario("16.Home-Arrivals-Add to Basket-Items-Check-out functionality", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.see('Subtotal');
    I.wait(3);
    I.see('₹500.00');
    I.wait(2);
    I.see('Total');
    I.wait(2);
    I.see('₹510.00');
    I.wait(2);
    I.click(practice_pageobjectPage.label_proceedToCheckout);
    I.wait(2);
});

Scenario("17.Home-Arrivals-Add to Basket-Items-Check-out-Payment Gateway", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.btn_viewBasket);
    I.waitForNavigation({});
    I.see('Selenium Ruby');
    I.see('₹500.00');
    I.wait(5);
    I.see('Subtotal');
    I.wait(3);
    I.see('₹500.00');
    I.wait(2);
    I.see('Total');
    I.wait(2);
    I.see('₹510.00');
    I.wait(2);
    I.click(practice_pageobjectPage.label_proceedToCheckout);
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_firstName, 'Nitish');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_lastName, 'Kumar');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_companyName, 'Crowdstaffing');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_emailAddress, 'nitishk@crowdstaffing.com');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_phoneNo, '+91 7980268083');
    I.wait(3);
    I.see('India');
    I.wait(3);
    I.fillField(practice_pageobjectPage.input_Address, '26, Harishankar Lane');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_townCity, 'Kolkata');
    I.wait(2);
    I.see('Telangana');
    I.wait(3);
    I.fillField(practice_pageobjectPage.input_postCode, '7000034');
    I.wait(2);
    I.click('//input[@value="cod"]');
    I.wait(2);
    I.click('//a[contains(text(),"Click here to enter your code")]');
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_coupon, 'krishnasakinala');
    I.click('//input[@value="Apply Coupon"]');
    I.wait(2);
    I.see('Coupon code applied successfully.');
    I.wait(2);
});