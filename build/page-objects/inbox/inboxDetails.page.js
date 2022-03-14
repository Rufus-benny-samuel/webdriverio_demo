//let msgNo;

class InboxDetails {

//ADD NOTES LOCATORS 
  get addNoteBtn() {return $('//button[@class="fx-c g-btn-secondary round-edge mr-4"]');}
  get addNoteInputField() {return $('//textarea[@placeholder="Add to notes"]');}
  get submitAddNoteEle() {return $('//button[@class="nostyle g-icon-submit f-0 active"]');}
	get URLinAddNote() {return $('//div[@class="css-150jb3h"]');}
	get messageSentToConnectNotification() { return $('//*[local-name()="svg" and @class="g-icon notification"]/p');}
	get attachmentBtn() { return $('#attach-file');}
	get atMentionBtn() { return $('//button[@class="nostyle g-icon-mention"]');}
	get atMentionSuggestion() { return $('//h3[@class="mention-name"]');}
	get addNoteSuccessNotif(){ return $("//p[text()='Note Added Successfully!']")}

	//MARK AS VERIFY AND UNVERIFY LOCATORS 
	get verifyIcon() { return $('*[href="#icon-verified-tick"]');}
	get verified() { return $("//div[@class='g-tooltip bottom-pos multi-line mark-verify verified']") };
	get notVerified(){ return $("//div[@class='g-tooltip bottom-pos multi-line mark-verify ']")}

	//SMS
	get sendSMS(){ return $("//textarea[@placeholder='Send SMS']")} 
	get firstBusinessLineNumber() { return $("//div[@class='g-dropmenu has-arrow']/ul/li")}
	

/* ---------------------------------------------------
* METHODS THAT CAN BE REUSED IN INBOX DETAILS SECTION
*-----------------------------------------------------*/
//ADD NOTES METHODS 
  async enterNotes_OnAddNote(note) {
    await browser.customSetValue(await this.addNoteInputField, note, 'Notes');
  }
	
	async openMessage(msgNo){
		await browser.customClick(await $(`(//div[@class='msg-meta st-caps '])[${msgNo}]`), `Message Number ${msgNo}`);
	}
	async addNote(note){
		await browser.customClick(await this.addNoteBtn, 'Add notes button');
		await this.enterNotes_OnAddNote(note);
    await browser.customClick(await this.submitAddNoteEle, 'Submit note');
		await this.addNoteSuccessNotif.waitForDisplayed({timeout:10000});
	} 


//MARK AS VERIFY AND UNVERIFY METHODS
//No need to open specific message perform mark as verified. 
//Just need to take a new message to check this flow

	async markAsVerified() { 
		await browser.customClick(await this.verifyIcon, 'Verify Icon')
		await browser.checkDisplayed(await this.verified);
	}
	async markAsUnVerified(){
		await browser.customClick(await this.verifyIcon, 'Unverify Icon')
		await browser.checkDisplayed(await this.notVerified);
	}
}
module.exports = new InboxDetails();