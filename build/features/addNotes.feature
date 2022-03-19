# chat admins can't add a staff is the only restriction

@inbox @addNote
Feature: Add notes feature
	As a tester
	I should be able to Add notes

	@TC100 @smoke @inbox @addnotes
	Scenario: Add a notes and verify added notes and who added it
		Given Load the url with valid credentials
		When 4th message is opened and a note "test note" is added
		Then Verify the added note is "test note" and who add it

	@TC101 @regression @inbox @addnotes
	Scenario: Add notes with url and verify added notes and URL clickable
		Given Load the url with valid credentials
		When a note is added with valid url
		Then verify whether the link attached is clickable or not
