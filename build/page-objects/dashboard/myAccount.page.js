class myAccountPage { 

/*Locators*/
	//My account page
  get myAccountBtn() {return $("//span[text()='My account']");}
	get signoutBtn() { return $("//a[@class='logout']")}
}
module.exports = new myAccountPage();
