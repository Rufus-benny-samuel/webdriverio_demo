class ElementUtil {
  doClick(element) {
    element.waitForClickable({timeout: 10000});
    element.waitForDisplayed({timeout: 10000});
    element.waitForExist({timeout: 10000});
    element.click();
  }

  doSetvalue(element, value) {
    element.clearValue();
    element.waitForDisplayed(element, {timeout: 10000});
    element.waitForExist({timeout: 10000});
    element.setValue(value);
  }

  getText(element) {
    element.waitForDisplayed({timeout: 10000});
    element.waitForExist({timeout: 10000});
    return element.getText();
  }

  getPageTitle() {
    return browser.getTitle();
  }

  isDisplayed(element) {
    element.waitForDisplayed({timeout: 10000});
    return element.isDisplayed();
  }

  checkIsDisplayed(element) {
    element.waitForDisplayed({timeout: 10000});
  }
}
module.exports = new ElementUtil();
