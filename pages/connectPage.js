const { assert } = require('chai');
const elementUtil = require('../utils/elementUtil');
const inboxPage = require('./inboxPage');
const settingsPage = require('./settingsPage/settingsPage');

let staffFirstName;
class ConnectPage {
  // using get methods to find the locators
  get connectTab() {
    return $('//li[@data-tips="Connect"]');
  }
  get recentChatName() {
    return $('//div[@class="css-1hy81fs-UserNameAndCallMsg"]');
  }
  get searchBtnOnConnect() {
    return $('//i[@id="cn-global-search-btn"]');
  }
  get globalSearchOnConnect() {
    return $('//input[@id="cn-global-search-input"]');
  }
  get firstSearchResult() {
    return $(`//ul[@class="css-ftusoh"]/li/h4[text()='${staffFirstName}']`);
    //return $(`(//h4[text()='${staffFirstName}'])`);
  }
  get viewMessage() {
    return $('(//div[@class="css-1o91sta-InboundTranscript"])[last()]/span');
  }
  get messageNameOnMessageDetails() {
    return $('//div[@class="fx-v"]/h2');
  }

  // Reusable Methods
  clickOnConnectTab() {
    elementUtil.doClick(this.connectTab);
  }
  getRecentChatName() {
    getText(this.recentChatName);
  }
  clickOnSearchBtnOnConnectTab() {
    elementUtil.doClick(this.searchBtnOnConnect);
  }
  enterValueOnGlobalSearchOnConnectTab() {
    elementUtil.doSetvalue(this.globalSearchOnConnect, staffFirstName);
  }
  clickOnFirstSearchResult() {
    elementUtil.doClick(this.firstSearchResult);
  }
  clickOnViewMessage() {
    elementUtil.doClick(this.viewMessage);
  }
  getMessageNameOnViewMessagePopup() {
    elementUtil.getText(this.messageNameOnMessageDetails);
  }
  verifyForwardViaConnect() {
    assert.equal(
      inboxPage.getMessageNameOnMessageDetails(),
      this.getMessageNameOnViewMessagePopup(),
    );
  }

  getFirstStaffName() {
    staffFirstName = settingsPage.staffName.getText();
  }
}
module.exports = new ConnectPage();
