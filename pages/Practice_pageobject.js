const { I } = inject();

module.exports = {
  // insert your locators and methods here
  label_MyAccount:{xpath:'//a[contains(text(), "My Account")]'},
  input_email:{xpath: '//input[@id= "reg_email"]'},
  input_password:{xpath: '//input[@id= "reg_password"]'},
  btn_register:{xpath: '//input[@value= "Register"]'},
  input_username:{xpath: '//input[@id= "username"]'},
  input_loginPassword:{xpath: '//input[@id= "password"]'},
  btn_login:{xpath: '//input[@name= "login"]'},
  label_Shop:{xpath: '//a[contains(text(),"Shop")]'},
  label_Home:{xpath: '//a[contains(text(), "Home")]'},
  label_ImageSelenium:{xpath: '//img[@title="Selenium Ruby"]'},
  label_Review:{xpath: '//a[contains(text(),"Reviews (0)")]'},
  btn_addToBasket:{xpath: '//button[contains(text(), "Add to basket")]'},
  btn_viewBasket:{xpath: '//a[contains(text(), "View Basket")]'},
  input_noOfBooks:{xpath: '//input[@type="number"]'},
}

