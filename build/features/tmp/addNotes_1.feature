@inbox
@addNote
Feature: Add notes feature
@TC100
@smoke
@inbox
@addnotes
@inbox
@addNote
Scenario: Add a notes and verify added notes and who added it
Given Load the url with valid credentials
When 4th message is opened and a note "test note" is added
Then Verify the added note is "test note" and who add it
