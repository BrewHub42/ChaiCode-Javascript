const accountId = 144553;
let accountEmail = "sushant@email.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 2 // not allowed

accountEmail = "sushantshinde@email.com";
accountPassword = "21212121";
accountCity = "Mumbai";

/*
    Prefer not to use var because of issue with block and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
