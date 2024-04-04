Feature: Register new user

  Scenario: User enters user data
    When a "POST" request is made to path "/" with body:
      """
      {
        "email": "user@email.com",
        "firstName": "Test",
        "lastName": "User"
      }
      """
    Then the response body should be:
      """
      {
        "email": "user@email.com",
        "firstName": "Test",
        "lastName": "User"
      }
      """