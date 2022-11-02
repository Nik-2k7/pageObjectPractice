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
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_username, 'xyz@gmail.com');
    I.fillField(practice_pageobjectPage.input_loginPassword, 'Test@1234!');
    I.click(practice_pageobjectPage.btn_login);
    I.wait(2);
});

Scenario('1. Home Page with Three Sliders Only', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(2);
    let numOfSliders = await I.grabNumberOfVisibleElements('//img[@data-x="50"]');
    console.log(numOfSliders == 3);
    await assert.equal(numOfSliders, 3);
});

Scenario('2. Home Page with three Arrivals only', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(practice_pageobjectPage.label_Shop, 3);
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(3);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(3);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
});

Scenario('3. Home Page - Images in Arrivals should navigate', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(2);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(2);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(2);
});

Scenario("4.Home page - Arrivals-Images-Description", async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(2);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(2);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(2);
    I.see('Product Description');
});

Scenario('5.Home page - Arrivals-Images-Review', async ({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(2);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(2);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Review);
    I.see('Reviews');
});
