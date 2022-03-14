const {assert} = require('chai');
const constants = require('../../data');
const elementUtil = require('../../utils/elementUtil');
const inboxPage = require('../inboxPage');
const phonePage = require('../phonePage');
const commonPage = require('../commonPage');
const data = require('../../data');
const memberName = [];
const settingsAccountNumber = [];
const inboxAccountNumber = [];

let settings8xx = [];
let inbox8xx = [];
let contactName;
let singleAccountNum;
let secondAccNumb;
let businessNameOnInbox;
let businessName_onServices;

class SettingsPage {
	// common tabs
	get myProfileTab() {
		return $('//span[text()="My Profile"]');
	}
	get inviteTabSection() {
		return $('//span[text()="Invite people"]');
	}
	get myDirectory() {
		return $('//span[text()="My Directory"]');
	}
	get storageTab() {
		return $('//span[text()="Storage"]');
	}
	get companyDetailsTab() {
		return $('//span[text()="Company Details"]');
	}
	get billingsAndReportTab() {
		return $('//span[text()="Billing & Reports"]');
	}

	get notesToReceptionist() {
		return $('//span[text()="Notes to Receptionists"]');
	}
	get notificationTab() {
		return $('//span[text()="Notifications"]');
	}
	get advancedSettingsTab() {
		return $('//span[text()="Advanced Settings"]');
	}
	get staffName() {
		return $('//span[@class="st-title regular"]');
	}
	get internalSettingsTab() {
		return $('//span[text()="Settings"]');
	}
	get logoutTab() {
		return $('//span[text()="Logout"]');
	}
	get logoutButton() {
		return $('//button[text()="Logout"]');
	}
	get addTeamBtn() {
		return $('//button[text()="+ Add Team"]');
	}
	get addMembers() {
		return $('//span[text()="Add Members"]');
	}
	get teamNameInput() {
		return $('//input[@placeholder="Team name"]');
	}
	get contactNameList() {
		return $$('//li[@class="ignore-click has-avatar"]/span');
	}
	get addTeamMemberButton() {
		return $$('//li[@class="ignore-click has-avatar"]/code');
	}
	get saveButton() {
		return $('div.button-hold button.g-btn-primary');
	}
	get addedContactList() {
		return $$('//li[@data-testid="contact-card"]/a/span[1]');
	}

	get teamNameList() {
		return $$('(//li[contains(@class,card)]/div/h6)');
	}
	get teamDeleteIcon() {
		return $$('(//li[contains(@class,card)]/div/button)');
	}
	get notificationMessage() {
		return $('//div[@class="g-notification "]/p');
	}
	get btnDeleteTeam() {
		return $('//button[text()="Delete"]');
	}
	get contactCard() {
		return $('//li[@class="card active"]');
	}

	// MyProfile
	get profileEmailAddress() {
		return $('//p[text()="Email Address"]');
	}
	get workingHoursTab() {
		return $('(//a[@class="g-nav-links "])[1]');
	}
	get activityTab() {
		return $('(//a[@class="g-nav-links "])[2]');
	}
	get workingHoursField() {
		return $('//p[text()=" Edit working hours"]');
	}
	get myProfileBlurred() {
		return $('#main > section');
	}

	// Invite People
	get invitePeopleText() {
		return $('//h1[@class="st-heading mb-24"]');
	}

	// Storage
	get thumbnailViewOption() {
		return $('//button[@class="nostyle selected"]');
	}

	// Company details
	get businessNameField() {
		return $('//label[text()="Business Name"]');
	}
	get businessHoursTab() {
		return $('//a[@data-view="business-hours"]');
	}
	get timeZoneField() {
		return $('//h4[text()="Time Zone"]');
	}

	// Services
	get activeNumbers() {
		return $('.active-account');
	}
	get backArrowIcon() {
		return $('//a[@href="/settings/company-details"]');
	}

	// Billings and Reports
	get payButton() {
		return $('#paynow');
	}
	get reportsSection() {
		return $('//a[text()="Reports"]');
	}
	get filterBy() {
		return $('//span[contains(text(),"Filter by")]');
	}

	// Notification
	get displayPicture() {
		return $('.display-picture');
	}
	get notificationBlurred() {
		return $('#main > section');
	}

	// Advanced Settings
	get exportButton() {
		return $('//button[text()=" Export "]');
	}
	get referralsSection() {
		return $('//a[text()="Referrals"]');
	}
	get shareLink() {
		return $('//a[text()="Share"]');
	}
	get dataSection() {
		return $('//a[text()="Data"]');
	}

	// contacts
	get contactsTab() {
		return $('//a[text()="Contacts"]');
	}
	get addContacts() {
		return $(
			`//div[@class="rt-options profile-options"]
        //button[@class="profile-action-btn"]`,
		);
	}
	get fullNameInputField() {
		return $('//input[@placeholder="Name"]');
	}
	get fullNameInputField_Second() {
		return $('(//input[@placeholder="Name"])[2]');
	}
	get fullNameInputField_third() {
		return $('(//input[@placeholder="Name"])[3]');
	}
	get countryCodeOnContact() {
		return $('//button[@class="g-drop-btn"]');
	}
	get countryCodeOnContact_second() {
		return $('(//button[@class="g-drop-btn"])[2]');
	}
	get countryCodeOnContact_third() {
		return $('(//button[@class="g-drop-btn"])[3]');
	}
	get countryCodeSearchDropdown() {
		return $('//input[@placeholder="Search in dropdown"]');
	}
	get countryCodeSearchDropdown_second() {
		return $('(//input[@placeholder="Search in dropdown"])[2]');
	}
	get countryCodeSearchDropdown_third() {
		return $('(//input[@placeholder="Search in dropdown"])[3]');
	}
	get indianCountryCode() {
		return $('//span[text()="India  (+91)"]');
	}
	get indianCountryCode_second() {
		return $('(//span[text()="India  (+91)"])[2]');
	}
	get indianCountryCode_third() {
		return $('(//span[text()="India  (+91)"])[3]');
	}
	get phoneNumberInputField() {
		return $('//input[@placeholder="e.x. 800 000 0000"]');
	}
	get phoneNumberInputField_second() {
		return $('(//input[@placeholder="e.x. 800 000 0000"])[2]');
	}
	get phoneNumberInputField_third() {
		return $('(//input[@placeholder="e.x. 800 000 0000"])[3]');
	}
	get emailOnContact() {
		return $('//input[@placeholder="name@example.com"]');
	}
	get emailOnContact_second() {
		return $('(//input[@placeholder="name@example.com"])[2]');
	}
	get emailOnContact_third() {
		return $('(//input[@placeholder="name@example.com"])[3]');
	}
	get saveContact() {
		return $('//button[text()="Add to contacts"]');
	}
	get contactName_listView() {
		return $('//ul[@class="manage-list"]/li/span');
	}
	get contactName_detailsView() {
		return $('//div[@class="contact-name"]/h1');
	}
	get firstContact() {
		return $('(//ul[@class="manage-list"]/li)');
	}
	get secondContact() {
		return $('(//ul[@class="manage-list"]/li)[2]');
	}
	get thirdContact() {
		return $('(//ul[@class="manage-list"]/li)[3]');
	}
	get nameErrorClassOnAddContact() {
		return $('//input[@placeholder="Name"]/..');
	}
	get phoneErrorClassOnAddContact() {
		return $('//input[@placeholder="e.x. 800 000 0000"]/..');
	}
	get emailErrorClassOnAddContact() {
		return $('//input[@placeholder="name@example.com"]/..');
	}
	get contactsAddedNotification() {
		return $('//p[text()="Contacts Added"]');
	}
	get addMorePeople() {
		return $('//button[text()="+ Add more people "]');
	}
	get closeBtn_firstContact() {
		return $('(//button[@class="nostyle close"])');
	}
	get closeBtn_SecondContact() {
		return $('(//button[@class="nostyle close"])[2]');
	}
	get emailOnContactDetail() {
		return $('//p[text()="Email Address"]//following-sibling::p');
	}
	get phoneOnContactDetails() {
		return $('//p[text()="Phone Number"]//following-sibling::p');
	}
	get backBtnOnContact() {
		return $('//a[@class="back-btn"]');
	}
	get nameInputField() {
		return $('((//ul[@class="trow col-3"])[2]/li/input)[1]');
	}
	get phoneInputField() {
		return $('((//ul[@class="trow col-3"])[2]/li/input)[2]');
	}
	get emailInputField() {
		return $('((//ul[@class="trow col-3"])[2]/li/input)[3]');
	}
	get contactHeader() {
		return $('//a[text()="Contacts"]');
	}

	clickMyProfileTab() {
		elementUtil.doClick(this.myProfileTab);
	}
	get myDirectory() {
		return $('//*[text()="My Directory"]');
	}
	get emailAndPhoneOnSettingsContact() {
		return $$('//p[@class="g-text-primary"]');
	}
	get searchBtnOnContact() {
		return $('//button[@class="nostyle icon-search"]');
	}
	get searchInputFieldOnContact() {
		return $('//input[@placeholder="Search contacts"]');
	}
	get messageNameOnMessageDetails() {
		return $('//h2[@class="show-pointer"]');
	}
	get contactNameOnSearchResultSuggestion() {
		return $(`//span[text()='${contactName}']`);
	}
	get noResultFoundOnSearch() {
		return $('//span[text()="No contacts found"]');
	}
	get noResultFoundText() {
		return $('//li[@class="no-user-interaction"]/span');
	}
	get contactNameOnContactsScreen() {
		return $('//div[@class="contact-name"]/h1');
	}
	get firstTeamMember() {
		return $('//ul[@class="manage-list"]/li/a/figure/following::span');
	}

	// SERVICES TAB

	get servicesTab() {
		return $('//span[text()="Services"]');
	}
	get liveChatTab() {
		return $('//span[text()="Live Chat"]');
	}
	get launchApp() {
		return $('//a[text()="Launch App"]');
	}
	get schedulingTab() {
		return $('//span[text()="Scheduling"]');
	}
	get backbtn_AddOn() {
		return $('//a[@href="/settings/services/receptionists"]');
	}
	get IVRtab() {
		return $('//span[text()="IVR"]');
	}
	get businessLineTab() {
		return $('//span[text()="Business Lines"]');
	}
	get yourNumbersText_IVR() {
		return $('//div[text()="Your Numbers"]');
	}
	get chooseWidgetBtn_chatSupport() {
		return $('//a[text()="Choose widget"]');
	}
	get dashborad_setmore() {
		return $('//a[@class="setmore-icon-home dashboard-icon"]');
	}
	get accountNumberListOnservices() {
		return $$('(//ul[@class="card-view"]/li)');
	}
	get accountNumberOnServices() {
		return $('(//ul[@class="card-view"]/li)');
	}
	get secondAccountNumberOnServices() {
		return $('(//ul[@class="card-view"]/li)[2]');
	}
	get accountNumberList_OnInbox() {
		return $$(
			`//ul[@class="ib-acct-drop__submenu full-width"]
        /li[@class="" and @data-for]`,
		);
	}
	get firstTileOnServiceTab() {
		return $('//div/h6');
	}
	get getBusinessName() {
		return $('//div[@class="g-input-wrapper col-2 mr-40"]/input');
	}
	get enterBusinesName() {
		return $('//input[@placeholder="Add Business Name"]');
	}
	get saveBtn_ReceptionistProfile() {
		return $('//button[text()="Save"]');
	}
	get backBtn_ReceptionistProfile() {
		return $('//a[@class="g-avatar"]');
	}
	get businessNameOnServices() {
		return $(`//li[@data-for='${singleAccountNum}']/a/div/h6`);
	}
	get businessNameOnInbox() {
		return $(`//li[@data-for='${singleAccountNum}']/h6`);
	}
	get setAsDefaultBtn() {
		return $('//span[@data-tips="Set as default"]//button[@class="nostyle"]');
	}
	get proceedBtn_setAsDefault() {
		return $('//button[text()="Proceed"]');
	}
	get setDefault_SuccessMsg() {
		return $('//div[@class="ib-notify-wrapper"]/div/p');
	}
	get savedBusinessName() {
		return $('//h2[@class="st-heading cta-color"]');
	}
	get starIcon() {
		return $(`//li[@data-accountnumber='${secondAccNumb}']/a/div/p/span`);
	}
	// Reusable Methods
	clickOnMyDirectory() {
		this.myDirectory.click();
	}
	getFirstStaffName() {
		elementUtil.checkIsDisplayed(this.staffName);
		staffFirstName = elementUtil.getText(this.staffName);
	}
	clickInternalSettingsTab() {
		elementUtil.doClick(this.internalSettingsTab);
	}

	clickMyDirectorySection() {
		elementUtil.doClick(this.myDirectory);
	}

	clickAddTeamButton() {
		elementUtil.doClick(this.addTeamBtn);
	}

	enterTeamName(teamName) {
		elementUtil.doSetvalue(this.teamNameInput, teamName);
	}

	clickAddMember() {
		elementUtil.doClick(this.addMembers);
		console.log(`Add member clicked`);
	}

	addTeamMembersForATeam(memberCount) {
		for (let i = 0; i < memberCount; i++) {
			memberName.push(elementUtil.getText(this.contactNameList[i]));
			elementUtil.doClick(this.addTeamMemberButton[i]);
		}
	}

	clickTeamname() {
		elementUtil.doClick(this.teamNameInput);
	}

	clickSaveButton() {
		elementUtil.doClick(this.saveButton);
	}

	// Team Created Successfully
	verifyHeaderNotification(message) {
		expect(this.notificationMessage.getText()).to.have.string(message);
		this.notificationMessage.waitForDisplayed({reverse: true});
	}

	verifyTeamMemberAdded(memberCount) {
		for (let i = 1; i <= memberCount; i++) {
			expect(memberName).to.include(this.addedContactList[i].getText());
		}
	}

	deleteTeam(teamName) {
		// this.teamNameList.forEach((ele, index) =>{
		//   if (ele.getText() === teamName) {
		//     console.log(ele);
		//     this.teamNameList[index].moveTo();
		//     elementUtil.doClick(this.teamDeleteIcon[index]);
		//   }
		// });
		for (let i = 0; i <= this.teamNameList.length; i++) {
			if (this.teamNameList[i].getText() === teamName) {
				this.teamNameList[i].moveTo();
				elementUtil.doClick(this.teamDeleteIcon[i - 1]);
				break;
			}
		}
	}

	clickDeleteButton() {
		elementUtil.doClick(this.btnDeleteTeam);
	}

	verifyMyProfileTabLoading() {
		expect(this.profileEmailAddress.getText()).to.have.string('Email');
	}

	clickInviteTab() {
		elementUtil.doClick(this.inviteTabSection);
	}
	verifyInviteTabLoading() {
		expect(this.invitePeopleText.getText()).to.have.string('Invite people');
	}

	verifyMyDirectoryTabLoading() {
		wdioExpect(this.contactCard).toBeDisplayed();
	}

	clickStorageTab() {
		elementUtil.doClick(this.storageTab);
	}

	verifyStorageTabLoading() {
		wdioExpect(this.thumbnailViewOption).toBeDisplayed();
	}

	clickCompanyDetailsTab() {
		elementUtil.doClick(this.companyDetailsTab);
	}

	verifyAccountDetailsTabLoading() {
		wdioExpect(this.businessNameField).toBeDisplayed();
	}

	clickWorkingHoursTab() {
		elementUtil.doClick(this.workingHoursTab);
	}

	verifyWorkingHoursTabLoading() {
		wdioExpect(this.workingHoursField).toBeDisplayed();
	}

	clickActivityTab() {
		elementUtil.doClick(this.activityTab);
	}

	clickBusinessHoursSection() {
		elementUtil.doClick(this.businessHoursTab);
	}

	verifyBusinessHoursSectionLoading() {
		wdioExpect(this.timeZoneField).toBeDisplayed();
	}

	verifyServiceTabLoading() {
		wdioExpect(this.activeNumbers).toBeDisplayed();
	}

	clickBillingAndReportTab() {
		elementUtil.doClick(this.billingsAndReportTab);
	}

	verifyBillingSectionLoading() {
		$('#billing').waitForExist();
		browser.switchToFrame(0);
		wdioExpect(this.payButton).toBeDisplayed();
		browser.switchToWindow();
	}

	clickReportsSection() {
		elementUtil.doClick(this.reportsSection);
	}

	verifyReportSectionLoading() {
		$('#reports').waitForExist();
		browser.switchToFrame(0);
		wdioExpect(this.filterBy).toBeDisplayed();
		browser.switchToWindow();
	}

	clickNotificationTab() {
		elementUtil.doClick(this.notificationTab);
	}

	verifyNotificationTabLoading() {
		wdioExpect(this.displayPicture).toBeDisplayed();
	}

	clickAdvancedSettingsTab() {
		elementUtil.doClick(this.advancedSettingsTab);
	}

	clickDataSection() {
		elementUtil.doClick(this.dataSection);
	}

	verifyDataSectionLoading() {
		$('#data').waitForExist();
		browser.switchToFrame(0);
		wdioExpect(this.exportButton).toBeDisplayed();
	}

	clickReferralsSection() {
		elementUtil.doClick(this.referralsSection);
	}

	verifyReferralSectionLoading() {
		$('#referrals').waitForExist();
		browser.switchToFrame(0);
		wdioExpect(this.shareLink).toBeDisplayed();
	}

	fetchAccountNumber() {
		elementUtil.doSetvalue(this.fetchAccount, constants.fetchAccount);
		browser.keys('Enter');
		elementUtil.doClick(this.searchResults);
	}

	verifyMyProfileIsHiddenForAdmin() {
		this.myProfileBlurred.waitForExist();
		wdioExpect(this.myProfileBlurred).toHaveAttrContaining('class', 'enable-blur');
	}

	verifyNotificationIsHiddenForAdmin() {
		this.notificationBlurred.waitForExist();
		wdioExpect(this.notificationBlurred).toHaveAttrContaining('class', 'enable-blur');
	}

	clickBackArrorIcon() {
		elementUtil.doClick(this.backArrowIcon);
	}

	clickInternalSettingsTab() {
		elementUtil.doClick(this.internalSettingsTab);
	}
	doLogout() {
		elementUtil.doClick(this.internalSettingsTab);
		elementUtil.doClick(this.logoutTab);
		elementUtil.doClick(this.logoutButton);
	}

	getEmailAndPhoneFromSettingsContactDetails() {
		this.emailAndPhoneOnSettingsContact.map((element) =>
			console.log('After editing, settings tab:', elementUtil.getText(element)),
		);
	}
	clickOnContactsOnSettingsTab() {
		elementUtil.doClick(this.contactsTab);
	}
	clickOnSearchBtnOnContact() {
		elementUtil.doClick(this.searchBtnOnContact);
	}
	enterContactNameOnSearchField() {
		elementUtil.doSetvalue(this.searchInputFieldOnContact, contactName);
	}
	contactNameOnSearchResult() {
		elementUtil.doClick(this.contactNameOnSearchResultSuggestion);
	}
	getMessageNameOnMessageDetails() {
		msgName = elementUtil.getText(this.messageNameOnMessageDetails);
	}
	clickOnUpdatedContactSearchResult() {
		elementUtil.doClick(this.contactNameOnSearchResultSuggestion);
	}

	checkNoResultFoundMessage() {
		this.noResultFoundText.waitForDisplayed({timeout: 5000});
		expect(this.noResultFoundText.isDisplayed()).to.equal(true);
		const noResult = elementUtil.getText(this.noResultFoundText);
		console.log('On settings tab', noResult);
	}

	getContactName() {
		contactName = elementUtil.getText(this.contactNameOnContactsScreen);
	}

	verifyEditedContactsOnInboxPhoneSettingsTab() {
		expect(inboxPage.getProfileDetailsOnContactDetailsAfterEditing())
			.equal(phonePage.getContactProfileDetailsOnContactDetails())
			.equal(this.getEmailAndPhoneFromSettingsContactDetails);
	}
	clickOnFirstTeamMember() {
		elementUtil.doClick(this.firstTeamMember);
	}
	clickOnAddContactBtn() {
		elementUtil.doClick(this.addContacts);
	}
	enterContactNameOn_NewContact() {
		elementUtil.doSetvalue(this.fullNameInputField, data.contact.contactName);
	}
	enterContactNameOn_FirstNewContact() {
		elementUtil.doSetvalue(this.fullNameInputField, data.contact.firstContactName);
	}
	enterContactNameOn_SecondNewContact() {
		elementUtil.doSetvalue(this.fullNameInputField_Second, data.contact.secondContactName);
	}
	enterContactNameOn_ThirdNewContact() {
		elementUtil.doSetvalue(this.fullNameInputField_third, data.contact.thirdContactName);
	}
	enterIndianCountryCodeOn_firstNewContact() {
		elementUtil.doClick(this.countryCodeOnContact);
		elementUtil.doClick(this.countryCodeSearchDropdown);
		elementUtil.doSetvalue(this.countryCodeSearchDropdown, 'india');
		elementUtil.doClick(this.indianCountryCode);
	}
	enterIndianCountryCodeOn_SecondNewContact() {
		elementUtil.doClick(this.countryCodeOnContact_second);
		elementUtil.doClick(this.countryCodeSearchDropdown_second);
		elementUtil.doSetvalue(this.countryCodeSearchDropdown_second, 'india');
		elementUtil.doClick(this.indianCountryCode_second);
	}
	enterIndianCountryCodeOn_ThirdNewContact() {
		elementUtil.doClick(this.countryCodeOnContact_third);
		elementUtil.doClick(this.countryCodeSearchDropdown_third);
		elementUtil.doSetvalue(this.countryCodeSearchDropdown_third, 'india');
		elementUtil.doClick(this.indianCountryCode_third);
	}
	enterPhoneOn_FirstNewContact() {
		elementUtil.doSetvalue(this.phoneNumberInputField, data.contact.contactPhoneNo);
	}
	enterPhoneOn_SecondNewContact() {
		elementUtil.doSetvalue(this.phoneNumberInputField_second, data.contact.secondContactPhoneNo);
	}
	enterPhoneOn_ThirdNewContact() {
		elementUtil.doSetvalue(this.phoneNumberInputField_third, data.contact.thirdContactPhoneNo);
	}
	clickOnSaveNewContact() {
		elementUtil.doClick(this.saveContact);
	}
	enterEmailOn_FirstNewContact() {
		elementUtil.doSetvalue(this.emailOnContact, data.contact.contactEmail);
	}
	enterInvalidEmailOn_FirstNewContact() {
		elementUtil.doSetvalue(this.emailOnContact, data.contact.invalidContactEmail);
	}
	enterEmailOn_SecondNewContact() {
		elementUtil.doSetvalue(this.emailOnContact_second, data.contact.secondContactEmailID);
	}
	enterEmailOn_ThirdNewContact() {
		elementUtil.doSetvalue(this.emailOnContact_third, data.contact.thirdContactEmailID);
	}

	verifyNewlySavedContact() {
		const firstContactName = elementUtil.getText(this.contactName_listView);
		const contactEmail = elementUtil.getText(this.emailOnContactDetail);
		const contactPhone = elementUtil.getText(this.phoneOnContactDetails);

		assert.equal(firstContactName, data.contact.contactName);
		assert.equal(contactEmail, data.contact.contactEmail);
		assert.equal(contactPhone, data.contact.contactPhoneNo);
	}
	verifyFirstNewlySavedContact() {
		$(`//span[text()="${data.contact.thirdContactName}"]`).click();
		const firstContactName = elementUtil.getText(this.contactName_detailsView);
		const contactEmail = elementUtil.getText(this.emailOnContactDetail);
		const contactPhone = elementUtil.getText(this.phoneOnContactDetails);

		assert.equal(firstContactName, data.contact.thirdContactName);
		assert.equal(contactEmail, data.contact.thirdContactEmailID);
		assert.equal(contactPhone, data.contact.thirdContactPhoneNo);
	}
	verifySecondNewlySavedContact() {
		$(`//span[text()="${data.contact.contact.secondContactName}"]`).click();
		const secondContactName = elementUtil.getText(this.contactName_detailsView);
		const secondEmail = elementUtil.getText(this.emailOnContactDetail);
		const secondPhoneNo = elementUtil.getText(this.phoneOnContactDetails);
		assert.equal(secondContactName, data.contact.contact.secondContactName);
		assert.equal(secondPhoneNo, data.contact.secondContactPhoneNo);
		assert.equal(secondEmail, data.contact.secondContactEmailID);
	}
	verifyThirdNewlySavedContact() {
		$(`//span[text()="${data.contact.firstContactName}"]`).click();
		const thirdContactName = elementUtil.getText(this.contactName_detailsView);
		const thirdEmail = elementUtil.getText(this.emailOnContactDetail);
		const thirdPhoneNo = elementUtil.getText(this.phoneOnContactDetails);
		assert.equal(thirdContactName, data.contact.firstContactName);
		assert.equal(thirdPhoneNo, '+91 ' + data.contact.contactPhoneNo);
		assert.equal(thirdEmail, data.contact.contactEmail);
	}
	checkContactsAddedNotification() {
		elementUtil.checkIsDisplayed(this.contactsAddedNotification);
	}
	verifyNameFieldErrorClass() {
		wdioExpect(this.nameErrorClassOnAddContact).toHaveAttrContaining('class', 'g-input-wrapper error');
	}
	verifyPhoneFieldErrorClass() {
		wdioExpect(this.phoneErrorClassOnAddContact).toHaveAttrContaining('class', 'g-custom-input-field error');
	}
	verifyEmailFieldErrorClass() {
		wdioExpect(this.emailErrorClassOnAddContact).toHaveAttrContaining('class', 'g-input-wrapper error');
	}
	clickOnAddMorePeopleOnNewContact() {
		elementUtil.doClick(this.addMorePeople);
	}
	clickOnCloseBtnOn_FirstNewContact() {
		elementUtil.doClick(this.closeBtn_firstContact);
	}
	clickOnCloseBtnOn_SecondNewContact() {
		elementUtil.doClick(this.closeBtn_SecondContact);
	}
	verifyContactsAreCleared() {
		const enteredName = this.nameInputField.getAttribute('value');
		const enteredPhoneNo = this.phoneInputField.getAttribute('value');
		const enteredEmailId = this.emailInputField.getAttribute('value');
		assert.equal(enteredName, '');
		assert.equal(enteredPhoneNo, '');
		assert.equal(enteredEmailId, '');
	}
	clickOnFirstContact() {
		elementUtil.doClick(this.firstContact);
	}
	clickOnSecondContact() {
		elementUtil.doClick(this.secondContact);
	}
	clickOnThirdContact() {
		elementUtil.doClick(this.thirdContact);
	}
	clickOnBackBtnOnContact() {
		elementUtil.doClick(this.backBtnOnContact);
	}

	clickOnEditProfile() {
		const shadow = $('//g-contact-card[@id="contact-card"]').shadow$('[data-option-id="edit_profile"]');
		shadow.click();
	}

	checkContactHeader() {
		elementUtil.isDisplayed(this.contactHeader);
	}
	clickOnLiveChatTab() {
		elementUtil.doClick(this.liveChatTab);
	}
	clickOnLaunchApp() {
		elementUtil.doClick(this.launchApp);
	}
	clickOnLiveChatTab_verifyItsLoggedIn() {
		browser.switchWindow('https://app.chatsupport.co/');
		$('//a[text()="Choose widget"]').waitForDisplayed({timeout: 20000});
	}
	clickOnSchedulingTab() {
		elementUtil.doClick(this.schedulingTab);
	}
	clickOnSchedulingTab_verifyItsLoggedIn() {
		browser.switchWindow('my.setmore.com/calendar');
		$('//a[@class="setmore-icon-home dashboard-icon"]').waitForDisplayed({
			timeout: 20000,
		});
	}
	clickOnBackBtn_addOn() {
		elementUtil.doClick(this.backbtn_AddOn);
	}
	clickOnIVRTab() {
		elementUtil.doClick(this.IVRtab);
	}
	clickOnIVRTab_verifyItsLoggedIn() {
		browser.switchWindow('app.synclio.com/');
		$('//div[text()="Your Numbers"]').waitForDisplayed({
			timeout: 20000,
		});
	}
	clickOnBusinessLineTab() {
		elementUtil.doClick(this.businessLineTab);
	}
	getListOf8xxOnServices() {
		$('//ul[@class="card-view"]/li').waitForDisplayed({timeout: 5000});
		const numbOfAccounts = this.accountNumberListOnservices.length;
		for (let i = 1; i <= numbOfAccounts; i++) {
			settingsAccountNumber.push(
				$(`(//ul[@class='card-view']/li)[${i}]`).getAttribute(
					'data-accountnumber',
				),
			);
		}
		settings8xx = settingsAccountNumber.slice().sort();
	}
	getListOf8xxOnInbox() {
		const numbOfAccounts = this.accountNumberList_OnInbox.length;
		console.log('Total Numb of 8xx on inbox tab are ', numbOfAccounts);
		for (let i = 1; i <= numbOfAccounts; i++) {
			inboxAccountNumber.push(
				$(
					`(//ul[@class='ib-acct-drop__submenu full-width']
              /li[@class='' and @data-for])[${i}]`,
				).getAttribute('data-for'),
			);
		}
		inbox8xx = inboxAccountNumber.slice().sort();
	}
	verifySameAccountNumbersOnInboxAndSettings() {
		expect(inbox8xx).to.deep.equal(settings8xx);
	}
	clickOnFirstAccountNumber() {
		elementUtil.doClick(this.firstTileOnServiceTab);
	}

	saveBusinessName() {
		elementUtil.doClick(this.saveBtn_ReceptionistProfile);
		this.verifyBusinessName_successMessage();
		elementUtil.doClick(this.backBtn_ReceptionistProfile);
	}

	navigateToAllMsgDropdown() {
		commonPage.clickInboxTab();
		browser.pause(2000);
	}
	enterBusinesNameAnd_VerifyInboxAndSettings() {
		const getBusinessName = this.getBusinessName.getAttribute('value');
		if (getBusinessName !== 'Full Creative') {
			this.enterBusinesName.clearValue();
			browser.pause(1000);
			elementUtil.doSetvalue(this.enterBusinesName, data.account.businessName);
			this.saveBusinessName();
			businessName_onServices = elementUtil.getText(this.businessNameOnServices);
			assert.equal(businessName_onServices, data.account.businessName);
			this.navigateToAllMsgDropdown();
			businessNameOnInbox = elementUtil.getText(this.businessNameOnInbox);
			assert.equal(businessNameOnInbox, data.account.businessName);
		} else {
			this.enterBusinesName.clearValue();
			elementUtil.doSetvalue(this.enterBusinesName, data.account.alternateBusinessName);
			this.saveBusinessName();
			businessName_onServices = elementUtil.getText(this.businessNameOnServices);
			assert.equal(businessName_onServices, data.account.alternateBusinessName);
			this.navigateToAllMsgDropdown();
			businessNameOnInbox = elementUtil.getText(this.businessNameOnInbox);
			assert.equal(businessNameOnInbox, data.account.alternateBusinessName);
		}
	}

	verifyBusinessName_successMessage() {
		const businessName = elementUtil.getText(this.setDefault_SuccessMsg);
		assert.equal(businessName, 'Business name updated');
	}

	getFirstAccountNumber_OnServices() {
		this.accountNumberOnServices.waitForDisplayed({timeout: 5000});
		singleAccountNum = this.accountNumberOnServices.getAttribute('data-for');
	}

	clickOnSetAsDefaultBtn() {
		elementUtil.doClick(this.setAsDefaultBtn);
	}
	clickOnProceed_setAsDefault() {
		elementUtil.doClick(this.proceedBtn_setAsDefault);
	}
	verifySetDefault_SuccessMessage() {
		const setDefaultMsg = elementUtil.getText(this.setDefault_SuccessMsg);
		assert.equal(setDefaultMsg, `${secondAccNumb} is marked as default account`);
	}
	getSecondAccountNumber() {
		secondAccNumb = this.secondAccountNumberOnServices.getAttribute('data-accountnumber');
	}

	verifyStarIcon() {
		const starIcn = this.starIcon.getAttribute('class');
		assert.equal(starIcn, 'star-icon starred');
	}
}
module.exports = new SettingsPage();
