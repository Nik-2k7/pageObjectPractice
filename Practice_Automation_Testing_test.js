const assert = require('assert');
Feature('Practice_Automation_Testing');

Scenario('Registration & Login', ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(practice_pageobjectPage.label_MyAccount, 3);
    I.click(practice_pageobjectPage.label_MyAccount);
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_username, 'xyz@gmail.com');
    I.fillField(practice_pageobjectPage.input_loginPassword, 'Test@1234!');
    I.click(practice_pageobjectPage.btn_login);
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_username, 'xyz@gmail.com');
    I.fillField(practice_pageobjectPage.input_loginPassword, 'Test@1234!');
    I.click(practice_pageobjectPage.btn_login);
    I.wait(2);
});

Scenario('1. Home Page with Three Sliders Only', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfSliders = await I.grabNumberOfVisibleElements('//img[@data-x="50"]');
    console.log(numOfSliders == 3);
    await assert.equal(numOfSliders, 3);
});

Scenario('2. Home Page with three Arrivals only', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(practice_pageobjectPage.label_Shop, 3);
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
});

Scenario('3. Home Page - Images in Arrivals should navigate', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
});

Scenario("4.Home page - Arrivals-Images-Description", async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.see('Product Description');
    I.see(2);
});

Scenario('5.Home page - Arrivals-Images-Review', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.click(practice_pageobjectPage.label_Review);
    I.see('Reviews');
    I.see(2);
});

Scenario('6.Home page - Arrivals-Images-Add to Basket', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
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
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(3);
    I.fillField(practice_pageobjectPage.input_noOfBooks, '8706');
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.wait(3);
});

Scenario("9.Home-Arrivals-Add to Basket-Items-Coupon", async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.waitForNavigation({});
    I.click(practice_pageobjectPage.label_Home);
    I.waitForNavigation({});
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(5);
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