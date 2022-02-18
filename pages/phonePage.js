const elementUtil = require('../utils/elementUtil');
let contactName;
class PhonePage {
	get searchIcon() {
		return $('//button[@class="nostyle ph-search-btn"]');
	}
	get contactNameOnContactsScreen() {
		return $('//div[@class="contact-name"]/h1');
	}
	get searchInputField() {
		return $('//input[@placeholder="Search"]');
	}
	get clickOnSearchResult() {
		return $(`//h4[text()='${contactName}']`);
	}
	get contactProfileDetails() {
		return $$('//div[@class="ph-detailview--fileds"]/ul/li/span');
	}
	get contactsTab() {
		return $('//nav[@class="g-header-nav"]/a[text()="Contacts"]');
	}
	get noContactToDisplay() {
		return $('//span[text()="No contacts to display"]');
	}

	getContactName() {
		contactName = elementUtil.getText(this.contactNameOnContactsScreen);
	}
	clickOnSearchIcon() {
		elementUtil.doClick(this.searchIcon);
	}
	enterContactNameOnSearchField() {
		elementUtil.doSetvalue(this.searchInputField, contactName);
	}
	clickOnUpdatedSearchResult() {
		elementUtil.doClick(this.clickOnSearchResult);
	}

	getContactProfileDetailsOnContactDetails() {
		return this.contactProfileDetails.map((element) =>
			console.log(' After editing, phone tab: ', element.getText()),
		);
	}

	clickOnContactsTab() {
		elementUtil.doClick(this.contactsTab);
	}
	checkNoContactsToDisplay() {
		const errPlaceHolder = elementUtil.getText(this.noContactToDisplay);
		console.log('On phone tab', errPlaceHolder);
		this.noContactToDisplay.click();
	}
}

module.exports = new PhonePage();
