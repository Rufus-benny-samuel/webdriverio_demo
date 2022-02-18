@inbox
Feature: Share note
	As a user
	I should be able to share a message via connect or via email

	@TC104 @smoke @inbox
	Scenario: Share a message via connect
		Given Load the url with valid credentials
		When The user shares a message rufus.robert@anywhere.co to check this
		Then Verify success notification