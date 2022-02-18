class CommonPage {
  get inboxTab() {
    return $('//i[@data-tips="Inbox"]');
  }
  get connectTab() {
    return $('//i[@data-tips="Connect"]');
  }
  get settingsTab() {
    return $('//i[@data-tips="Settings"]');
  }
  get phoneTab() {
    return $('#sidebar-app-phone');
  }
  get contactsTab() {
    return $('//nav[@class="g-header-nav"]/a[text()="Contacts"]');
  }
  get companyDetails() {
    return $('//span[text()="Company Details"]');
  }

	//Re-usable methods
  async clickOnInboxTab() {
	await browser.customClick(await this.inboxTab, 'Inbox tab')
  }
  async clickOnSettingsTab() {
		await browser.customClick(await this.settingsTab, 'Settings tab');
  }
  async clickOnPhoneTab() {
		await browser.customClick(await this.phoneTab, 'Phone tab');
  }
  async clickOnContactsTab() {
		await browser.customClick(await this.connectTab, 'Contacts tab');
  }
  async clickOnConnectTab() {
		await browser.customClick(await this.connectTab, 'Connect tab');
  }
}
module.exports = new CommonPage();