const loginPage = require('../../pages/loginPage');
const inboxPage = require('../../pages/inboxPage');
const creds = require('../../credentials');

describe('Mark as verify: ', function() {
  before(function() {
    browser.url('./');
		browser.maximizeWindow();
    loginPage.login(creds.user, creds.password);
  });

  it(`Mark a contact as verify from inbox message section
   and verify contact is marked as verified`, function() {
    inboxPage.clickMarkAsVerify();
    inboxPage.verifyMarkAsVerified();
  });

  it(`Mark a contact as unverified from the inbox message section 
  and verify contact is marked as unverified`, function() {
    inboxPage.clickMarkAsUnverify();
    inboxPage.verifyMarkAsUnverified();
  });

  it(`Mark a contact as verified from the inbox message section
   and verify contact is verified at the contact details section`, function() {
    inboxPage.clickMarkAsVerify();
    inboxPage.verifyMarkAsVerified();
    inboxPage.clickContactName();
    inboxPage.verifyMarkAsVerified();
  });

  it(`Mark a contact as unverified from the inbox message section 
  and verify contact is unverified at the
   contact details section`, function() {
    inboxPage.clickBackIconFromContact();
    inboxPage.clickMarkAsUnverify();
    inboxPage.verifyMarkAsUnverified();
    inboxPage.clickContactName();
    inboxPage.verifyMarkAsUnverified();
  });

  it(`Mark a contact as verified from the contact details section and verify 
  contact is verified at both the contact details section 
  and inbox message section`, function() {
    inboxPage.clickMarkAsVerify();
    inboxPage.verifyMarkAsVerified();
    inboxPage.clickBackIconFromContact();
    inboxPage.verifyMarkAsVerified();
  });

  it(`Mark a contact as unverified from the contact details section 
  and verify contact is unverified at both 
  the contact details section and inbox message section`, function() {
    inboxPage.clickContactName();
    inboxPage.clickMarkAsUnverify();
    inboxPage.verifyMarkAsUnverified();
    inboxPage.clickBackIconFromContact();
    inboxPage.verifyMarkAsUnverified();
  });
});
