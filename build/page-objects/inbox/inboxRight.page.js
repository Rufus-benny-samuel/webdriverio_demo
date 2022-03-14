class inboxRight{

//ACTIVITIES 	
//SHARE MESSAGE LOCATORS 
	get forwareded_by() {return $("//span[contains(text(), 'Forwarded by ')]");}
	get forwarded_ToAddress() {return $('//div[@class="ib-notes-text"]/a');}
	get forwarded_MsgNoteText() {return $('//div[contains(text(),"Message Note")]');}

//ADD NOTES LOCATORS 
	get whoAddedNotes() { return $('//span[contains(text(), "Note by ")]');}
	get notesSection() { return $('//div[@class="ib-notes-text"]')};

//MOVE MESSAGE LOCATORS 
	get archiveButtonOnActivity() { return $('//cite[text()="Send to Archive"]');}
	get sendToInboxBtnOnActivity() { return $('//cite[text()="Send to Inbox"]'); }
	get sendToTrashBtnOnActivity() { return $('//cite[text()="Send to Trash"]');}
	get archiveSuccessNotif() {return $("//p[text()='Moved to Archive']")}
	get trashSuccessNotif() {return $("//p[text()='Moved to Trash']")}
	get moveToInboxNotif() {return $("//p[text()='Moved to Inbox']")}

//GIVE FEEDBACK LOCATOR
	get giveFeedbackBtn() { return $('//cite[text()="Give Feedback"]'); }
	get giveFeedback_textArea(){ return $('.g-textarea g-input')}
	get happyFeedback() { return $("//*[@href='#icon-smiley-positive']")}

//ARCHIVE SINGLE MESSAGE 
	get sendToArchiveBtn(){ return  $("//cite[text()='Send to Archive']"); }

//UNARCHIVE SINGLE MESSGAES 
	get UnarchiveBtn(){ return  $("//cite[text()='Send to Inbox']"); }

//DELETE SINGLE MESSAGE FROM INBOX AND ARCHIVE
	get sendToTrashBtn(){ return  $("//cite[text()='Send to Trash']"); }

//PRINT MESSAGE 
	get printBtn(){ return  $("//cite[text()='Print Message']"); }

//GIVE FEEDBACK
	get feedbackBtn(){ return  $("//cite[text()='Give Feedback']"); }

/* ---------------------------------------------------
* METHODS THAT CAN BE REUSED IN INBOX RIGHT SECTION
*-----------------------------------------------------*/




}
	module.exports = new inboxRight();
