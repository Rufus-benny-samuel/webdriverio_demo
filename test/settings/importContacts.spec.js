const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const data = require('../../data');
const myDirectory = require('../../pages/settingsPage/settings.mydirectory.page');
const path = require('path');
const { expect } = require('chai');
const creds = require('../../credentials');

describe('Import contacts functionality', () => {
  before(function() {
		browser.maximizeWindow();
    browser.url('./');
    loginPage.login(creds.user, creds.password);
  });

  it('Import the contact and verify contacts are imported', () => {
    browser.customClick(commonPage.settingsTab, 'Settings Tab');
    browser.customClick(settingsPage.myDirectory, 'My Directory');
    browser.customClick(myDirectory.contactTab, 'Contact Tab');
    browser.customClick(myDirectory.addContact, 'Add button');
    const filePath = path.join(__dirname, '../../External files/importContacts.csv');
    const remoteFilePath = browser.uploadFile(filePath);
    myDirectory.importContact.setValue(remoteFilePath);
    browser.customClick(myDirectory.addButton, 'Add button');
    browser.customClick(myDirectory.importButton, 'Import button');
    myDirectory.notificationMessage.waitForDisplayed({timeout: 10000});
    const notification = browser.customGetText(myDirectory.notificationMessage, 'Notification');
    expect(notification).to.contains('Importing contacts are work in process, please wait...');
    myDirectory.notificationMessage.waitForDisplayed({ reverse: true });
    const confirmation = browser.customGetText(myDirectory.notificationMessage, 'Confirmation Notification');
    expect(confirmation).to.contains('Contacts are successfully imported');
  });
});
