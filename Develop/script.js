// My Character Variables

let lowercase = "abcdefghijklmnopqrstuvwxyz".split(" ");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
let specialchar = ")(*&^%$#@!~-_".split(" ");
let numschar = "0123456789".split(" ");


// My Functions

function passoptions() {
  let passwordLength = prompt("What length would you like your pasword (numberic value only)")
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must select a length between 8 and 128. Sorry, try again!")
    return
  }

  // Confirmation of variable options
  
  let wantsLower = confirm("Do you want to include lower case letters?");
  let wantsUpper = confirm("Do you want include upper case letters");
  let wantsSpecial = confirm("Do you want to include special characters?");
  let wantsNumber = confirm("Do you want to include numbers?")

  if (wantsLower === false $$ wantsUpper === false && wantsSpecial === false && wantsNumber === false) {
  alert("Please choose a minimum of one option.")
  return    
  }

  let criteria = {
    length: passwordLength,
    lower: wantsLower,
    upper: wantsUpper,
    special: wantsSpecial,
    number: wantsNumber
  }
  return criteria

}

function getRandom(xxx) {
  let getRandom

}





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
