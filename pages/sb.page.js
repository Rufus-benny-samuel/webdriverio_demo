const data = require('../data');

class SB {
  // Page objects
  get closeButton() {
    return $('div.greeting i');
  }
  get updatedStatus() {
    return $('.statusUpdateCard p');
  }
  get emailField() {
    return $('#email');
  }
  get passwordField() {
    return $('#pwd');
  }
  get signIn() {
    return $('#login-btn');
  }
  // Reusable functions
  openSbURL(account) {
    browser.newWindow(data.otherUrl.LiveSBUrl + account);
    // browser.switchWindow('SB');
  }
}
module.exports = new SB();
