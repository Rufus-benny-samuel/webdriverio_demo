/* eslint-disable new-cap */
const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const {Given, When, Then} = require('@cucumber/cucumber');
const myAccountPage = require('../page-objects/dashboard/myAccount.page');

Given('load the url', async ()=>{
	await browser.url('./');
});
 
When('the user enters the existing valid credentials, they should be able to login', async ()=>{
	  await loginPage.login(data.credentials.emailId, data.credentials.password);
});

Then('logout of the application', async () =>{
    await browser.customClick(await myAccountPage.signoutBtn, 'signout button')
});
