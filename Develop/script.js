// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declares an object called password and stores its criteria
var password = {
  characters: null,
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
  construct: "",
};

/*
//Declares strings of characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = lowercaseChar.toUpperCase();
var numericChar = "0123456789";
var specialChar = "~!@#$%^&*()-_=+?<>/[]";
*/

//Generate password
function generatePassword() {
  //Function which prompts user to enter number of characters from 8 to 128. Stores input to password.characters. Returns true or false to determine if input meets requirements.
  function getSize() {
    password.characters = window.prompt("Choose how many characters you would like your password (8 to 128 characters): ");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.characters) {
      window.alert("Cancelled");
      return false;
    } else if (password.characters>128) {
      window.alert("Too many characters.");
      return false;;
    } else if (password.characters<8) {
      window.alert("Not enough characters.");
      return false;
    } else {
      return true;
    }
  } 
  var resultSize = getSize();
  if (resultSize===false) {
    return;
  }
  //Function which prompts user to include lower case. Stores input to password.lowercase. Returns true or false to determine if input meets requirements.
  function getLower() {
    password.lowercase = window.prompt("Would you like your password to include lowercase characters? (y/n)");
    if (!password.lowercase) {
      window.alert("Cancelled");
      return false;
    } else if (password.lowercase==="y") {
      window.alert("You selected yes.");
      return true;
    } else if (password.lowercase==="n") {
      window.alert("You selected no.");
      return true;
    } else {
      window.alert("Response not understood.");
      return false;
    }
  }
  var resultLower = getLower();
  if (resultLower===false) {
    return;
  }
  //Function which prompts user to include upper case. Stores input to password.uppercase. Returns true or false to determine if input meets requirements.
  function getUpper() {
    password.uppercase = window.prompt("Would you like your password to include uppercase characters? (y/n)");
    if (!password.uppercase) {
      window.alert("Cancelled");
      return false;
    } else if (password.uppercase==="y") {
      window.alert("You selected yes.");
      return true;
    } else if (password.uppercase==="n") {
      window.alert("You selected no.");
      return true;
    } else {
      window.alert("Response not understood.");
      return false;
    }
  }
  var resultUpper = getUpper();
  if (resultUpper===false) {
    return;
  }
  //Function which prompts user to include numierc. Stores input to password.numeric. Returns true or false to determine if input meets requirements.
  function getNumeric() {
    password.numeric = window.prompt("Would you like your password to include numeric characters? (y/n)");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.numeric) {
      window.alert("Cancelled");
      return false;
    } else if (password.numeric==="y") {
      window.alert("You selected yes.");
      return true;
    } else if (password.numeric==="n") {
      window.alert("You selected no.");
      return true;
    } else {
      window.alert("Response not understood.");
      return false;
    }
  }
  var resultNumeric = getNumeric();
  if (resultNumeric===false) {
    return;
  }
  //Function which prompts user to include special. Stores input to password.special. Returns true or false to determine if input meets requirements.
  function getSpecial() {
    password.special = window.prompt("Would you like your password to include special characters? (y/n)");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.special) {
      window.alert("Cancelled");
      return false;
    } else if (password.special==="y") {
      window.alert("You selected yes.");
      return true;
    } else if (password.special==="n") {
      window.alert("You selected no.");
      return true;
    } else {
      window.alert("Response not understood.");
      return false;
    }
  }
  var resultSpecial = getSpecial();
  if (resultSpecial===false) {
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
