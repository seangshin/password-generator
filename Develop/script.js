// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declares an object called password and stores its criteria
var password = {
  characters: 0,
  lowercase: "string",
  uppercase: "string",
  numeric: "string",
  specialChar: "string",
};

//Generate password
function generatePassword() {

  //Prompts user to enter number of characters from 8 to 128. Stores input to password.characters
  password.characters = window.prompt("Choose how many characters you would like your password (8 to 128 characters): ");
  // If user pressed Cancel, send alert that it is cancelled and end function
  if (!password.characters) {
    window.alert("Cancelled");
    return;
  } else if (password.characters>128) {
    window.alert("Too many characters.");
    return;
  } else if (password.characters<8) {
    window.alert("Not enough characters.");
    return;
  }

  //Prompts user to include lowercase
  password.lowercase = window.prompt("Would you like your password to include lowercase characters? (y/n)");
  // If user pressed Cancel, send alert that it is cancelled and end function
  if (!password.lowercase) {
    window.alert("Cancelled");
    return;
  } else if (password.lowercase==="y") {
    window.alert("You selected yes.");
  } else if (password.lowercase==="n") {
    window.alert("You selected no.");
  } else {
    window.alert("Response not understood.");
    return;
  }

  //Prompts user to include uppercase
  password.uppercase = window.prompt("Would you like your password to include uppercase characters? (y/n)");
  // If user pressed Cancel, send alert that it is cancelled and end function
  if (!password.uppercase) {
    window.alert("Cancelled");
    return;
  } else if (password.uppercase==="y") {
    window.alert("You selected yes.");
  } else if (password.uppercase==="n") {
    window.alert("You selected no.");
  } else {
    window.alert("Response not understood.");
    return;
  }

  //Prompts user to include numeric
  password.numeric = window.prompt("Would you like your password to include numeric characters? (y/n)");
  // If user pressed Cancel, send alert that it is cancelled and end function
  if (!password.numeric) {
    window.alert("Cancelled");
    return;
  } else if (password.numeric==="y") {
    window.alert("You selected yes.");
  } else if (password.numeric==="n") {
    window.alert("You selected no.");
  } else {
    window.alert("Response not understood.");
    return;
  }

  //Prompts user to include special characters
  password.specialChar = window.prompt("Would you like your password to include special characters? (y/n)");
  // If user pressed Cancel, send alert that it is cancelled and end function
  if (!password.specialChar) {
    window.alert("Cancelled");
    return;
  } else if (password.specialChar==="y") {
    window.alert("You selected yes.");
  } else if (password.specialChar==="n") {
    window.alert("You selected no.");
  } else {
    window.alert("Response not understood.");
    return;
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
