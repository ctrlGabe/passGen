// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //took the .split out of this because it was causing commas to be added to the array and I realized it was unnecessary anyways
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(upper);

  var lower = "abcdefghijklmnopqrstuvwxyz";
  console.log(lower);

  var number = "0123456789";
  console.log(number);

  var special = "~!@#$%^&*()<>?";
  console.log(special);

  var array = "";
  console.log("array", array);

  var passLength = prompt("Choose a password length. 8 characters minimum.");

  //tried as an if satatement at firsat, but if you ran through it twice, it would just accept whatever number you entered, so I changed it to a while statement
  while (passLength < 8 || passLength > 128) {
    alert("password must be between 8 and 128 characters long");
    var passLength = prompt("Choose a password length. 8 characters minimum.");
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

  //same as line 22
  while (
    upperChoice === false &&
    lowerChoice === false &&
    numberChoice === false &&
    specialChoice === false
  ) {
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

  if (upperChoice === true) {
    array = array.concat(upper);
  }

  if (lowerChoice === true) {
    array = array.concat(lower);
  }

  if (numberChoice === true) {
    array = array.concat(number);
  }

  if (specialChoice === true) {
    array = array.concat(special);
  }

  console.log("array", array);

  var actualPassword = "";

  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * array.length);
    const randomChoice = array[random];
    console.log(randomChoice);

    actualPassword = actualPassword + randomChoice;
  }

  return actualPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
