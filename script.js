// Assignment Code
var generateBtn = document.querySelector("#generate");

// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// console.log(upper);

// var lower = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(lower);

// var number = "0123456789".split("");
// console.log(number);

// var special = "!@#$%^&*?".split("");
// console.log(special);

// var array = " ";
// console.log(array);

function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(upper);

  var lower = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lower);

  var number = "0123456789".split("");
  console.log(number);

  var special = "!@#$%^&*?".split("");
  console.log(special);

  var array = " ";
  console.log(array);

  var passLength = prompt("Choose a password length. 8 characters minimum.");
  if (passLength < 8 || passLength > 128) {
    alert("password must be between 8 and 128 characters long");
    location.reload();
  }

  var upperChoice = confirm(
    "would you like your password to contain uppercase letters?"
  );

  var lowerChoice = confirm(
    "would you like your password to contain lowercase letters?"
  );

  var numberChoice = confirm(
    "would you like your password to contain numbers?"
  );

  var specialChoice = confirm(
    "would you like your password to contain special characters?"
  );

  if (!upperChoice && !lowerChoice && !numChoice && !specialChoice) {
    alert(
      "Your password is empty. Select some type of characters to include in your password"
    );

    var upperChoice = confirm(
      "would you like your password to contain uppercase letters?"
    );

    var lowerChoice = confirm(
      "would you like your password to contain lowercase letters?"
    );

    var numberChoice = confirm(
      "would you like your password to contain numbers?"
    );

    var specialChoice = confirm(
      "would you like your password to contain special characters?"
    );
  }

  if (upperChoice) {
    array = array.concat(upper);
  }

  if (lowerChoice) {
    array = array.concat(lower);
  }

  if (numberChoice) {
    array = array.concat(number);
  }

  if (specialChoice) {
    array = array.concat(upper);
  }

  console.log("array", array);

  console.log("generatePassword", generatePassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
