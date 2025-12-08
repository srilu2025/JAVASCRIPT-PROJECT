/**Scenario: Use typeof to check the type of different variables before and after conversion
    Given a user provides an input "123" in a registration form
    When the system checks its type before conversion
    Then it should be "string"
    When the system converts it to a number using Number()
    And the system checks its type after conversion
    Then it should be "number" */

    let inputValue="123";

    console.log(`type of the input value is..${typeof inputValue}`);

    let stringToNumberValue=Number(inputValue);

    console.log(`type of the input value after converting it to number is...${typeof stringToNumberValue}`);

