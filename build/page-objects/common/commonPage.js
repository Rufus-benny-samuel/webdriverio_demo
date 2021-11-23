
class CommonPage {
  get inboxTab() {
    return $('//li[@data-tips="Inbox"]');
  }
  get connectTab() {
    return $('//li[@data-tips="Connect"]');
  }
  get settingsTab() {
    return $('//li[@data-tips="Settings"]');
  }
  get phoneTab() {
    return $('//li[@data-tips="Calls"]');
  }
  get contactsTab() {
    return $('//nav[@class="g-header-nav"]/a[text()="Contacts"]');
  }
  get companyDetails() {
    return $('//span[text()="Company Details"]');
  }

  async clickInboxTab() {
    // elementUtil.doClick(this.inboxTab);
    browser.customClick(await this.inboxTab);
  }
  clickSettingsTab() {
    elementUtil.doClick(this.settingsTab);
  }
  clickOnPhoneTab() {
    elementUtil.doClick(this.phoneTab);
  }
  clickOnContactsTab() {
    elementUtil.doClick(this.connectTab);
  }
  clickOnConnectTab() {
    elementUtil.doClick(this.connectTab);
  }
}
module.exports = new CommonPage();
