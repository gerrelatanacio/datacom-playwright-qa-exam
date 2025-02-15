Feature: Registration Form Validations

  # Scenario: Visit the Registration Form Page
  #   Given User navigates to Registration Form Page
  #   Then the title should contain "QA Practice | Learn with RV"

  # Scenario: Validate that user can successfully registers when all fields are populated with valid values
  #   Given User navigates to Registration Form Page
  #   When User enters a "valid" input in the "firstName" field
  #   When User enters a "valid" input in the "lastName" field
  #   When User enters a "valid" input in the "phone" field
  #   When User enters a "valid" input in the "emailAddress" field
  #   When User enters a "valid" input in the "password" field
  #   When User selects "Cameroon" option from the "Country" dropdown
  #   # When User ticks the "Terms And Conditions" field
  #   When User clicks on the "Register" button
  #   Then Validate "Successful" registration


  Scenario Outline: Validate Successful Registration - <scenario>
    Given User navigates to Registration Form Page
    When User enters a "<firstNameValue>" input in the "firstName" field
    When User enters a "<lastNameValue>" input in the "lastName" field
    When User enters a "<phoneValue>" input in the "phone" field
    When User enters a "<emailAddressValue>" input in the "emailAddress" field
    When User enters a "<passwordValue>" input in the "password" field
    When User selects "<countryValue>" option from the "Country" dropdown
    # When User ticks the "Terms And Conditions" field
    When User clicks on the "Register" button
    Then Validate "Successful" registration
    Examples:
      | firstNameValue | lastNameValue | phoneValue    | emailAddressValue | passwordValue | countryValue | scenario                                                          |
      | valid          | valid         | valid         | valid             | valid         | Philippines  | Valid values for all fields                                       |
      | empty          | valid         | valid         | valid             | valid         | Philippines  | Valid values for mandatory fields                                 |
      | valid          | valid         | validExactMin | valid             | valid         | Philippines  | Valid values for all fields - min phone characters                |
      | valid          | valid         | valid         | valid             | validExactMin | Philippines  | Valid values for all fields - min password characters             |
      | valid          | valid         | valid         | valid             | validExactMax | Philippines  | Valid values for all fields - max password characters             |
      | valid          | valid         | validExactMin | valid             | validExactMin | Philippines  | Valid values for all fields - min phone & min password characters |
      | valid          | valid         | validExactMin | valid             | validExactMax | Philippines  | Valid values for all fields - min phone & max password characters |