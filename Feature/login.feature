Feature: login_action
Scenario Outline: Successfull login with valid credentials
Given user will open the application
When user click on the signin link
And user enters "<username>" and "<password>"
Then Message displayes login successfully
Examples:
|username|password|
|Lalitha|Password123|
|name|Pass|