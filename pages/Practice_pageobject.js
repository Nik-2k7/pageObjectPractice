const { I } = inject();

module.exports = {
  // insert your locators and methods here
  label_MyAccount: { xpath: '//a[contains(text(), "My Account")]' },
  input_email: { xpath: '//input[@id= "reg_email"]' },
  input_password: { xpath: '//input[@id= "reg_password"]' },
  btn_register: { xpath: '//input[@value= "Register"]' },
  input_username: { xpath: '//input[@id= "username"]' },
  input_loginPassword: { xpath: '//input[@id= "password"]' },
  btn_login: { xpath: '//input[@name= "login"]' },
  label_Shop: { xpath: '//a[contains(text(),"Shop")]' },
  label_Home: { xpath: '//a[contains(text(), "Home")]' },
  label_ImageSelenium: { xpath: '//img[@title="Selenium Ruby"]' },
  label_Review: { xpath: '//a[contains(text(),"Reviews (0)")]' },
  btn_addToBasket: { xpath: '//button[contains(text(), "Add to basket")]' },
  btn_viewBasket: { xpath: '//a[contains(text(), "View Basket")]' },
  input_coupon: { xpath: '//input[@placeholder="Coupon code"]' },
  label_applyCoupon: { xpath: '//input[@value="Apply Coupon"]' },
  input_noOfBooks: { xpath: '//input[@type="number"]' },
  input_ImgMasteringJavacript: {xpath: '//img[@title="Mastering JavaScript"]'},
  label_remove: {xpath: '//a[@title="Remove this item"]'},

  HomePageArrival() {
    I.amOnPage('https://practice.automationtesting.in/');
    I.waitForElement(this.label_Shop, 3);
    I.click(this.label_Shop);
    I.waitForNavigation({});
    I.click(this.label_Home);
    I.waitForNavigation({});
  },

  async ThreeArrivals() {
    let numOfArrivals = await I.grabNumberOfVisibleElements('//img[@sizes="(max-width: 300px) 100vw, 300px"]');
    console.log(numOfArrivals == 3);
    await assert.equal(numOfArrivals, 3);
    I.wait(3);
  }
}

