const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const data = require('../../data');
const inboxPage = require('../../pages/inboxPage');
const creds = require('../../credentials');

describe('Business line test cases: ', () => {
	before(function() {
		browser.url('./');
		browser.maximizeWindow();
	});

	it(`On click of chat support tab, it has to 
  open in new tab and it should be logged in`, () => {
		loginPage.login(creds.user, creds.password);
		commonPage.clickSettingsTab();
		settingsPage.clickOnLiveChatTab();
		settingsPage.clickOnLaunchApp();
		settingsPage.clickOnLiveChatTab_verifyItsLoggedIn();
	});

	it(`On click of scheduling tab, it has to open in
   new tab and it should be logged in`, () => {
		browser.switchWindow(data.url.liveAC);
		settingsPage.clickOnBackBtn_addOn();
		settingsPage.clickOnSchedulingTab();
		settingsPage.clickOnLaunchApp();
		settingsPage.clickOnSchedulingTab_verifyItsLoggedIn();
	});

	it(`On click of IVR tab, it has to open in new tab
   and it should be logged in`, () => {
		browser.switchWindow(data.url.liveAC);
		settingsPage.clickOnBackBtn_addOn();
		settingsPage.clickOnIVRTab();
		settingsPage.clickOnLaunchApp();
		settingsPage.clickOnIVRTab_verifyItsLoggedIn();
	});

	it(`Verify account numbers are same in service tab
   and in inbox dropdown`, () => {
		browser.switchWindow(data.url.liveAC);
		settingsPage.clickOnBackBtn_addOn();
		settingsPage.clickOnBusinessLineTab();
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
		settingsPage.clickOnBusinessLineTab();
		settingsPage.getFirstAccountNumber_OnServices();
		settingsPage.clickOnFirstAccountNumber();
		settingsPage.enterBusinesNameAnd_VerifyInboxAndSettings();
	});

	it('Set an 8xx as default and verify that', () => {
		commonPage.clickSettingsTab();
		settingsPage.clickOnBusinessLineTab();
		settingsPage.getSecondAccountNumber();
		settingsPage.clickOnSetAsDefaultBtn();
		settingsPage.clickOnProceed_setAsDefault();
		settingsPage.verifySetDefault_SuccessMessage();
		settingsPage.verifyStarIcon();
	});
});
