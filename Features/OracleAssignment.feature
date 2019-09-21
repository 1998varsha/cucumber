Feature: Facebook Login

  Scenario: To Check Login Functionality with Valid Username and Valid Password
    Given Chrome is Opened & Login Page is displayed
    When user Enters "sys" and "Newuser123"
    And Click on Login button
    Then Home Page should display
    And Click on Administrator &  Click on Database Users
    And Click on Create
    When user enters following details
      | Username | Password | ConfirmPassword |
      | demo2    | demo123  | demo123         |
    And Click on create
#examples to be used for repeating same script multiple times
