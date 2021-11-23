const inboxPage = require('../../pages/inboxPage');
const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const phonePage = require('../../pages/phonePage');
const creds = require('../../credentials');

describe('contacts: ', () => {
  before(function() {
    browser.url('./');
		browser.maximizeWindow();
  });

  it(`Edit all fields on Contact from inbox tab and verify all those
  are updated in inbox tab, phone tab & settings tab contacts`, () => {
    loginPage.login(creds.user, creds.password);
    inboxPage.checkContactAvailabilityToEdit();
    inboxPage.getProfileDetailsOnContactDetails();
    inboxPage.clickOnHambergerIconOnContacts();
    inboxPage.clickOnEditContactBtn();
    inboxPage.getContactFirstName();
    inboxPage.editLastNameOnContacts();
    inboxPage.editCompanyNameOnContacts();
    inboxPage.editRoleOnContacts();
    inboxPage.editEmailOnContacts();
    inboxPage.clickOnCountryCodeOnEditContact();
    inboxPage.searchOnCountryCodePopup();
    inboxPage.selectCountryCodeFromSuggestion();
    inboxPage.editPhoneNumberOnContacts();
    inboxPage.clickOnSaveBtnOnEditContact();
    browser.pause(4000);
    inboxPage.verifyLastNameOnContactDetail();
    inboxPage.verifyRoleOnContactDetail();
    inboxPage.verifyEmailOnContactDetail();
    inboxPage.verifyPhoneOnContactDetail();
    inboxPage.verifyCompanyNameOnContactDetail();
    inboxPage.getProfileDetailsOnContactDetailsAfterEditing();
    inboxPage.getContactName();
    settingsPage.getContactName();
    phonePage.getContactName();
    commonPage.clickOnPhoneTab();
    phonePage.clickOnSearchIcon();
    phonePage.clickOnContactsTab();
    phonePage.enterContactNameOnSearchField();
    phonePage.clickOnUpdatedSearchResult();
    browser.pause(5000);
    phonePage.getContactProfileDetailsOnContactDetails();
    commonPage.clickSettingsTab();
    settingsPage.clickOnMyDirectory();
    settingsPage.clickOnContactsOnSettingsTab();
    settingsPage.clickOnSearchBtnOnContact();
    settingsPage.enterContactNameOnSearchField();
    settingsPage.clickOnUpdatedContactSearchResult();
    browser.pause(5000);
    settingsPage.getEmailAndPhoneFromSettingsContactDetails();
    settingsPage.verifyEditedContactsOnInboxPhoneSettingsTab();
  });

  it.skip(`Delete contact and verify mark as verify button should not display,
message header should not be clickable on inbox tab and 
verify contact deletion on phone tab and on settings tab`, () => {
    commonPage.clickInboxTab();
    inboxPage.clickOnMessageNameOnMessageDetails();
    settingsPage.getContactName();
    phonePage.getContactName();
    inboxPage.clickOnHambergerIconOnContacts();
    inboxPage.clickOnDeleteContactBtn();
    inboxPage.clickOnConfirmDeleteBtn();
    browser.pause(4000);
    inboxPage.checkContactAvailability();
    inboxPage.checkMarkAsVerifyAvailability();
    commonPage.clickOnPhoneTab();
    phonePage.clickOnSearchIcon();
    phonePage.clickOnContactsTab();
    phonePage.enterContactNameOnSearchField();
    phonePage.checkNoContactsToDisplay();
    commonPage.clickSettingsTab();
    settingsPage.clickOnMyDirectory();
    settingsPage.clickOnContactsOnSettingsTab();
    settingsPage.clickOnSearchBtnOnContact();
    settingsPage.enterContactNameOnSearchField();
    settingsPage.checkNoResultFoundMessage();
  });

  // Add contact
  it(`Verify whether Name and phone fields are 
  mandatory to add new contact`, () => {
    browser.refresh();
    commonPage.clickSettingsTab();
    settingsPage.clickOnMyDirectory();
    settingsPage.clickOnContactsOnSettingsTab();
    settingsPage.clickOnAddContactBtn();
    settingsPage.clickOnSaveNewContact();
    settingsPage.verifyNameFieldErrorClass();
    settingsPage.verifyPhoneFieldErrorClass();
  });

  it(`Enter invalid phone number and check whether error 
  class is displaying and not allowing user to add contact`, () => {
    settingsPage.enterContactNameOn_FirstNewContact();
    settingsPage.enterPhoneOn_FirstNewContact();
    settingsPage.clickOnSaveNewContact();
    settingsPage.verifyPhoneFieldErrorClass();
  });

  it(`Enter invalid Email ID and check whether error class 
  is displaying and not allowing user to add contact`, () => {
    settingsPage.enterInvalidEmailOn_FirstNewContact();
    settingsPage.clickOnSaveNewContact();
    settingsPage.verifyEmailFieldErrorClass();
  });

  it(`Check whether back button is redirecting 
  to contacts detail view page`, () => {
    settingsPage.clickOnBackBtnOnContact();
    settingsPage.checkContactHeader();
  });

  it(`Enter name email and phone and click on clear 
  button and check whether it clear all input fields`, () => {
    settingsPage.clickOnAddContactBtn();
    settingsPage.enterContactNameOn_FirstNewContact();
    settingsPage.enterPhoneOn_FirstNewContact();
    settingsPage.enterEmailOn_FirstNewContact();
    settingsPage.clickOnAddMorePeopleOnNewContact();
    settingsPage.clickOnCloseBtnOn_FirstNewContact();
    settingsPage.verifyContactsAreCleared();
  });

  it(`Add new contact and verify it is saved properly 
  and contact is marked as verified by itself`, () => {
    settingsPage.enterContactNameOn_NewContact();
    settingsPage.enterIndianCountryCodeOn_firstNewContact();
    settingsPage.enterPhoneOn_FirstNewContact();
    settingsPage.enterEmailOn_FirstNewContact();
    settingsPage.clickOnSaveNewContact();
    settingsPage.checkContactsAddedNotification();
    settingsPage.clickOnFirstContact();
    settingsPage.verifyNewlySavedContact();
    inboxPage.verifyMarkAsVerified();
  });

  it(`Add two or more contacts at the same time and 
  verify whether those contacts are saved properly`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickMyDirectorySection();
    settingsPage.clickOnContactsOnSettingsTab();
    settingsPage.clickOnAddContactBtn();
    settingsPage.enterContactNameOn_FirstNewContact();
    settingsPage.enterIndianCountryCodeOn_firstNewContact();
    settingsPage.enterPhoneOn_FirstNewContact();
    settingsPage.enterEmailOn_FirstNewContact();
    settingsPage.clickOnAddMorePeopleOnNewContact();
    settingsPage.enterContactNameOn_SecondNewContact();
    settingsPage.enterIndianCountryCodeOn_SecondNewContact();
    settingsPage.enterPhoneOn_SecondNewContact();
    settingsPage.enterEmailOn_SecondNewContact();
    settingsPage.clickOnAddMorePeopleOnNewContact();
    settingsPage.enterContactNameOn_ThirdNewContact();
    settingsPage.enterIndianCountryCodeOn_ThirdNewContact();
    settingsPage.enterPhoneOn_ThirdNewContact();
    settingsPage.enterEmailOn_ThirdNewContact();
    settingsPage.clickOnSaveNewContact();
    browser.pause(3000);
    settingsPage.clickOnFirstContact();
    settingsPage.verifyFirstNewlySavedContact();
    settingsPage.clickOnSecondContact();
    settingsPage.verifySecondNewlySavedContact();
    settingsPage.clickOnThirdContact();
    settingsPage.verifyThirdNewlySavedContact();
  });
});
