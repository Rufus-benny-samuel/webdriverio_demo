const loginPage = require('../../pages/loginPage');
const creds = require('../../credentials');

// describe('Forget password', function() {
beforeEach(function() {
  browser.url('./');
  browser.maximizeWindow();
});

//   it('enter valid email id and send forget password link', function() {
//     loginPage.forgetPassword(configData.emailid);
//   });
// });

describe.skip('Login to app', () => {
  it('enter valid email id and password', () => {
    loginPage.login(creds.user, creds.password);
  });
});
