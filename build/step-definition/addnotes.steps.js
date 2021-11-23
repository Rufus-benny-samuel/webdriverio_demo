/* eslint-disable new-cap */
const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const inboxDetails = require('../page-objects/inbox/inboxDetails.page');
const {assert} = require('chai');
const {Given, When, Then} = require('@cucumber/cucumber');
const creds = require('../../credentials');

Given('Load the url with valid credentials', async ()=>{
  //await browser.maximizeWindow();
	await browser.url('./');
  await loginPage.login(creds.user, creds.password);
});

When('a note is added', async ()=>{
	await browser.customClick(await inboxDetails.addNoteBtn, 'Add notes button');
  await inboxDetails.addNote(data.addNote, 'Notes');
	await browser.customClick(await inboxDetails.submitAddNoteEle, 'Submit note');
});

Then('Verify the added notes', async () =>{
  const notesAdded = await $('//div[@class="ib-notes-text"]');
  await assert.equal(await notesAdded.getText(), data.addNote);
});

When('a note is added with valid url', async () => {
	await browser.customClick(await inboxDetails.addNoteBtn, 'Add notes button');
	await inboxDetails.enterUrl(data.addNoteURL, 'Notes')
	await browser.customClick(await inboxDetails.submitAddNoteEle, 'Submit note');
})

Then('I verify the added notes', async () => {
	await browser.customClick(await inboxDetails.URLinAddNote)
	await browser.switchWindow(data.addNoteURL)
	//await	assert.equal(browser.getUrl(), data.addNoteURL);
})
