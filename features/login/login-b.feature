Feature: Engage -- Login -- B

  As an Engage user
  I want to log in to the application
  So that I can see my data

	Background:
		Given I load the QAI environment

	Scenario Outline: Verify branding
		When I log in with <username> and <password>
		When I click the "Sign Out" side panel button
		And I click the "Sign Out" modal button
		Then the login URL has <branding> branding

	Examples:
		| username                | password            | branding                   |
		| "dan.iosif@fourth.com"  | "qaz_XSW_12345"     | "brand=TSQAI"              |
		| "dan.iosif1@fourth.com" | "qaz_XSW_12345"     | "brand=ihg"                |
		| "dan.iosif2@fourth.com" | "qaz_XSW_12345"     | "brand=The%20Real%20Greek" |

  	Scenario Outline: Login happy path on mobile viewport
  		When I change viewport size to <mobile-viewport>
		And I log in with QAI MP user credentials
		Then I do not see the sidebar
		And I take <screenshot-name> screenshot

	Examples:
		| mobile-viewport | screenshot-name     |
		| "iPhone 5"      | "iphone-5.png"      |
		| "iPhone 6"      | "iphone-6.png"      |
