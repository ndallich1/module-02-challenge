// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var concatArray = []; // this is where all variables will be stored, if variables return as true

  var passwordLength = window.prompt("How many characters would you like the password to be?"); // this will help us store the password for later use
  if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8-128 characters"); // this will alert user that first input was incorrect
  return;
  }

  var lowercase = window.confirm ("Would you like to include lowercase characters?"); // window.confirm will display a window with "ok" or "cancel"
  console.log(lowercase);
  if (lowercase) {
    concatArray = concatArray.concat(lowercaseLetters);
  } 

  var uppercase = window.confirm ("Would you like to include uppercase characters?"); 
  console.log(uppercase);
  if (uppercase) {
    concatArray = concatArray.concat(uppercaseLetters);
  }

  var numeric = window.confirm ("Would you like to include numbers?"); 
  console.log(numeric);
  if (numeric) {
    concatArray = concatArray.concat(number);
  }

  var specialCharacter = window.confirm ("Would you like to include special characters?"); 
  console.log(specialCharacter);
  if (specialCharacter) {
    concatArray = concatArray.concat(special);
  }

  if (!lowercase && !uppercase && !numeric && !specialCharacter) {
    window.alert("Password must be between 8-128 characters"); // this is like a fail gate, "if all are false, run function again, because we need at least one variable that is true"
    return;
  }

  var randomCode = "";
  for (var i = 0; i < passwordLength; i++) {
  var randomCharacter = Math.floor(Math.random() * concatArray.length);
  randomCode = concatArray[randomCharacter] + randomCode;
  } 
  return randomCode;
};


// Write password to the #password input
var lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var uppercaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','"',"'",',','<','.','>','/','?','|'];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
