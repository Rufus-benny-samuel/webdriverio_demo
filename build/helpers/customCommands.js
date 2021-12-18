const allure = require('@wdio/allure-reporter').default;

module.exports = {
  customClick(ele, eleName) {
		if (
    ele.waitForDisplayed({timeout: 10000}),
    ele.waitForClickable({timeout: 10000}),
		ele.waitForExist({ timeout: 10000 })) {
    ele.click();
    allure.addStep(`"${eleName}" was clicked successfully`);
		}
		else {
		 	allure.addStep(`"${eleName}" was not clicked successfully`);
		}
  },

	customDoubleClick(ele, eleName){
		ele.waitForDisplayed({timeout: 10000});
    ele.waitForClickable({timeout: 10000});
		ele.doubleClick();
    allure.addStep(`"${eleName}" was double clicked successfully`);
	},

  customSetValue(element, value, eleName) {
		if(
    element.waitForDisplayed({timeout: 10000})){
    element.setValue(value);
    allure.addStep(`"${value}" was entered successfully at "${eleName}"`);
		} else {
			allure.addStep(`"${value}" was not entered successfully at "${eleName}"`);
		}
  },

	customGetText(element, eleName) {
    element.waitForDisplayed({timeout: 10000});
		element.waitForExist({ timeout: 10000 });
    const text = element.getText();
    allure.addStep(`"${text}" was got successfully from "${eleName}"`);
    return text;
  },

	customGetAttribut(element, eleName, attribName) {
		element.waitForDisplayed({timeout:5000});
		element.waitForExist({ timeout: 5000 });
		const attrib = element.getAttribute(attribName);
		allure.addStep(`"${attrib}" was got successfully from "${eleName}"`);
	},

	checkClickable(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const clickable = ele.isClickable();
    allure.addStep(`The check for clickable or not is ${clickable}`);
  },

	checkDisplayed(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const displayed = ele.isDisplayed();
    allure.addStep(`The check for displayed or not is ${displayed}`);
  },

	checkEnabled(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const enabled = ele.isEnabled();
    allure.addStep(`The check for enabled or not is ${enabled}`);
  },
	checkFocused(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const focused = ele.isFoucused();
    allure.addStep(`The check for focused or not is ${focused}`);
  },
	checkExisting(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const existing = ele.isExisting();
    allure.addStep(`The check for existing or not is ${existing}`);
  },
	checkSelected(ele) {
    ele.waitForDisplayed({timeout: 5000});
    ele.waitForClickable({timeout: 5000});
    const selected = ele.isSelected();
    allure.addStep(`The check for selected or not is ${selected}`);
  },

	waitUntilTextChange(ele, text, timeout){
		browser.waitUntil( function() {
			return ele.getText() === text
		}, {timeout}
		)},
	
	waitUntilClickable(ele, timeout){
		ele.waitForClickable({timeout})
		},
	
	waitForNotClickable(ele, timeout){
		ele.waitForClickable({ reverse: true }, {timeout})
		},

	waitUntilDisplayed(ele, timeout){
		ele.waitForDisplayed({timeout})
		},

		waitForNotDisplayed(ele, timeout){
		ele.waitForDisplayed({reverse: true}, {timeout})
		},

		waitUntilEnabled(ele, timeout){
		ele.waitForEnabled({timeout})
		},

		waitForNotEnabled(ele, timeout){
		ele.waitForEnabled({reverse: true}, {timeout})
		},

		waitUntilExist(ele, timeout){
		ele.waitForExist({timeout})
		},

		waitForNotExist(ele, timeout){
		ele.waitForExist({reverse: true}, {timeout})
		},

		scroll(ele){
			ele.scrollIntoView();
		}
	};