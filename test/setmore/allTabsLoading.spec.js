const setmoreLogin = require('../../pages/setmorePage/setmoreLogin.page');
const creds = require('../../credentials');
const commonPage = require('../../pages/commonPage');
// const myProfile = require('../../pages/settingsPage/myProfile.page');

describe('setmore settings tabs are loading', () => {
  before(() => {
    browser.url('/');
    browser.maximizeWindow();
    setmoreLogin.setmoreLogin(creds.user, creds.password);
  });
  it('Verify profile, Working Hours and Activity tabs are loading under My Profile', () => {
    browser.customClick(commonPage.settingsTab, 'Settings Tab');
    browser.customClick();
  });
});
