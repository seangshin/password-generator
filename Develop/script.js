// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declares an object called password and stores its criteria
var password = {
  resultSize: null,
  resultLower:null,
  resultUpper: null,
  resultNumeric: null,
  resultSpecial: null,
  characters: null,
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
  build: [],
  result: null,
};

//Generate password
function generatePassword() {
  //Function which prompts user to enter number of characters from 8 to 128. Stores input to password.characters. Returns true or false to determine if input meets requirements.
  function getSize() {
    password.characters = window.prompt("Choose how many characters you would like your password (8 to 128 characters): ");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.characters) {
      window.alert("Cancelled.");
      return false;
    } else if (password.characters>128) {
      window.alert("Too many characters. Try again.");
      return false;;
    } else if (password.characters<8) {
      window.alert("Not enough characters. Try again.");
      return false;
    } else {
      return true;
    }
  } 
  password.resultSize = getSize();
  if (password.resultSize===false) {
    return;
  }
  //Function which prompts user to include lower case. Stores input to password.lowercase. Returns true or false to determine if input meets requirements.
  function getLower() {
    password.lowercase = window.prompt("Would you like your password to include lowercase characters? (y/n)");
    if (!password.lowercase) {
      window.alert("Cancelled.");
      return false;
    } else if (password.lowercase==="y") {
      return true;
    } else if (password.lowercase==="n") {
      return true;
    } else {
      window.alert("Response not understood. Try again.");
      return false;
    }
  }
  password.resultLower = getLower();
  if (password.resultLower===false) {
    return;
  }
  //Function which prompts user to include upper case. Stores input to password.uppercase. Returns true or false to determine if input meets requirements.
  function getUpper() {
    password.uppercase = window.prompt("Would you like your password to include uppercase characters? (y/n)");
    if (!password.uppercase) {
      window.alert("Cancelled.");
      return false;
    } else if (password.uppercase==="y") {
      return true;
    } else if (password.uppercase==="n") {
      return true;
    } else {
      window.alert("Response not understood. Try again.");
      return false;
    }
  }
  password.resultUpper = getUpper();
  if (password.resultUpper===false) {
    return;
  }
  //Function which prompts user to include numierc. Stores input to password.numeric. Returns true or false to determine if input meets requirements.
  function getNumeric() {
    password.numeric = window.prompt("Would you like your password to include numeric characters? (y/n)");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.numeric) {
      window.alert("Cancelled.");
      return false;
    } else if (password.numeric==="y") {
      return true;
    } else if (password.numeric==="n") {
      return true;
    } else {
      window.alert("Response not understood. Try again.");
      return false;
    }
  }
  password.resultNumeric = getNumeric();
  if (password.resultNumeric===false) {
    return;
  }
  //Function which prompts user to include special. Stores input to password.special. Returns true or false to determine if input meets requirements.
  function getSpecial() {
    password.special = window.prompt("Would you like your password to include special characters? (y/n)");
    // If user pressed Cancel, send alert that it is cancelled and end function
    if (!password.special) {
      window.alert("Cancelled.");
      return false;
    } else if (password.special==="y") {
      return true;
    } else if (password.special==="n") {
      return true;
    } else {
      window.alert("Response not understood. Try again.");
      return false;
    }
  }
  password.resultSpecial = getSpecial();
  if (password.resultSpecial===false) {
    return;
  }

  //Validate user input to ensure at least one character type is selected
  if (password.lowercase==="n" && password.uppercase==="n" && password.numeric==="n" && password.special==="n"){
    window.alert("You did not select any criteria. Try again.")
    return;
  }

 //Function used to construct a password based on the user defined criteria from above functions
  function addCharacter() {
    //Declares local variables used to categorize password critera and an array to construct the password
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = lowercaseChar.toUpperCase();
    var numericChar = "0123456789";
    var specialChar = "~!@#$%^&*()-_=+?<>/[]";
    var buildChar = [];

    //If statements to define the possible character choices based on criteria defined by the user
    if (password.lowercase==="y") {
      buildChar = buildChar + lowercaseChar;
    }
    if (password.uppercase==="y") {
      buildChar = buildChar +uppercaseChar;
    }
    if (password.numeric==="y") {
      buildChar = buildChar + numericChar;
    }
    if (password.special==="y") {
      buildChar = buildChar + specialChar;
    }

    //Splits string into an array to assign an index to each character
    var buildCharArray = buildChar.split("");
   
    //Iteration to build password and store into array from the password object
    for (var i=0; i<password.characters; i++) {
      var randomIndex = Math.floor(Math.random() * buildCharArray.length); //Generates random index within build character array size
      password.build.push(buildCharArray[randomIndex]);//Pushes the randomly chosen character into the password build array

      //Add conditions to check if all criteria used at least once
    }

    //Joins array into string
    var passwordbuildString = password.build.join("");

    window.alert(passwordbuildString);
    return passwordbuildString;//Returns the generated password
  }
  //Calls function to generate password based on criteria and assigns to result property within the password object
  password.result = addCharacter();
}


// Write password to the #password input
function writePassword() {
  password.result = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
