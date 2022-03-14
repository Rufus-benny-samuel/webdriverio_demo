const inboxLeftPage = require("./inboxLeft.page");

class componentPage {

	//SHARE THROUGH EMAIL LOCATORS on Inbox details 
	get shareBtnOnMessageDetails(){return $('//button[@class="g-drop-btn fx-c g-btn-secondary round-edge"]')}
	get shareThroughEmailBtn() {return $('(//span[text()="Share through Email"])');}
	get enterEmailTo_ShareThroughEmail() {return $("//div[@class='g-input']/ul");}
	get enterNotesTo_ShareThroughEmail() {return $('//div[@class="g-input-wrapper"]/input');}
	get sendButton_ShareThroEmailAndConnect() {return $('//button[@class="g-btn-primary "]');}
	get closeBtn_ShareThroughEmail() { return $("//i[@class='g-modal-close']");}
	get includeNotesCheckBox(){ return $('.fw-0 g-checkbox g-checkbox-checked');}

//SHARE THROUGH APP	LOCATORS 
	get shareThroughAppBtn() {return $('(//span[text()="Share through App"])');}
	get enterPeopleNameOn_shareThroughApp() {return $('//input[@placeholder="Add collabs or people"]');}
	get firstContactOn_ShareThroughAppSuggestion() {return $('//ul[@class="show-list css-rkfj7x"]/li');}
	get enterNotesOn_ShareThroughApp() {return $('//input[@placeholder="Type a note here.."]');}
	get shareBtnOnForwardViaConnect() {return $('//footer[@class="g-modal-foot"]/button');}

	//Share message locators on select message 
	get forwardIconOnSelectMsg() { return $("//button[text()='Forward Icon']");}
	get shareThroApp() { return $("//span[text()='Share through App']");}
	get shareThroEmail() { return $("//span[text()='Share through Email']");}

/* ---------------------------------------------------
* METHODS THAT CAN BE REUSED IN INBOX DETAILS SECTION
*-----------------------------------------------------*/

	//SHARE MESSAGE EMAIL METHODS  
	async shareThroughEmail_msgDetailsView(){
		await browser.customClick(await this.shareBtnOnMessageDetails, 'Share button');
		await browser.customClick(await this.shareThroughEmailBtn, 'Share through email button');
		//await this.enterDetailsOn_shareThroEmail(emailId,feedback);
	} 

	async shareThroughEmail_selectMsg(msgNo, emailId, feedback){	
		await inboxLeftPage.selectMultipleMessages(msgNo);
		await browser.customClick(await this.forwardIconOnSelectMsg, 'forward icon');
		await browser.customClick(await this.shareThroEmail, 'Share through email');
		await this.enterDetailsOn_shareThroEmail(emailId,feedback);
	}

	async enterDetailsOn_shareThroEmail(emailId, feedback){
		await browser.customSetValue(await this.enterEmailTo_ShareThroughEmail, emailId);
		await browser.customSetValue(await this.enterNotesTo_ShareThroughEmail, feedback);
		await browser.customClick(await this.sendButton_ShareThroEmailAndConnect);
	}

// SHARE THROUGH APP METHODS 
	async shareThroughApp_msgDetailsView(people, notes) {
		await browser.customClick(await this.shareBtnOnMessageDetails, 'Share button');
		await browser.customClick(await this.shareThroughAppBtn, 'Share through app button');
		await this.enterDetailsOn_shareThroApp(people, notes);
	}
	
	async shareThroughApp_selectMsg(msgNo, people, notes){
		await inboxLeftPage.selectMultipleMessages(msgNo)
		await browser.customClick(await this.forwardIconOnSelectMsg, 'forward icon')
		await browser.customClick(await this.shareThroApp, 'Share through app');
		await this.enterDetailsOn_shareThroApp(people, notes);
	}

	async enterDetailsOn_shareThroApp(people, notes){
		await browser.customSetValue(await this.enterPeopleNameOn_shareThroughApp, people);
		await browser.customSetValue(await this.enterNotesOn_ShareThroughApp, notes);
	}
}

module.exports = new componentPage();