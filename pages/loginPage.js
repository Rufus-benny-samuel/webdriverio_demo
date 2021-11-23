const elementUtil = require('../utils/elementUtil');
class LoginPage {
	get emailIdEle() {
		return $('[name= "email"]');
	}
	get passwordEle() {
		return $('[name= "password"]');
	}
	get loginBtnEle() {
		return $('//button[@class="button-primary "]');
	}
	get userA_loginBtn() {
		return $('//button[@class="button-primary "]');
	}
	get userB_LoginBtn() {
		return $('//button[@class="button-primary "]');
	}
	get getStartedEle() {
		return $('//button[text()="Get started"]');
	}
	get forgetPasswordEle() {
		return $('//*[text()="Forgot Password?"]');
	}
	get sendForgetPasswordLinkEle() {
		return $('//*[text()="Send Link"]');
	}
	get backToLoginEle() {
		return $('//button[@class="button-primary"]');
	}
	get awEmail() {
		return $('#user-email');
	}
	get awPassword() {
		return $('#user-password');
	}
	get awLogin() {
		return $('#process-login');
	}
	get inboxHeaderCheck() {
		return $('//h1[text()="Inbox"]');
	}
	get addNoteBtn() {
		return $('//button[@class="fx-c g-btn-secondary round-edge mr-4"]');
	}

	// async login(email, password) {
	//   await customSetValue(this.emailIdEle, email, 'Email field');
	//   await customSetValue(this.passwordEle, password, 'Password field');
	//   await customClick(this.loginBtnEle, 'Login button');
	//   await this.inboxHeaderCheck.waitForDisplayed({timeout: 45000});
	// }

	login(email, password) {
		elementUtil.doSetvalue(this.emailIdEle, email);
		elementUtil.doSetvalue(this.passwordEle, password);
		elementUtil.doClick(this.loginBtnEle);
		 this.inboxHeaderCheck.waitForExist({timeout: 45000});
	}

	// Aw's login page element(incase if we wanna run in non-default version)
	anywhereworksLogin(email, pass) {
		browser.url('https://pre-alpha.anywhereworks.com');
		browser.maximizeWindow();
		elementUtil.doSetvalue(this.awEmail, email);
		elementUtil.doSetvalue(this.awPassword, pass);
		elementUtil.doClick(this.awLogin);
		this.inboxHeaderCheck.waitForDisplayed({timeout: 45000});
	}

	forgetPassword(email) {
		elementUtil.doClick(this.forgetPasswordEle);
		elementUtil.doSetvalue(this.emailIDele, email);
		elementUtil.doClick(this.sendForgetPasswordLinkEle);
		console.log(
			'Reset password link sent was',
			elementUtil.checkIsDisplayed(this.backToLoginEle),
		);
	}
}
module.exports = new LoginPage();
