const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const configData = require('../../config');
const loginPage = require('../../pages/loginPage');
const adminPage = require('../../pages/adminPage');

describe('Verify all the tabs are loading for Admin: ', () => {
  before(function() {
    browser.url('data.url.admin');
		browser.maximizeWindow();
    loginPage.login(configData.adminEmail, configData.adminPwd);
    adminPage.fetchAccountNumber();
  });

  it('Verify my profile has blurred for admins', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickMyProfileTab();
    settingsPage.verifyMyProfileIsHiddenForAdmin();
  });
  it('Verify Invite people tab is loading for admin', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickInviteTab();
    settingsPage.verifyInviteTabLoading();
  });

  it('Verify my directory is loading for admin', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickMyDirectorySection();
    settingsPage.verifyMyDirectoryTabLoading();
  });

  it(`Verify Account details section under company details tab
   is loading for admin`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickCompanyDetailsTab();
    settingsPage.verifyAccountDetailsTabLoading();
  });

  it(`Verify business hours section under company details tab
   is loading for admin`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickCompanyDetailsTab();
    settingsPage.clickBusinessHoursSection();
    settingsPage.verifyBusinessHoursSectionLoading();
  });

  it('verify Billing tab is verifyInviteTabLoading for admin', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickBillingAndReportTab();
    settingsPage.verifyBillingSectionLoading();
  });

  it(`verify reports section under billing 
  and reports tab is loading for admin`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickBillingAndReportTab();
    settingsPage.clickReportsSection();
    settingsPage.verifyReportSectionLoading();
  });

  it('Verify notification tab is hidden for admin for admin', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickNotificationTab();
    settingsPage.verifyNotificationIsHiddenForAdmin();
  });

  it(`verify data section under advanced setting tab 
  is loading for admin`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickAdvancedSettingsTab();
    settingsPage.clickDataSection();
    settingsPage.verifyDataSectionLoading();
  });

  it(`verify referrals section under advanced settings 
  loading for admin`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickAdvancedSettingsTab();
    settingsPage.clickReferralsSection();
    settingsPage.verifyReferralSectionLoading();
  });

  it.skip('verify service tab is loading for admin', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickServicesTab();
    settingsPage.verifyServiceTabLoading();
  });
});
