/* eslint-disable camelcase */
const elementUtil = require('../utils/elementUtil');
const allure = require('@wdio/allure-reporter').default;

const data = require('../data');
const settingsPage = require('./settingsPage/settingsPage');
const path = require('path');
const {assert} = require('chai');
let staffFirstName;
let submittedNote;
let userName;
let contactName;
let getFirstName;
let messageName;
let timeStamp;
let url;
const messageList = [];
const msgsAndDescriptions_before = [];
const msgsAndDescriptions_after = [];
const messageDescriptionList = [];
let windowHandle;
let lastMsg_afterFirstScroll;
let lastMsg_afterSecondScroll;
let getMessageDescription;
let getMessageName;
let msgDescriptionCheck;
let msgArchivedOrNot;
let MsgsToBeMoved;
class InboxPage {
	// using get methods to find the locators
	get messageName() {
		return $('//div[@class="msg-meta st-caps "]/h4');
	}
	get lastMessage() {
		return $('(//div[@class="msg-meta st-caps "]/h4)[last()]');
	}
	get messageNames() {
		return $$('(//div[@class="msg-meta st-caps "]/h4)');
	}
	get messageTimeStamp() {
		return $('//i[@class="g-time-stamp"]');
	}
	get messageNameOnMessageDetails() {
		return $('//div[@class="fx-v"]/h2');
	}
	get inboxDropdown() {
		return $('//div[@class="g-dropdown-wrap ib-acct-drop "]');
	}
	get allMessageDropdown() {
		return $('//i[@class="g-drop-arrow"]');
	}
	get archiveButtonOnInboxDropdown() {
		return $('//li[text()="Archive"]');
	}
	get trashButtonOnInboxDropdown() {
		return $('//li[text()="Trash"]');
	}
	get backButtonOnArchiveOrTrashScreen() {
		return $(
			`//button[@class="nostyle icon-back-btn"]
        //*[local-name()="svg" and @class="g-icon"]`,
		);
	}
	get messageNameList() {
		return $$('//div[@class="msg-meta st-caps "]/h4');
	}
	get selectedMessageNameList() {
		return $$(`//button[@class="g-checkbox g-checkbox-checked"]`);
	}
	get selectAllMessage() {
		return $('//label[text()="Select All"]');
	}
	get contactName() {
		return $('//div[@class="name-holder-inner"]/div/h2');
	}
	get icnBackFromContact() {
		return $('//a[@class="back-btn"]');
	}
	get loginUserName() {
		return $('//h1[@class="st-heading"]');
	}
	get messageCheckbox() {
		return $('//button[@class="g-checkbox"]');
	}

	get openContactCard() {
		return $('//span[@class="mention-section css-bvebaw"]');
	}
	get contactNameOnContactsScreen() {
		return $('//div[@class="contact-name"]/h1');
	}

	// Add notes
	get addNoteBtn() {
		return $('//button[@class="fx-c g-btn-secondary round-edge mr-4"]');
	}
	get addNoteInputField() {
		return $('//textarea[@placeholder="Add to notes"]');
	}
	get submitAddNoteEle() {
		return $('//button[@class="nostyle g-icon-submit active"]');
	}
	get messageSentToConnectNotification() {
		return $('//*[local-name()="svg" and @class="g-icon notification"]/p');
	}
	get NoteAdded() {
		return $('//div[@class="ib-notes-text"]');
	}
	get whoAddedNotes() {
		return $('//span[@class="ib-label-sm fw-medium"]');
	}
	get URLinAddNote() {
		return $('//div[@class="css-150jb3h"]');
	}
	get attachmentBtn() {
		return $('#attach-file');
	}
	get atMentionBtn() {
		return $('//button[@class="nostyle g-icon-mention"]');
	}
	get atMentionSuggestion() {
		return $('//h3[@class="mention-name"]');
	}

	// Mark as verify
	get icnMarkAsVerify() {
		return $('div.mark-verify');
	}
	get verifyIcon() {
		return $('*[href="#icon-verified-tick"]');
	}
	// Move messages
	get archiveButtonOnActivity() {
		return $('//cite[text()="Send to Archive"]');
	}
	get archivedMessage() {
		return $(`//h4[text()='${messageName}']`);
	}
	get archivedMessageTimestamp() {
		return $(`//i[text()='${timeStamp}']`);
	}
	get sendToInboxBtnOnActivity() {
		return $('//cite[text()="Send to Inbox"]');
	}
	get moveToInbox() {
		return $('//button[text()="Move to Inbox"]');
	}
	get inboxedMessage() {
		return $(`//h4[text()='${messageName}']`);
	}
	get inboxedMessageTimestamp() {
		return $(`//i[text()='${timeStamp}']`);
	}
	get sendToTrashBtnOnActity() {
		return $('//cite[text()="Send to Trash"]');
	}
	get trashedMessage() {
		return $(`//h4[text()='${messageName}']`);
	}
	get trashedMessageTimestamp() {
		return $(`//i[text()='${timeStamp}']`);
	}
	get archiveButtonOnSelectMsg() {
		return $('(//button[@class="nostyle"])[2]');
	}
	get trashButtonOnSelectMsg() {
		return $('(//button[@class="nostyle"])');
	}

	// Share message
	get shareBtn() {
		return $('//button[@class="g-drop-btn fx-c g-btn-secondary round-edge"]');
	}
	get forwardToEmailBtn() {
		return $('//span[text()="Share through Email"]');
	}
	get setEmailToForward() {
		return $('//div[@class="g-tooltip top-pos multi-line"]/div/div/input');
	}
	get setNotesToForward() {
		return $('//div[@class="g-input-wrapper"]/input');
	}
	get sendButtonOnForward() {
		return $('//button[@class="g-btn-primary "]');
	}
	get forwaredByTxt() {
		return $('(//span[@class="ib-label-sm fw-medium"])[1]');
	}
	get forwardToAddress() {
		return $('//div[@class="ib-notes-text"]/a');
	}
	get forwardMsgNoteText() {
		return $('//div[contains(text(),"Message Note")]');
	}
	get forwardToConnectBtn() {
		return $('//span[text()="Share through App"]');
	}
	get forwardToConnectPeopleName() {
		return $('//input[@placeholder="Add collabs or people"]');
	}
	get firstContactOnForwardViaConnectSuggestion() {
		return $('//ul[@class="show-list css-rkfj7x"]/li');
	}
	get forwardToConnectAddANote() {
		return $('//input[@placeholder="Type a note here.."]');
	}
	get shareBtnOnForwardViaConnect() {
		return $('//footer[@class="g-modal-foot"]/button');
	}
	get roleOnContactDetails() {
		return $('//div[@class="contact-name"]/p');
	}

	// Contact
	get hambergerIconOnContactsScreen() {
		return $('//button[@class="g-drop-btn profile-action-btn"]');
	}
	get deleteContactBtn() {
		return $('//span[text()="Delete Contact"]');
	}
	get confirmDeleteBtn() {
		return $('//button[text()="Delete"]');
	}
	get emailAndPhoneOnInboxContact() {
		return $$('//p[@class="g-text-primary"]');
	}
	get editContactBtn() {
		return $('//span[text()="Edit Contact"]');
	}
	get editContactHeaderText() {
		return $('//h4[text()="Edit Contact"]');
	}
	get firstNameInputFieldOnContact() {
		return $('//label[text()="First Name"]/following::input');
	}
	get lastNameInputFieldOnContact() {
		return $('//label[text()="Last Name"]/following::input');
	}
	get companyNameFieldOnContact() {
		return $('//input[@placeholder="Business or Company Name"]');
	}
	get roleFieldOnContact() {
		return $('//input[@placeholder="Role"]');
	}
	get emailFieldOnContact() {
		return $('//input[@placeholder="example@email.com"]');
	}
	get PhoneFieldOnContact() {
		return $('//input[@placeholder="000 000 0000"]');
	}
	get saveBtnOnEditContact() {
		return $('//button[text()="Save"]');
	}
	get countryCodeOnEditContact() {
		return $('//div[@class="g-dropdown-wrap has-search g-country-dropdown"]');
	}
	get searchOnCountryCode() {
		return $('//input[@placeholder="Search in dropdown"]');
	}
	get indianCountryCode() {
		return $('//span[text()="India  (+91)"]');
	}
	get emailOnContactDetails() {
		return $('//p[text()="Email Address"]/following-sibling::p');
	}
	get phoneNoOnContactDetails() {
		return $('//p[text()="Phone Number"]/following-sibling::p');
	}
	get companyNameOnContactDetails() {
		return $(`//div[@class="info-hold"]/p[text()="Company Name"]
    /following-sibling::p`);
	}

	// Reusable methods
	getLoggedInUserName() {
		userName = elementUtil.getText(this.loginUserName);
		allure.addStep(`"${userName}" was got from Logged in account successfully`);
	}
	getLoggedInURL() {
		url = browser.getUrl();
	}
	switchToApp() {
		browser.switchWindow(url);
	}
	clickOnAddNotesBtn() {
		elementUtil.doClick(this.addNoteBtn);
	}
	addNote(note) {
		elementUtil.doSetvalue(this.addNoteInputField, note);
		allure.addStep(`${data.note.addNote} was added successfully`);
	}
	submitNote() {
		elementUtil.doClick(this.submitAddNoteEle);
	}
	verifyMessageSentToConnectNotification() {
		const success = elementUtil.getText(this.messageSentToConnectNotification);
		console.log(success);
	}
	clickOnAtMentionAndEnterName() {
		elementUtil.doClick(this.atMentionBtn);
		elementUtil.doSetvalue(this.addNoteInputField, staffFirstName);
	}
	openAtMentionContactCard() {
		elementUtil.doClick(this.openContactCard);
	}
	getFirstStaffName() {
		staffFirstName = settingsPage.staffName.getText();
	}

	verifyAddedNote() {
		submittedNote = elementUtil.getText(this.NoteAdded);
		assert.equal(submittedNote, data.note.addNote);
	}

	verifyWhoAddedTheNote() {
		submittedNote = elementUtil.getText(this.NoteAdded);
		assert.equal(this.whoAddedNotes.getText(), `Note by ${userName}`);
	}

	uploadFileOnNotes() {
		browser.pause(2000);
		const filePath = path.join(__dirname, '../External files/sample.png');
		const remoteFilePath = browser.uploadFile(filePath);
		browser.execute(function() {
			document.getElementById('attach-file').style.display = 'block';
		});
		elementUtil.doSetvalue(this.attachmentBtn, remoteFilePath);
	}

	clickMarkAsVerify() {
		const attr = this.icnMarkAsVerify.getAttribute('class');
		if (attr.includes('verified')) {
			elementUtil.doClick(this.icnMarkAsVerify);
		}
		elementUtil.doClick(this.icnMarkAsVerify);
	}

	verifyMarkAsVerified() {
		wdioExpect(this.icnMarkAsVerify).toHaveAttrContaining('class', 'verified');
	}

	clickMarkAsUnverify() {
		const attr = this.icnMarkAsVerify.getAttribute('class');
		if (!attr.includes('verified')) {
			elementUtil.doClick(this.icnMarkAsVerify);
		}
		elementUtil.doClick(this.icnMarkAsVerify);
	}
	verifyMarkAsUnverified() {
		wdioExpect(this.icnMarkAsVerify).not.toHaveAttrContaining(
			'class',
			'verified',
		);
	}

	clickContactName() {
		elementUtil.doClick(this.contactName);
	}

	clickBackIconFromContact() {
		elementUtil.doClick(this.icnBackFromContact);
	}

	clickOnAtMentionSuggestion() {
		elementUtil.doClick(this.atMentionSuggestion);
	}
	getWindowHandle() {
		windowHandle = browser.getWindowHandle();
		console.log(windowHandle);
	}
	verifyURLclick() {
		elementUtil.doClick(this.URLinAddNote);
		browser.pause(3000);
		browser.switchWindow(data.note.confirmAddNoteURL);
		const ACurl = browser.getUrl();
		if (ACurl === 'https://www.answerconnect.com/') {
			console.log('Url loaded is', ACurl);
		} else console.log(ACurl, 'is not loaded');
	}
	clickOnShareBtn() {
		elementUtil.doClick(this.shareBtn);
	}
	clickOnForwardToEmail() {
		elementUtil.doClick(this.forwardToEmailBtn);
	}
	enterEmailToForward(forwardEmail) {
		elementUtil.doSetvalue(this.setEmailToForward, forwardEmail);
	}
	enterNotesToForward(notes) {
		elementUtil.doSetvalue(this.setNotesToForward, notes);
	}
	clickOnSendBtnToForward() {
		elementUtil.doClick(this.sendButtonOnForward);
	}
	verifyWhoForwardedNote() {
		browser.pause(3000);
		assert.equal(
			elementUtil.getText(this.forwaredByTxt),
			`Forwarded by ${userName}`,
		);
	}
	verifyForwardMsgToAddress() {
		expect(elementUtil.getText(this.forwardToAddress)).equal(data.forward.forwardEmail);
	}
	verifyForwardMessageNote() {
		assert.equal(elementUtil.getText(this.forwardToAddress), data.forward.forwardNotes);
	}
	verifyForwardMessageNote() {
		assert.equal(
			elementUtil.getText(this.forwardMsgNoteText),
			`Message Note: ${data.forward.forwaredNotes}`,
		);
	}
	clickOnForwardToConnect() {
		elementUtil.doClick(this.forwardToConnectBtn);
	}
	enterNameToForwardViaConnect() {
		elementUtil.doSetvalue(this.forwardToConnectPeopleName, staffFirstName);
	}
	clickOnSuggestionOnForwardViaConnect() {
		elementUtil.doClick(this.firstContactOnForwardViaConnectSuggestion);
	}
	enterNotesToForwardViaConnect() {
		elementUtil.doSetvalue(this.forwardToConnectAddANote, data.forward.forwaredNotes);
	}
	clickOnShareButtonOnForwardViaConnectScreen() {
		elementUtil.doClick(this.shareBtnOnForwardViaConnect);
	}
	clickOnMessageNameOnMessageDetails() {
		elementUtil.doClick(this.messageNameOnMessageDetails);
	}
	checkContactAvailability() {
		try {
			elementUtil.doClick(this.messageNameOnMessageDetails);
			this.hambergerIconOnContactsScreen.waitForDisplayed({timeout: 3000});
			console.log('Contact is present');
		} catch (err) {
			this.hambergerIconOnContactsScreen
				.waitForDisplayed({timeout: 3000, reverse: true});
			console.log('contact is not available');
		}
	}
	checkContactAvailabilityToEdit() {
		browser.pause(3000);
		if (this.verifyIcon.isDisplayed() === true) {
			elementUtil.doClick(this.messageNameOnMessageDetails);
		} else {
			let i = 1;
			do {
				elementUtil.doClick(this.messageNames[i]);
				browser.pause(1000);
				if (this.verifyIcon.isDisplayed() === true) {
					elementUtil.doClick(this.messageNameOnMessageDetails);
				}
				i++;
			} while (this.contactNameOnContactsScreen.isDisplayed() === false);
		}
	}

	checkMarkAsVerifyAvailability() {
		try {
			this.icnMarkAsVerify.waitForDisplayed({timeout: 3000});
			console.log('Mark as verify button is available');
		} catch (err) {
			this.icnMarkAsVerify.waitForDisplayed({timeout: 3000, reverse: true});
			console.log('Mark as verify button is not available');
		}
	}
	clickOnHambergerIconOnContacts() {
		browser.pause(1000);
		elementUtil.doClick(this.hambergerIconOnContactsScreen);
	}
	clickOnDeleteContactBtn() {
		elementUtil.doClick(this.deleteContactBtn);
	}
	clickOnConfirmDeleteBtn() {
		elementUtil.doClick(this.confirmDeleteBtn);
	}

	getProfileDetailsOnContactDetails() {
		browser.pause(1000);
		this.emailAndPhoneOnInboxContact.filter((element) => {
			const onInbox = element.getText();
			console.log('On inbox tab', onInbox);
		});
	}
	getProfileDetailsOnContactDetailsAfterEditing() {
		this.emailAndPhoneOnInboxContact.map((element) =>
			console.log('After editing, Inbox tab: ', element.getText()),
		);
	}
	clickOnEditContactBtn() {
		elementUtil.doClick(this.editContactBtn);
	}
	checkEditContactPopupIsDisplayed() {
		elementUtil.checkIsDisplayed(this.editContactHeaderText);
	}

	editLastNameOnContacts() {
		this.lastNameInputFieldOnContact.clearValue();
		elementUtil.doSetvalue(this.lastNameInputFieldOnContact, data.contact.lastName);
	}
	getMessageNameOnMessageDetails() {
		this.messageNameOnMessageDetails.getText();
	}
	editCompanyNameOnContacts() {
		this.companyNameFieldOnContact.clearValue();
		elementUtil.doSetvalue(this.companyNameFieldOnContact, data.contact.company);
	}
	editRoleOnContacts() {
		this.roleFieldOnContact.clearValue();
		elementUtil.doSetvalue(this.roleFieldOnContact, data.contact.role);
	}
	editEmailOnContacts() {
		this.emailFieldOnContact.clearValue();
		elementUtil.doSetvalue(this.emailFieldOnContact, data.contact.emailID);
	}
	selectCountryCodeFromSuggestion() {
		elementUtil.doClick(this.countryCodeOnEditContact);
	}
	editPhoneNumberOnContacts() {
		this.PhoneFieldOnContact.doubleClick();
		browser.keys('Delete');
		this.PhoneFieldOnContact.doubleClick();
		browser.keys('Delete');
		elementUtil.doSetvalue(this.PhoneFieldOnContact, data.contact.phoneNo);
	}
	clickOnSaveBtnOnEditContact() {
		elementUtil.doClick(this.saveBtnOnEditContact);
	}

	clickOnCountryCodeOnEditContact() {
		elementUtil.doClick(this.countryCodeOnEditContact);
	}

	searchOnCountryCodePopup() {
		elementUtil.doSetvalue(this.searchOnCountryCode, 'India');
	}

	selectCountryCodeFromSuggestion() {
		elementUtil.doClick(this.indianCountryCode);
	}

	getContactName() {
		contactName = elementUtil.getText(this.contactNameOnContactsScreen);
	}

	verifyLastNameOnContactDetail() {
		this.getContactName();
		assert.equal(contactName, `${getFirstName} ${data.contact.lastName}`);
	}

	verifyRoleOnContactDetail() {
		const role = elementUtil.getText(this.roleOnContactDetails);
		assert.equal(role, data.contact.role);
	}

	verifyEmailOnContactDetail() {
		const email = elementUtil.getText(this.emailOnContactDetails);
		assert.equal(email, data.contact.emailID);
	}

	verifyPhoneOnContactDetail() {
		const phone = elementUtil.getText(this.phoneNoOnContactDetails);
		assert.equal(phone, data.contact.phoneNo);
	}

	verifyCompanyNameOnContactDetail() {
		this.companyNameFieldOnContact.waitForDisplayed({timeout: 8000});
		const companyName = elementUtil.getText(this.companyNameOnContactDetails);
		assert.equal(companyName, data.contact.company);
	}

	getContactFirstName() {
		getFirstName = this.firstNameInputFieldOnContact.getValue();
	}

	getMessageNameAndTimeStamp() {
		messageName = elementUtil.getText(this.messageName);
		timeStamp = elementUtil.getText(this.messageTimeStamp);
	}

	clickOnMessageCheckbox() {
		this.messageCheckbox.moveTo();
		browser.pause(1000);
		elementUtil.doClick(this.messageCheckbox);
	}

	clickOnArchiveButtonOnSelectMsg() {
		browser.pause(1000);
		elementUtil.doClick(this.archiveButtonOnSelectMsg);
	}

	clickOnInboxDropdown() {
		elementUtil.doClick(this.inboxDropdown);
	}
	clickOnAllMessageDropdown() {
		elementUtil.doClick(this.allMessageDropdown);
	}
	clickOnArchiveButtonOnDropdown() {
		browser.pause(1000);
		elementUtil.doClick(this.archiveButtonOnInboxDropdown);
	}

	clickOnArchiveButtonOnActivitySection() {
		elementUtil.doClick(this.archiveButtonOnActivity);
	}

	checkArchiveMessage() {
		browser.pause(2500);
		if (
			this.archivedMessage.isDisplayed() &&
			this.archivedMessageTimestamp.isDisplayed()
		) {
			console.log(messageName, 'was archived successfully');
		} else {
			do {
				this.archivedMessage.isDisplayed() &&
					this.archivedMessageTimestamp.isDisplayed();
				this.firstScroll();
				this.archivedMessage.isDisplayed() &&
					this.archivedMessageTimestamp.isDisplayed();
				this.secondScroll();
			} while (lastMsg_afterFirstScroll !== lastMsg_afterSecondScroll);
		}
	}
	checkTrashMessage() {
		browser.pause(2500);
		if (
			this.trashedMessage.isDisplayed() &&
			this.trashedMessageTimestamp.isDisplayed()
		) {
			console.log(messageName, 'was trashed successfully');
		} else {
			do {
				this.trashedMessage.isDisplayed() &&
					this.trashedMessageTimestamp.isDisplayed();
				this.firstScroll();
				this.trashedMessage.isDisplayed() &&
					this.trashedMessageTimestamp.isDisplayed();
				this.secondScroll();
			} while (lastMsg_afterFirstScroll !== lastMsg_afterSecondScroll);
		}
	}

	checkInboxMessage() {
		browser.pause(2500);
		if (
			this.inboxedMessage.isDisplayed() &&
			this.inboxedMessageTimestamp.isDisplayed()
		) {
			console.log(messageName, ' was moved to inbox successfully');
		} else {
			do {
				this.inboxedMessage.isDisplayed() &&
					this.inboxedMessageTimestamp.isDisplayed();
				this.firstScroll();
				this.inboxedMessage.isDisplayed() &&
					this.inboxedMessageTimestamp.isDisplayed();
				this.secondScroll();
			} while (lastMsg_afterFirstScroll !== lastMsg_afterSecondScroll);
		}
	}
	selectAllMessages() {
		browser.pause(1000);
		this.clickOnMessageCheckbox();
		elementUtil.doClick(this.selectAllMessage);
	}

	selectMultipleMessges() {
		for (let i = 1; i < this.messageNameList.length - 1; i++) {
			$(`(//button[@class="g-checkbox"])`).click();
		}
	}
	selectFirstFetchMessages() {
		browser.pause(2000);
		if (this.messageNameList.length !== 2) {
			this.selectMultipleMessges();
		} else {
			this.clickOnInboxDropdown();
			this.clickOnArchiveButtonOnDropdown();
			browser.pause(2000);
			if (this.messageNameList.length !== 2) {
				this.selectMultipleMessges();
			} else {
				assert.fail('There is no sufficient messages to perform multiple messages moving action');
			}
			this.clickOnArchiveButtonOnSelectMsg();
			this.clickOnBackButtonOnArchiveScreen();
			this.selectMultipleMessges();
		}
	}

	checkArchiveTooltip() {
		elementUtil.checkIsDisplayed(this.archiveTooltip);
	}
	clickOnTrashBtnOnDropdown() {
		browser.pause(1000);
		elementUtil.doClick(this.trashButtonOnInboxDropdown);
	}
	clickOnSendToTrashBtnOnActivitySection() {
		elementUtil.doClick(this.sendToTrashBtnOnActity);
	}
	clickOnSendToInboxOnActivitySection() {
		browser.pause(1000);
		elementUtil.doClick(this.sendToInboxBtnOnActivity);
	}
	clickOnMoveToInbox() {
		elementUtil.doClick(this.moveToInbox);
	}
	clickOnTrashButtonOnSelectMsg() {
		browser.pause(1000);
		elementUtil.doClick(this.trashButtonOnSelectMsg);
	}
	clickOnBackButtonOnArchiveScreen() {
		elementUtil.doClick(this.backButtonOnArchiveOrTrashScreen);
	}
	clickOnBackButtonOnTrashScreen() {
		elementUtil.doClick(this.backButtonOnArchiveOrTrashScreen);
	}

	editCont() {
		let i = 2;
		do {
			$(`(//div[@class="msg-meta st-caps "]/h4)[${[i]}]`).click(); // Message list view
			browser.pause(2500);
			this.messageNameOnMessageDetails.click(); // Message Name
			i += 1;
			const hambergerCheck = this.hambergerIconOnContactsScreen.isDisplayed();
			console.log(hambergerCheck);
		} while (this.hambergerIconOnContactsScreen
			.waitForDisplayed({timeout: 10000, reverse: true}));
	}

	firstScroll() {
		this.lastMessage.scrollIntoView();
		lastMsg_afterFirstScroll = this.lastMessage.getText();
		browser.pause(2000);
	}
	secondScroll() {
		this.lastMessage.scrollIntoView();
		lastMsg_afterSecondScroll = this.lastMessage.getText();
		browser.pause(2000);
	}

	scrollTillLast() {
		do {
			this.firstScroll();
			this.secondScroll();
		} while (lastMsg_afterFirstScroll !== lastMsg_afterSecondScroll);
	}
	verifyArchivedMessages() {
		const entireArchiveResult = this.messageNameList.map(function(item) {
			return item.getText();
		});
		console.log('Archive Messages before filter', entireArchiveResult);

		const archiveResult = messageNameList.filter(function(val) {
			return entireArchiveResult.indexOf(val) != -1;
		});
		console.log('Archive messages after filter', archiveResult);
	}

	getSelectedMessageNameList(msgs) {
		for (let i = 1; i <= this.selectedMessageNameList.length; i++) {
			getMessageName = $(`(//div[@class="msg-meta st-caps "]/h4)[${i}]`).getText();
			messageList.push(getMessageName);

			getMessageDescription = $(`(//div[@class="msg-meta "]/span)[${i}]`)
				.getText();
			messageDescriptionList.push(getMessageDescription);


			msgsAndDescriptions_before
				.push(getMessageName.concat(' ', getMessageDescription));
		}
		MsgsToBeMoved = [...new Set(msgsAndDescriptions_before)];
		console.log(`Messages to be moved
     from ${msgs} are`, MsgsToBeMoved);
	}
	checkSingleMsgAvailability() {
		this.messageName.waitForDisplayed({
			timeout: 5000,
			reverse: true,
			timeoutMsg: 'There is no message available in inbox',
		});
	}

	checkMessageAvailability() {
		for (let i = 0; i <= messageList.length; i++) {
			msgArchivedOrNot =
				$(`//h4[text()="${messageList[i]}"]`).isDisplayed();
			msgDescriptionCheck = $(`//span[text()="${messageDescriptionList[i]}"]
         | h4[text()="${messageList[i]}"]`).isDisplayed();
			if (msgArchivedOrNot && msgDescriptionCheck === true) {
				msgsAndDescriptions_after
					.push(messageList[i].concat(' ', messageDescriptionList[i]));
			}
		}
	}

	verifyMovedMessages(msg) {
		browser.pause(5000);
		do {
			this.checkMessageAvailability();
			this.firstScroll();
			this.checkMessageAvailability();
			this.secondScroll();
		} while (lastMsg_afterFirstScroll !== lastMsg_afterSecondScroll);
		const removeDuplicates = [...new Set(msgsAndDescriptions_after)];
		console.log(`Moved messages from ${msg} are`, removeDuplicates);
		const messagesWhichWasMoved = removeDuplicates.sort();
		const messagesToBeMoved = MsgsToBeMoved.sort();
		const missingMessages =
			messagesToBeMoved.filter((msgs) => !messagesWhichWasMoved.includes(msgs));
		if (missingMessages.length !== 0) {
			console.log(`Messages which we missed
       to move from ${msg} are`, missingMessages);
		}
		expect(messagesToBeMoved).to.deep.equal(messagesWhichWasMoved);
	}
}
module.exports = new InboxPage();

