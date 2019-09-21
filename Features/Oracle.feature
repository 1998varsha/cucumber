Feature: Facebook Login

Scenario Outline: To Check Login Functionality with Valid Username and Valid Password

Given Chrome is Opened & Login Page is displayed
When user Enters "<UN>" & "<PWD>"
And Click on Login button
Then Home Page should display
Examples:
    |UN|PWD|
    |demo|demo123|
    |hr|hr|
    |sys|Newuser123|
    |system|Newuser123|