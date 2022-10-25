const { Practice_Automation } = require("./pages/practicePO");

Feature('Practice_Automation_Testing');

Scenario('Registration & Login', ({ I }) => {

    I.amOnPage('https://practice.automationtesting.in/');
    I.click(Practice_Automation.locators.label_MyAccount);
});
