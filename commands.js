module.exports = {
  waitThenClick: function (element) {
    element.waitForClickable({ timeout: 28000 });
    element.waitForDisplayed({ timeout: 28000 });
    element.waitForExist({ timeout: 28000 });
    element.click();
  },

  waitThenSetValue: function (element) {
    element.waitForClickable({ timeout: 28000 });
    element.waitForDisplayed({ timeout: 28000 });
    element.waitForExist({ timeout: 28000 });
    element.setValue();
  },

  waitThenSetvalue: function () {
    // Something
  },
};
