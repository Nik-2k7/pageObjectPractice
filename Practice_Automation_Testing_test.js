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
    await I.wait(2);
});

Scenario('2. Home Page with three Arrivals only', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
});

Scenario('3. Home Page - Images in Arrivals should navigate', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.wait(3);
});

Scenario("4.Home page - Arrivals-Images-Description", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.wait(3);
    await I.see('Product Description');
    await I.see(2);
});

Scenario('5.Home page - Arrivals-Images-Review', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.wait(3);
    await I.click(practice_pageobjectPage.label_Review);
    await I.see('Reviews');
    await I.see(2);
});

Scenario('6.Home page - Arrivals-Images-Add to Basket', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.wait(2);
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.wait(3);
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.wait(2);
    await I.see('Selenium Ruby');
    await I.see('₹500.00')
});

Scenario('7.Home page - Arrivals-Add to Basket with more books', async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.wait(3);
    await I.fillField(practice_pageobjectPage.input_noOfBooks, '8706');
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.wait(3);
});

Scenario("9.Home-Arrivals-Add to Basket-Items-Coupon", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Selenium Ruby');
    await I.see('₹500.00');
    await I.wait(5);
    await I.fillField(practice_pageobjectPage.input_coupon, 'krishnasakinala');
    await I.wait(5);
    await I.click(practice_pageobjectPage.label_applyCoupon);
    await I.wait(2);
    await I.see('Coupon code applied successfully.');
    await I.wait(2);
});

Scenario("10.Home-Arrivals-Add to Basket-Items-Coupon value<450", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.input_ImgMasteringJavacript);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Mastering JavaScript');
    await I.see('₹350.00');
    await I.wait(5);
    await I.fillField(practice_pageobjectPage.input_coupon, 'krishnasakinala');
    await I.wait(5);
    await I.click(practice_pageobjectPage.label_applyCoupon);
    await I.wait(2);
    await I.see('The minimum spend for this coupon is ₹450.00.');
    await I.wait(2);
});

Scenario("11.Home-Arrivals-Add to Basket-Items-Remove book", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.input_ImgMasteringJavacript);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Mastering JavaScript');
    await I.see('₹350.00');
    await I.wait(5);
    await I.click(practice_pageobjectPage.label_remove);
    await I.wait(3);
});

Scenario("12.Home-Arrivals-Add to Basket-Items-Add book", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.wait ForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Selenium Ruby');
    await I.see('₹500.00');
    await I.wait(5);
    await I.fillField(practice_pageobjectPage.input_quantity, '2');
    await I.wait(3);
    await I.click(practice_pageobjectPage.label_updateBasket);
    await I.wait(3);
});

Scenario("13.Home-Arrivals-Add to Basket-Items-Check-out-Book Final Price", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Selenium Ruby');
    await I.see('₹500.00');
    await I.wait(5);
    await I.see('Total');
    await I.wait(1);
    await I.see('₹510.00');
    await I.wait(2);
});

Scenario("15.Home-Arrivals-Add to Basket-Items-Check-out-Check-out-Total & Sub-Total Condition", async ({ I, practice_pageobjectPage }) => {
    practice_pageobjectPage.HomePageArrival();
    practice_pageobjectPage.ThreeArrivals();
    await I.click(practice_pageobjectPage.label_ImageSelenium);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_addToBasket);
    await I.waitForNavigation({});
    await I.click(practice_pageobjectPage.btn_viewBasket);
    await I.waitForNavigation({});
    await I.see('Selenium Ruby');
    await I.see('₹500.00');
    await I.wait(5);
    await I.see('Subtotal');
    await I.wait(3);
    await I.see('₹500.00');
    await I.wait(2);
    await I.see('Total');
    await I.wait(2);
    await I.see('₹510.00');
    await I.wait(2);
});