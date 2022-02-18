const loginPage = require('../../pages/loginPage');
const settingsPage = require('../../pages/settingsPage/settingsPage');
const commonPage = require('../../pages/commonPage');
const creds = require('../../credentials');

describe('Add Team testcases under my directory', function() {
	before(function() {
		browser.maximizeWindow();
		browser.url('./');
		loginPage.login(creds.user, creds.password);
	});

	it('Add new team with few team members and verify team members are added and delete the added team:', function() {
		const teamName = 'NewTeam';
		commonPage.clickSettingsTab();
		settingsPage.clickMyDirectorySection();
		settingsPage.clickAddTeamButton();
		settingsPage.enterTeamName(teamName);
		settingsPage.clickAddMember();
		settingsPage.addTeamMembersForATeam(2);
		settingsPage.clickSaveButton();
		settingsPage.verifyHeaderNotification('Team Created Successfully');
		settingsPage.deleteTeam(teamName);
		settingsPage.clickDeleteButton();
		settingsPage.verifyHeaderNotification('Team Deleted');
	});
});
