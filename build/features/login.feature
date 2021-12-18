@inbox
Feature: Login functionality
	As a user
	I should be able to login to the application

	@smoke
	Scenario: Existing users should be able to login if valid credentials are entered and verify that
		Given load the url
		When the user enters the existing valid credentials
		Then they should be able to login

	@regression
	Scenario: Check user can able to logout of the application
		Given load the url and login with valid credentials
		When the user clicks on Sign out button
		Then the user should be logged out of the application