class InboxDetails {
//Locators
	//Add Notes
  get addNoteBtn() {
    return $('//button[@class="fx-c g-btn-secondary round-edge mr-4"]');
  }
  get addNoteInputField() {
    return $('//textarea[@placeholder="Add to notes"]');
  }
  get submitAddNoteEle() {
    return $('//button[@class="nostyle g-icon-submit active"]');
  }
	get URLinAddNote() {
		return $('//div[@class="css-150jb3h"]');
	}

	//Share
	get shareBtn(){
		return $('//button[@class="g-drop-btn fx-c g-btn-secondary round-edge"]')
	}
	get shareThroughEmailBtn() {
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

  // reusable methods
  async clickOnAddNotesBtn() {
    await browser.customClick(await this.addNoteBtn, 'Add notes button');
  }
  async addNote(note) {
    await browser.customSetValue(await this.addNoteInputField, note, 'Notes');
  }
  async submitNote() {
    await browser.customClick(await this.submitAddNoteEle, 'Submit note');
  }
	async enterUrl(note){
		await browser.customSetValue(await this.addNoteInputField, note, 'Notes')
	}
}
module.exports = new InboxDetails();
