@inbox
Feature: Share note
	As a user
	I should be able to share a message via connect or via email

	@three
	Scenario: Share a message via connect
		Given load the url with valid credentials
		When The user shares a message
		Then It has to send a message via connect tab