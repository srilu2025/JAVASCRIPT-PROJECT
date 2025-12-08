/**Scenario: Perform implicit type coercion by subtracting a string from a number
    Given an invoice shows 10 outstanding and a user applies a coupon "5"
    When the system subtracts the string from the number
    Then the result should be a number 5 */

    let invoice=10;

    let userCoupon="5";

    let totalInvoice=invoice-userCoupon;

    console.log("total value after applied coupon..",totalInvoice);
        console.log("type is..",typeof totalInvoice);