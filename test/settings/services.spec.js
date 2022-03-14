const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage');
const commonPage = require('../../pages/commonPage');
const data = require('../../data');
const inboxPage = require('../../pages/inboxPage');

describe('Services tab test cases: ', () => {
  before(function() {
    browser.url(data.url.liveAC);
    browser.maximizeWindow();
  });

  it(`On click of chat support tab, it has to 
  open in new tab and it should be logged in`, () => {
    loginPage.login(data.credentials.emailID_answerConnect, data.credentials.pwd);
    commonPage.clickSettingsTab();
    settingsPage.clickOnServicesTab();
    settingsPage.clickOnChatSupportTab_verifyItsLoggedIn();
  });

  it(`On click of scheduling tab, it has to open in
   new tab and it should be logged in`, () => {
    browser.switchWindow(data.url.liveAC);
    settingsPage.clickOnSchedulingTab_verifyItsLoggedIn();
  });

  it(`On click of IVR tab, it has to open in new tab
   and it should be logged in`, () => {
    browser.switchWindow(data.url.liveAC);
    settingsPage.clickOnIVRTab_verifyItsLoggedIn();
  });

  it(`Verify account numbers are same in service tab
   and in inbox dropdown`, () => {
    browser.switchWindow(data.url.liveAC);
    settingsPage.getListOf8xxOnServices();
    commonPage.clickInboxTab();
    inboxPage.clickOnAllMessageDropdown();
    browser.pause(2000);
    settingsPage.getListOf8xxOnInbox();
    settingsPage.verifySameAccountNumbersOnInboxAndSettings();
  });

  it(`Business name entered on services
   tab has to be synced on inbox`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickOnServicesTab();
    settingsPage.getFirstAccountNumber_OnServices();
    settingsPage.clickOnFirstAccountNumber();
    settingsPage.enterBusinesName_OnFirstAccount();
    settingsPage.clickOnSaveBtn_ReceptionistProfile();
    settingsPage.verifyBusinessName_successMessage();
    settingsPage.clickOnBackBtn_OnReceptionistProfile();
    settingsPage.verifyBusinessNameSaved_OnServices();
    commonPage.clickInboxTab();
    browser.pause(2000);
    inboxPage.clickOnAllMessageDropdown();
    // Bug, dropdown opened in last TC was not closed.
    // So on clicking now, it will close. Hence TC will fail
    browser.pause(3000);
    settingsPage.verifyBusinessNameSaved_OnInbox();
  });

  it('Set an 8xx as default and verify that', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickOnServicesTab();
    settingsPage.getSecondAccountNumber();
    settingsPage.clickOnSetAsDefaultBtn();
    settingsPage.clickOnProceed_setAsDefault();
    settingsPage.verifySetDefault_SuccessMessage();
    settingsPage.verifyStarIcon();
  });
});
