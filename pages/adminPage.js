const elementUtil = require('../utils/elementUtil');
const data = require('../data');

class AdminPage {
	// AdminAccount
	get fetchAccount() {
		return $('#fetchAccountInput');
	}
	get searchResults() {
		return $('//ul[@id="search_Result"]/li');
	}

	fetchAccountNumber() {
		elementUtil.doSetvalue(this.fetchAccount, data.fetchAccount);
		browser.keys('Enter');
		elementUtil.doClick(this.searchResults);
	}
}
module.exports = new AdminPage();
