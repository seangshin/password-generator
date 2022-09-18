// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password
function generatePassword() {
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
  };
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
    } else if (password.characters>=8 && password.characters<=128) {
      return true;
    } else {
      window.alert("Not a number. Try again.");
      return false;
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
    var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+?<>/[]";
    var lowerCount = 0;
    var upperCount = 0;
    var numericCount = 0;
    var specialCount = 0;
    var randomIndex;

    //Splits string into an array to assign an index to each character
    var allCharArray = allChar.split("");
   
    //While loop iteration used to build password and store into array from the password object
    while (password.build.length < password.characters) {
      randomIndex = Math.floor(Math.random() * allCharArray.length); //Generates random index within build character array size

      //If statements to check which criteria the random index falls under and keep count
      if (password.lowercase==="y" && randomIndex>=0 && randomIndex<=25) {
        password.build.push(allCharArray[randomIndex]);//Pushes the randomly chosen character into the password build array
        lowerCount++;
      }
      if (password.uppercase==="y" && randomIndex>=26 && randomIndex<=51) {
        password.build.push(allCharArray[randomIndex]);//Pushes the randomly chosen character into the password build array
        upperCount++;
      }
      if (password.numeric==="y" && randomIndex>=52 && randomIndex<=61) {
        password.build.push(allCharArray[randomIndex]);//Pushes the randomly chosen character into the password build array
        numericCount++;
      }
      if (password.special==="y" && randomIndex>=62 && randomIndex<=82) {
        password.build.push(allCharArray[randomIndex]);//Pushes the randomly chosen character into the password build array
        specialCount++;
      }

      //If statements to check if the specified criteria was used at least once, otherwise reset password and try building again
      if(password.build.length === password.characters -1){
        if (password.lowercase==="y" && lowerCount===0){
          password.build = [];
        }
        if (password.uppercase==="y" && upperCount===0){
          password.build = [];
        }
        if (password.numeric==="y" && numericCount===0){
          password.build = [];
        }
        if (password.special==="y" && specialCount===0){
          password.build = [];
        }
        if (password.build.length===0){
          lowerCount=0;
          upperCount=0;
          numericCount=0;
          specialCount=0;
        }
      }
    }

    //Joins array into string
    var passwordbuildString = password.build.join("");

    return passwordbuildString;//Returns the generated password
  }
  //Returns the value from the addCharacter function used to generate password based on criteria
  return addCharacter(); 
}

// Write password to the #password input
function writePassword() {
  var pass = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
