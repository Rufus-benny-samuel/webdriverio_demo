class SyncPage {
  get userA_emailID() {
    return myChromeBrowser.$('//input[@name="email"]');
  }
  get userA_password() {
    return myChromeBrowser.$('//input[@name="password"]');
  }
  get userA_loginBtn() {
    return myChromeBrowser.$('//button[@class="button-primary "]');
  }
  get connectTab() {
    return $('//li[@service-name="Connect"]');
  }
  // Reusable methods
  userA_Login() {
    myChromeBrowser.url('https://my.hellosells.app/');
    myChromeBrowser.maximizeWindow();
    this.userA_emailID.setValue('ofc@fineloans.org');
    this.userA_password.setValue('test123123');
    this.userA_loginBtn.click();
    browser.pause(35000);
  }
  userB_Login() {
    myChromeBrowser2.url('https://my.hellosells.app/');
    myChromeBrowser2.maximizeWindow();
    myChromeBrowser2.$('//input[@name="email"]').setValue('hellosells@cwa.com');
    myChromeBrowser2.$('//input[@name="password"]').setValue('test123123');
    myChromeBrowser2.$('//button[@class="button-primary "]').click();
    browser.pause(30000);
  }

  clickOnConnectTab() {
    this.connectTab.click();
  }
  userA_clickOnConnectTab() {
    myChromeBrowser.$('//li[@service-name="Connect"]').click();
  }
  userA_clickOnConnectMsg() {
    myChromeBrowser.$('//h4[text()="CWA"]').click();
  }

  userA_clickOnViewMessage() {
    myChromeBrowser
        .$('(//div[@class="css-1o91sta-InboundTranscript"])[last()]/span')
        .click();
  }
  userA_getMessageNameOnConnect() {
    const atConnect = myChromeBrowser.$('//div[@class="fx-v"]/h2').getText();
  }
  userB_getMessageNameOnInbox() {
    const atInbox = myChromeBrowser2.$('//h2[@class="show-pointer"]').getText();
  }
  userB_clickOnShareBtn() {
    myChromeBrowser2
        .$('//button[@class="g-drop-btn fx-c g-btn-secondary round-edge"]')
        .click();
  }
  userB_clickOnShareThroughAppBtn() {
    myChromeBrowser2.$('//span[text()="Share through App"]').click();
  }
  userB_enterNameOnShareThroughApp() {
    myChromeBrowser2
        .$('//input[@placeholder=\'Type to add people\']')
        .setValue('Abishek R');
    browser.pause(1500);
  }
  userB_clickOnSuggestionOn_ShareThroughApp() {
    myChromeBrowser2.$('//ul[@class="show-list css-rkfj7x"]/li').click();
  }
  userB_enterNotesToShareThroughApp() {
    myChromeBrowser2
        .$('//input[@placeholder="Type a note here.."]')
        .setValue('test note');
  }
  userB_clickOnSubmitBtnOn_ShareThroughApp() {
    myChromeBrowser2.$('//footer[@class="g-modal-foot"]/button').click();
  }
}
module.exports = new SyncPage();
