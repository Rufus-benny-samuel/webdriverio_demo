@inbox @addNote
Feature: Add notes feature
	As a tester
	I should able to Add notes scenarios

	@one @smoke
	Scenario: Add a notes and verify added notes
		
		When a note is added
		Then Verify the addedGiven Load the url with valid credentials notes

	@two 
	Scenario: Add notes with url and verify added notes and URL clickable
		Given Load the url with valid credentials
		When a note is added with valid url
		Then I verify the added notes
		

# Scenario: Add notes with File and verify file added
# When I add the notes with "<file>"
# Then Verify the added notes with file

# Scenario: Add notes with @mention and verify notes added and user gets message in connect tab
# When I add the notes with "<mention>"
# Then Verify the added notes
# And Verify the user gets message in connect tab
