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

function generatePassword() {

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var charactersIncluded = [];
  var allCharacters = [lowerCase, upperCase, numbers, special];


  var characterLength = prompt("How many characters will your password be?");
  while (characterLength < 8 || characterLength > 128) {
    alert("Password must be 8 characters minimum and 128 characters maximum.");
    var characterLength = prompt("How many characters will your password be?");
  }
  console.log(characterLength);

  var confirmLowercase = confirm("Do you want lowercase characters included in your password?");
  console.log(confirmLowercase);

  var confirmUppercase = confirm("DO YOU WANT UPPERCASE CHARACTERS INCLUDED IN YOUR PASSWORD?");
  console.log(confirmUppercase);

  var confirmNumbers = confirm("Do you want numbers included in your password?");
  console.log(confirmNumbers);

  var confirmSpecial = confirm("Do you want special characters included in your password?");
  console.log(confirmSpecial);


  if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecial == false) {
    alert("At least one character type needs to be selected.");
    characterLength.prompt();
  }
  else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == false && confirmSpecial == false) {
    charactersIncluded = lowerCase;
  }
  else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecial == false) {
    charactersIncluded = lowerCase + upperCase;
  }
  else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecial == false) {
    charactersIncluded = lowerCase + upperCase + numbers;
  }
  else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecial == true) {
    charactersIncluded = allCharacters;
  }
  

  Math.floor(Math.random()*characterLength.length)

  
}
