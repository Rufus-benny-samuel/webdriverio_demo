//const myAccountPage = require('../page-objects/dashboard/myAccount.page');

const myAccountPage = require("../dashboard/myAccount.page");

class LoginPage {


	get signInBtn(){
		return $('//a[@title="Log in to your customer account"]');
	}

  get emailIdEle() {
    return $('//input[@id="email"]');
  }
  get passwordEle() {
		return $('//input[@id="passwd"]'); 
	 }
  get loginBtnEle() {
    return $('//i[@class="icon-lock left"]');
  }
	get alreadyRegisteredTxt(){
		return $("//h3[text()='Already registered?']")
	}
  
  async login(email, password) {
		await browser.customClick(await this.signInBtn, 'sign-in button')
    await browser.customSetValue(await this.emailIdEle, email, 'Email field');
    await browser.customSetValue(await this.passwordEle, password, 'Password');
    await browser.customClick(await this.loginBtnEle, 'Login button');
		await browser.waitUntilDisplayed(await myAccountPage.myAccountBtn, 10000);
	 }
}
module.exports = new LoginPage();
