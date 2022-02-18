const loginPage = require('../../pages/loginPage');
const inboxPage = require('../../pages/inboxPage');
const creds = require('../../credentials');


describe('Move message:', () => {
  before(function() {
    browser.url('./');
	  browser.maximizeWindow()
  });

  it.only(`Archive a message and verify it in archive tab`, () => {
    loginPage.login(creds.user, creds.password);
    inboxPage.getMessageNameAndTimeStamp();
    inboxPage.clickOnArchiveButtonOnActivitySection();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnArchiveButtonOnDropdown();
    inboxPage.checkArchiveMessage();
  });

  it(`Unarchive a message from archive tab 
  and verify that in Inbox tab`, () => {
    inboxPage.getMessageNameAndTimeStamp();
    inboxPage.clickOnSendToInboxOnActivitySection();
    inboxPage.clickOnBackButtonOnArchiveScreen();
    inboxPage.checkInboxMessage();
  });

  it(`Delete a message from inbox tab and verify that in Trash tab`, () => {
    inboxPage.getMessageNameAndTimeStamp();
    inboxPage.clickOnSendToTrashBtnOnActivitySection();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnTrashBtnOnDropdown();
    inboxPage.checkTrashMessage();
  });

  it(`Move a message to inbox from trash tab and 
  verify that in inbox tab`, () => {
    inboxPage.getMessageNameAndTimeStamp();
    inboxPage.clickOnSendToInboxOnActivitySection();
    inboxPage.clickOnBackButtonOnTrashScreen();
    inboxPage.checkInboxMessage();
  });

  it('Delete a message from archive tab and verify that in Trash tab', () => {
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnArchiveButtonOnDropdown();
    inboxPage.getMessageNameAndTimeStamp();
    inboxPage.clickOnSendToTrashBtnOnActivitySection();
    inboxPage.clickOnBackButtonOnArchiveScreen();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnTrashBtnOnDropdown();
    inboxPage.checkTrashMessage();
  });
  /* Moving Multiple messages */

  it(`Select multiple messages and perform Inbox to Archive`, () => {
    inboxPage.clickOnBackButtonOnArchiveScreen();
    inboxPage.selectFirstFetchMessages();
    inboxPage.getSelectedMessageNameList('Inbox to Archive');
    inboxPage.clickOnArchiveButtonOnSelectMsg();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnArchiveButtonOnDropdown();
    inboxPage.verifyMovedMessages('Inbox to Archive');
  });

  it('Select multiple messages and perform Inbox to Trash', () => {
    inboxPage.clickOnBackButtonOnArchiveScreen();
    inboxPage.selectFirstFetchMessages();
    inboxPage.getSelectedMessageNameList('Inbox to Trash');
    inboxPage.clickOnTrashButtonOnSelectMsg();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnTrashBtnOnDropdown();
    inboxPage.verifyMovedMessages('Inbox to Trash');
  });

  it('Select multiple messages and perform Archive to Inbox', () => {
    inboxPage.clickOnBackButtonOnTrashScreen();
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnArchiveButtonOnDropdown();
    inboxPage.selectFirstFetchMessages();
    inboxPage.getSelectedMessageNameList('Archive to Inbox');
    inboxPage.clickOnArchiveButtonOnSelectMsg();
    inboxPage.clickOnBackButtonOnArchiveScreen();
    inboxPage.verifyMovedMessages('Archive to Inbox');
  });


  it('Select multiple messages and perform Trash to Inbox', () => {
    inboxPage.clickOnInboxDropdown();
    inboxPage.clickOnTrashBtnOnDropdown();
    inboxPage.selectFirstFetchMessages();
    inboxPage.getSelectedMessageNameList('Trash to Inbox');
    inboxPage.clickOnMoveToInbox();
    inboxPage.clickOnBackButtonOnTrashScreen();
    inboxPage.verifyMovedMessages('Trash to Inbox');
  });
});
