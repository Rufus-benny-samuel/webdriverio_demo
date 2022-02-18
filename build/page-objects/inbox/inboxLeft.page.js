class inboxLeft{

//Select and unselect Messages 
	get selectMessage(){return $("//button[@class='fw- 0 g-checkbox']");}
	get unselectMessage() { return $("//button[@class='fw- 0 g-checkbox g-checkbox-checked']");}
	get selectAll() { return $("//label[text()='Select All']");}

//Move message
	get trashMessage() { return $("//button[@data-tips='Trash']");}
	get archiveMessage() { return $("//button[@data-tips='Archive']");}
	get moveToInbox() { return $("//button[@data-tips='Move To Inbox']");}

// Mark as Read / unread 
	get markAsRead(){ return $("//span[text()='Mark as Read']")}
	get markAsUnread(){ return $("//span[text()='Mark as Unread']")}

		
/* ---------------------------------------------------
* METHODS THAT CAN BE REUSED IN INBOX LEFT SECTION
*-----------------------------------------------------*/

	async selectMultipleMessages(msgNo){
		await browser.customClick(await $(`(//button[@class='fw- 0 g-checkbox'])[${msgNo}]`), 
								`${msgNo} Message checkbox`);
		//use interaction Id and store message names in a list 
	}

//ARCHIVE MULTIPLE MESSAGES 
	async selectAndArchiveMessages(msgNo){
			await browser.customClick(await this.archiveMessage, 'Archive Message');
		// Navigate to archive tab and verify here.[Compare with the list which got from selectMultipleMessages]
	}

//UNARCHIVE MULTIPLE MESSAGES 
	async selectAndUnarchiveMessages(msgNo){
			await browser.customClick(await this.moveToInbox, 'Unarchive Message');
		// Navigate to inbox and verify here.[Compare with the list which got from selectMultipleMessages]
	}

//DELETE MULTIPLE MESSAGES 
async selectAndDeleteMessages(msgNo){
		await browser.customClick(await this.trashMessage, 'Trash Message')
		//Navigate to trash tab and verify there.[Compare with the list which got from selectMultipleMessages]

	}
//MOVE TO INBOX MULTIPLE MESSAGES 
async selectAndMoveToInboxMessages(msgNo){
		await browser.customClick(await this.moveToInbox, 'Move to inbox');
		// Navigate to inbox and verify here.[Compare with the list which got from selectMultipleMessages]
	}

//MARK AS READ AND UNREAD 
async selectAndMarkAsRead(msgNo){
		await browser.customClick(await this.markAsRead, 'Mark as read');
	 // verify now.[Compare with the list which got from selectMultipleMessages]

}
async selectAndMarkAsUnread(msgNo){
		await browser.customClick(await this.markAsUnread, 'Mark as unread');
		// verify now.[Compare with the list which got from selectMultipleMessages]
}

}
	module.exports = new inboxLeft();
