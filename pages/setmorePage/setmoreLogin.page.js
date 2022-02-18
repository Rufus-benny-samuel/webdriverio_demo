class SetmoreLogin {
  get emailField() {
    return $('//input[@id="username"]');
  }
  get passwordField() {
    return $('//input[@id="password"]');
  }
  get signInButton() {
    return $('//a[@id="login-now"]');
  }
  get settingsTab() {
    return $('[data-tips="Settings"]');
  }

  setmoreLogin(email, password) {
    browser.customSetValue(this.emailField, email, 'Email Field');
    browser.customSetValue(this.passwordField, password, 'Password Field');
    browser.customClick(this.signInButton, 'SignIn Button');
    this.settingsTab.waitForDisplayed({timeout: 45000});
  }
}
module.exports = new SetmoreLogin();
