const loginPage = require('../../pages/loginPage');
const allureReporter = require('@wdio/allure-reporter').default;
const {assert} = require('chai');
const inboxPage = require('../../pages/inboxPage');
const connectPage = require('../../pages/connectPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const data = require('../../data');
const commonPage = require('../../pages/commonPage');
const creds = require('../../credentials');


describe('Add note:', () => {
  beforeEach(function() {
    browser.url(data.url.liveHs);
    loginPage.login(data.credentials.emailID_hellosells, data.credentials.pwd);
    browser.maximizeWindow();
  });

	it.only(`Enter a note with random characters and verify its 
  successfully added or not and verify who added the note`, () => {
    allureReporter.addSeverity('Critical');
    allureReporter.addFeature('Add Notes');
    // inboxPage.checkSingleMsgAvailability();
    commonPage.clickSettingsTab();
    inboxPage.getLoggedInUserName();
    commonPage.clickInboxTab();
    inboxPage.clickOnAddNotesBtn();
    inboxPage.addNote(data.addNote, 'Notes');
    inboxPage.submitNote();
    assert.equal(inboxPage.NoteAdded.getText(), data.addNote);
    inboxPage.verifyWhoAddedTheNote();
  });

	it(`Submit an url and click it and 
  check whether its clickable and it loads in new tab`, () => {
		inboxPage.getLoggedInURL();
		inboxPage.clickOnAddNotesBtn();
		inboxPage.addNote(data.note.addNoteURL);
		inboxPage.submitNote();
		inboxPage.verifyURLclick();
		assert.equal(browser.getUrl(), 'https://www.answerconnect.com/');
		inboxPage.switchToApp();
	});

	it('Attach a file on add notes section ', () => {
		loginPage.login(creds.user, creds.password);
		inboxPage.clickOnAddNotesBtn();
		inboxPage.uploadFileOnNotes();
		inboxPage.submitNote();
		browser.pause(5000);
	});

	it(`@mention a user and verify it in connect tab 
  that its the same message`, () => {
		commonPage.clickSettingsTab();
		settingsPage.clickOnMyDirectory();
		inboxPage.getFirstStaffName();
		connectPage.getFirstStaffName();
		commonPage.clickInboxTab();
		inboxPage.getMessageNameOnMessageDetails();
		inboxPage.clickOnAddNotesBtn();
		inboxPage.clickOnAtMentionAndEnterName();
		inboxPage.clickOnAtMentionSuggestion();
		inboxPage.addNote(data.note.addNote);
		browser.pause(1000);
		inboxPage.submitNote();
		commonPage.clickOnConnectTab();
		connectPage.clickOnSearchBtnOnConnectTab();
		connectPage.enterValueOnGlobalSearchOnConnectTab();
		connectPage.clickOnFirstSearchResult();
		connectPage.clickOnViewMessage();
		connectPage.verifyForwardViaConnect();
	});
});
