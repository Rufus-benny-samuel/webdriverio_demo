class myProfilePage {
	
get loginUserName() { return $('//h2[@class="heading"]');}
get myProfileTab() { return $('//a[text()="My Profile"]')}

async getLoggedInUserName () {
		await browser.waitUntilDisplayed(this.loginUserName, 5000)
	  let userName = await browser.customGetText(await this.loginUserName, 'Logged in user name');
		console.log('logged in userName is', userName);
	  }
}
module.exports = new myProfilePage();
