/* eslint-disable new-cap */
const loginPage = require('../page-objects/login/login.page');
const data = require('../test-data/data');
const {Given, When, Then} = require('@cucumber/cucumber');
const myAccountPage = require('../page-objects/dashboard/myAccount.page');

Given('load the url', async ()=>{
	await browser.url('./');
});
 
When('the user enters the existing valid credentials', async ()=>{
	  await loginPage.login(data.credentials.emailId, data.credentials.password);
});

Then('they should be able to login', async () =>{
	await browser.checkDisplayed(await myAccountPage.myAccountBtn)
});

Given('load the url and login with valid credentials', async ()=>{
	await browser.url('./');
	await loginPage.login(data.credentials.emailId, data.credentials.password);

});
 
When('the user clicks on Sign out button', async ()=>{
    await browser.customClick(await myAccountPage.signoutBtn, 'signout button');
});

Then('the user should be logged out of the application', async () =>{
    await browser.checkDisplayed(await loginPage.alreadyRegisteredTxt, 'signout button')
});
