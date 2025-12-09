/** Scenario: Check how NaN behaves in equality comparisons
    Given a variable with value NaN
    When I compare it with NaN using ==
    Then the result should be false
    When I use Object.is(NaN, NaN)
    Then the result should be true */

    let value=NaN;

    console.log("comparing value with the NaN..",value==NaN);//false
    console.log(typeof value);