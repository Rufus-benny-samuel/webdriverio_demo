class inboxRight{
	
	get forwareded_by() {
		return $('(//span[@class="ib-label-sm fw-medium"])[1]');
	}
	get forwarded_ToAddress() {
		return $('//div[@class="ib-notes-text"]/a');
	}
	get forwarded_MsgNoteText() {
		return $('//div[contains(text(),"Message Note")]');
	}
}
	module.exports = new inboxRight();
