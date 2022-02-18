const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const commonPage = require('../page-objects/common/commonPage');
const inboxDetails = require('../page-objects/inbox/inboxDetails.page');
const {assert} = require('chai');
const {Given, When, Then} = require('@cucumber/cucumber');
const creds = require('../../credentials');
const inboxRightPage = require('../page-objects/inbox/inboxRight.page');
const myProfilePage = require('../page-objects/settings/myProfile.page');

let loggedInUserName;

Given('load the url with valid credentials', async () => {
await browser.maximizeWindow();
await browser.url('./');
await loginPage.login(creds.user, creds.password);
})

When('The user shares a message, it has to send a message via connect tab ', async () => {
await browser.customClick(await commonPage.settingsTab, 'settings tab');
loggedInUserName = await browser.customGetText(await myProfilePage.loginUserName, 'Logged in user name');
await browser.customClick(await inboxDetails.shareBtn, 'share button');
await browser.customClick(await inboxDetails.shareThroughEmailBtn, 'Share through email');
await browser.customSetValue(await inboxDetails.setEmailToForward, 'rufus.robert@anywhere.co');
await browser.customSetValue(await inboxDetails.setNotesToForward, 'test');
await browser.customClick(await inboxDetails.sendButtonOnForward);
})

Then('verify who added the note', async () =>{	
const actualLoggedInUsername = await browser.customGetText(await inboxRightPage.whoAddedNotes, 'who forwarded note')
await assert.equal(actualLoggedInUsername, `Forwarded by ${loggedInUserName}`)
})