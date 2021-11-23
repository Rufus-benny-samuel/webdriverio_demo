class MyAccount {
// Account Details
  get businessName() {
    return $('[data-field="businessName"]');
  }

  // Business Hours
  get timeZone() {
    return $('//h4[text()="Time Zone"]');
  }
}
module.exports = new MyAccount;
