/* eslint-disable new-cap */
const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const inboxDetails = require('../page-objects/inbox/inboxDetails.page');
const {assert} = require('chai');
const {Given, When, Then} = require('@cucumber/cucumber');
const creds = require('../../credentials');
const inboxRightPage = require('../page-objects/inbox/inboxRight.page');
const commonPage = require('../page-objects/common/commonPage');
const myProfilePage = require('../page-objects/settings/myProfile.page');

let loggedInUserName;
Given('Load the url with valid credentials', async () => {
	await browser.maximizeWindow();
	await browser.url('./');
  await loginPage.login(creds.user, creds.password);
});
 
When(/^(.*)(?:st|nd|rd|th) message is opened and a note (.*) is added$/, async (msgNo, note) => { 
	await commonPage.clickOnSettingsTab();
	await myProfilePage.getLoggedInUserName();
	// loggedInUserName = await browser.customGetText(await myProfilePage.loginUserName, 'Logged in user name');
	await commonPage.clickOnInboxTab();
	await inboxDetails.openMessage(msgNo);
	await inboxDetails.addNote(note);
});

Then(/^Verify the added note is (.*) and who add it$/, async (note) => {
  const notesAdded = await browser.customGetText(await inboxRightPage.notesSection, 'Notes section');
  await assert.equal(await notesAdded, note);
	await browser.customGetText(await inboxRightPage.whoAddedNotes, 'who added note');
//  await assert.equal(actualLoginName, `Note by ${loggedInUserName}`);
});

When('a note is added with valid url', async () => {
	await inboxDetails.addNote(data.addNoteURL);
})

Then('verify whether the link attached is clickable or not', async () => {
	await browser.customClick(await inboxDetails.URLinAddNote)
	await browser.switchWindow(data.addNoteURL)
	await	assert.equal(await browser.getUrl(), data.addNoteURL);
})