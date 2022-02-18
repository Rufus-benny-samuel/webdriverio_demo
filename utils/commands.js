const allure = require('@wdio/allure-reporter').default;

module.exports = {
<<<<<<< HEAD
  customClick(ele, eleName) {
    ele.waitForDisplayed();
    ele.waitForClickable();
    ele.click();
    allure.addStep(`"${eleName}" was clicked successfully`);
  },
  customGetText(element, eleName) {
    element.waitForDisplayed();
    const text = element.getText();
    allure.addStep(`"${text}" was got successfully from "${eleName}"`);
    return text;
  },
  customSetValue(element, value, eleName) {
    element.waitForDisplayed();
    element.setValue(value);
    allure.addStep(`"${value}" was entered successfully at "${eleName}"`);
  },
=======
	customClick(ele, eleName) {
		ele.waitForDisplayed({timeout: 5000});
		ele.waitForClickable({timeout: 5000});
		ele.click();
		allure.addStep(`"${eleName}" was clicked successfully`);
	},
	customGetText(element, eleName) {
		element.waitForDisplayed({timeout: 5000});
		const text = element.getText();
		allure.addStep(`"${text}" was got successfully from "${eleName}"`);
		return text;
	},
	customSetValue(element, value, eleName) {
		element.waitForDisplayed({timeout: 5000});
		element.setValue(value);
		allure.addStep(`"${value}" was entered successfully at "${eleName}"`);
	},
>>>>>>> cucumber-parallel
};
