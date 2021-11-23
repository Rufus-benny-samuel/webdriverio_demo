const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const inboxDetails = require('../page-objects/inbox/inboxDetails.page');
const {assert} = require('chai');
const {Given, When, Then} = require('@cucumber/cucumber');
const creds = require('../../credentials');
const inboxRightPage = require('../page-objects/inbox/inboxRight.page');


Given('load the url with valid credentials', async () => {
//await browser.maximizeWindow();
await browser.url('./');
await loginPage.login(creds.user, creds.password);
})

When('The user shares a message', async () => {
await browser.customClick(await inboxDetails.shareBtn, 'share button')
await browser.customClick(await inboxDetails.shareThroughEmailBtn, 'Share through email')
await browser.customSetValue(await inboxDetails.setEmailToForward, 'rufus.robert@anywhere.co')
await browser.customSetValue(await inboxDetails.setNotesToForward, 'test')
await browser.customClick(await inboxDetails.sendButtonOnForward)
})

Then('It has to send a message via connect tab', async () =>{	
await assert.equal(await (await inboxRightPage.forwareded_by).getText(), 'Note by Rufus Benny');
})