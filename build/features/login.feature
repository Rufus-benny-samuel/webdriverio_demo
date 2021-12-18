@inbox
Feature: Login functionality
	As a user
	I should be able to login to the application

	@smoke
	Scenario: Existing users should be able to login if valid credentials are entered 
		Given load the url
		When the user enters the existing valid credentials, they should be able to login
		Then logout of the application