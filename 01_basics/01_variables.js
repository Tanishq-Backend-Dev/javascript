const accountId = 144553;
let accountEmail = `tanishq02thakur@gmail.com`;
var accountPassword = `12345`;
accountCity = `Jaipur`;
let accountState;
// accountId = 2; // Not allowed

accountEmail = `tanishqt54@gmail.com`;
accountPassword = `2121212121`;
accountCity = `Bengaluru`;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/