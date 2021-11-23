const loginPage = require('../../pages/loginPage');
const configData = require('../../config');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const data = require('../../data');

describe('Verify all the tabs are loading in settings tab for login: ', () => {
  before(function() {
    browser.url('data.url.stagingAF');
		browser.maximizeWindow();
  });

  it('Verify profile section is loading properly for Login', () => {
    loginPage.login(configData.emailid, configData.pwd);
    commonPage.clickSettingsTab();
    settingsPage.verifyMyProfileTabLoading();
  });

  it('Verify working hours are loading under my profile for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickWorkingHoursTab();
    settingsPage.verifyWorkingHoursTabLoading();
  });

  it.skip('Verify Invite people tab is loading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickInviteTab();
    settingsPage.verifyInviteTabLoading();
  });

  it('Verify my directory is loading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickMyDirectorySection();
    settingsPage.verifyMyDirectoryTabLoading();
  });

  it('Verify storage tab is loading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickStorageTab();
    settingsPage.verifyStorageTabLoading();
  });

  it(`Verify Account details section under company
   details tab is loading for login`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickCompanyDetailsTab();
    settingsPage.verifyAccountDetailsTabLoading();
  });

  it(`Verify business hours section under company 
  details tab is loading for login`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickCompanyDetailsTab();
    settingsPage.clickBusinessHoursSection();
    settingsPage.verifyBusinessHoursSectionLoading();
  });

  it('verify Billing tab is verifyInviteTabLoading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickBillingAndReportTab();
    settingsPage.verifyBillingSectionLoading();
  });

  it.skip(`verify reports section under billing 
  and reports tab is loading for login`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickBillingAndReportTab();
    settingsPage.clickReportsSection();
    settingsPage.verifyReportSectionLoading();
  });

  it.skip('Verify notification tab is loading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickNotificationTab();
    settingsPage.verifyNotificationTabLoading();
  });

  it.skip(`verify data section under advanced setting tab 
  is loading for login`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickAdvancedSettingsTab();
    settingsPage.verifyDataSectionLoading();
  });

  it.skip(`verify referrals section under 
  advanced settings loading for login`, () => {
    commonPage.clickSettingsTab();
    settingsPage.clickAdvancedSettingsTab();
    settingsPage.clickReferralsSection();
    settingsPage.verifyReferralSectionLoading();
  });

  it.skip('verify service tab is loading for login', () => {
    commonPage.clickSettingsTab();
    settingsPage.clickServicesTab();
    settingsPage.verifyServiceTabLoading();
  });
});
