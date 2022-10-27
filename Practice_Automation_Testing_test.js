const assert=require('assert');
Feature('Practice_Automation_Testing');

Scenario('7.Home page - Arrivals-Add to Basket with more books', async({ I, practice_pageobjectPage }) => {
    I.amOnPage('https://practice.automationtesting.in');
    I.click(practice_pageobjectPage.label_Shop);
    I.wait(2);
    I.click(practice_pageobjectPage.label_Home);
    I.wait(5);
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals==3);
    await assert.equal(numOfArrivals,3);
    I.wait(3);
    I.click(practice_pageobjectPage.label_ImageSelenium);
    I.wait(2);
    I.fillField(practice_pageobjectPage.input_noOfBooks, '8706');
    I.click(practice_pageobjectPage.btn_addToBasket);
    I.wait(3);
    });
