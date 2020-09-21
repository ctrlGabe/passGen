// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My actual work

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upper);

var lower = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lower);

var nums = "0123456789".split("");
console.log(nums);

var special = "!@#$%^&*?".split("");
console.log(special);

var array = 0;
console.log();

function generatePassword() {
  var passLength = prompt("Choose a password length. 8 characters minimum.");
  for (let i = 0; i < passLength; i++) {
    const element = array[i];
  }
}
