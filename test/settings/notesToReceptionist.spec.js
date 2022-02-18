const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const data = require('../../data');
const noteToReceptionistPage = require('../../pages/settingsPage/settings.noteToReceptionistPage');
const sb = require('../../pages/sb.page');
const { expect } = require('chai');
const creds = require('../../credentials');

let accountNumber;
let loginBrand;

describe('Note for receptionist functionality test case', () => {
  before(function() {
		browser.maximizeWindow();
    browser.url('./');
    loginPage.login(creds.user, creds.password);
  });

  it('Add a note for receptionist and verify in SwitchBoard', () => {
    if (noteToReceptionistPage.deleteNote.isDisplayed()) {
      browser.customClick(noteToReceptionistPage.deleteNote, 'Deleted old notes');
    }
    loginBrand = browser.getTitle();
    browser.customClick(commonPage.settingsTab, 'settings Tab');
    browser.customClick(settingsPage.notesToReceptionist, 'Notes To Receptionist Tab');
    accountNumber = browser.customGetText(noteToReceptionistPage.number, 'Account Number');
    browser.customSetValue(noteToReceptionistPage.addNotesText, data.noteForReceptionist.new, 'Notes Section');
    browser.customClick(noteToReceptionistPage.datePicker, 'Date Picker');
    browser.customClick(noteToReceptionistPage.nextDay, 'Next Day');
    browser.customClick(noteToReceptionistPage.saveButton, 'Save Button');
    const notification = browser.customGetText(noteToReceptionistPage.notification, 'Notification');
    expect(notification).to.equal('Agent note updated successfully !');
    browser.newWindow(data.otherUrl.LiveSBUrl + accountNumber);
    browser.customSetValue(sb.emailField, data.credentials.adminEmail, 'SB Login email');
    browser.customSetValue(sb.passwordField, data.credentials.adminPwd, 'SB Password');
    browser.customClick(sb.signIn, 'SignIn button');
    sb.closeButton.waitForClickable({ timeout: 15000 });
    browser.customClick(sb.closeButton, 'Close button');
    const addedNotes = browser.customGetText(sb.updatedStatus, 'Updated Status');
    expect(addedNotes).to.contains(data.noteForReceptionist.new);
  });

  it('Edit the notes and verify in SwitchBoard', () => {
    browser.switchWindow(loginBrand);
    browser.customClick(noteToReceptionistPage.editNote, 'Edit notes');
    noteToReceptionistPage.addNotesText.clearValue();
    browser.customSetValue(noteToReceptionistPage.addNotesText, data.noteForReceptionist.edit, 'Notes Section');
    browser.customClick(noteToReceptionistPage.datePicker, 'Date Picker');
    browser.customClick(noteToReceptionistPage.nextDay, 'Next Day');
    browser.customClick(noteToReceptionistPage.saveButton, 'Save Button');
    const notification = browser.customGetText(noteToReceptionistPage.notification, 'Notification');
    expect(notification).to.equal('Agent note updated successfully !');
    browser.switchWindow('SB');
    browser.pause(3000);
    browser.refresh();
    browser.customClick(sb.closeButton, 'Close button');
    const addedNotes = browser.customGetText(sb.updatedStatus, 'Updated Status');
    expect(addedNotes).to.contains(data.noteForReceptionist.edit);
  });

  it('Delete the agent notes and verify in SwitchBoard', () => {
    browser.switchWindow(loginBrand);
    browser.customClick(noteToReceptionistPage.deleteNote, 'Delete notes');
    const notification = browser.customGetText(noteToReceptionistPage.notification, 'Notification');
    expect(notification).to.equal('Agent note deleted successfully !');
    browser.switchWindow('SB');
    browser.pause(3000);
    browser.refresh();
    browser.customClick(sb.closeButton, 'Close button');
    wdioExpect(sb.updatedStatus).not.toBeDisplayed();
  });
});
