const assert=require('assert');
Feature('Practice_Automation_Testing');

Scenario('Registration & Login', async({ I, practice_pageobjectPage }) => {
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
});
Scenario('2. Home Page with three Arrivals only', async({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(practice_pageobjectPage.label_Shop, 3);
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(3);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(3);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals==3);
await assert.equal(numOfArrivals,3);
});