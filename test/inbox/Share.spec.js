const loginPage = require('../../pages/loginPage');
const inboxPage = require('../../pages/inboxPage');
const data = require('../../data');
const connectPage = require('../../pages/connectPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const creds = require('../../credentials');

describe('share interaction: ', function() {
	before(function() {
		browser.url('./');
		browser.maximizeWindow();
	});

	it.only(`Forward a message to email and verify forward message note,
   who forwarded the note and its toAddress`, () => {
		loginPage.login(creds.user, creds.password);
		commonPage.clickSettingsTab();
		browser.pause(4000);
		inboxPage.getLoggedInUserName();
		commonPage.clickInboxTab();
		inboxPage.clickOnShareBtn();
		inboxPage.clickOnForwardToEmail();
		inboxPage.enterEmailToForward(data.forward.forwardEmail);
		inboxPage.enterNotesToForward(data.forward.forwaredNotes);
		inboxPage.clickOnSendBtnToForward();
		inboxPage.verifyWhoForwardedNote();
		inboxPage.verifyForwardMsgToAddress();
		inboxPage.verifyForwardMessageNote();
	});

	it(`Forward message to connect and cross verify in connect tab whether
   message has been sent or not`, () => {
		commonPage.clickSettingsTab();
		inboxPage.getLoggedInUserName();
		settingsPage.clickOnMyDirectory();
		inboxPage.getFirstStaffName();
		connectPage.getFirstStaffName();
		commonPage.clickInboxTab();
		inboxPage.getMessageNameOnMessageDetails();
		inboxPage.clickOnShareBtn();
		inboxPage.clickOnForwardToConnect();
		inboxPage.enterNameToForwardViaConnect();
		inboxPage.clickOnSuggestionOnForwardViaConnect();
		inboxPage.enterNotesToForwardViaConnect();
		inboxPage.clickOnShareButtonOnForwardViaConnectScreen();
		connectPage.clickOnConnectTab();
		connectPage.clickOnSearchBtnOnConnectTab();
		connectPage.enterValueOnGlobalSearchOnConnectTab();
		connectPage.clickOnFirstSearchResult();
		connectPage.clickOnViewMessage();
		connectPage.getMessageNameOnViewMessagePopup();
		connectPage.verifyForwardViaConnect();
	});
});
