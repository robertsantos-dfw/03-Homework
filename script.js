// My Array Variables
let charArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
let specialcharArray = ")(*&^%$#@!~-_".split("");
let numberArray = "0123456789".split("");
var charNum = document.querySelector("#charNum");
var generate = document.querySelector("#generate");
var yourPw = document.querySelector("#yourPw");
var copy = document.querySelector("#copy");

// My Functions

function passoptions() {
	let passwordLength = prompt(
		"What length would you like your pasword to be (numberic value only)"
	);
	if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
		alert("You must select a length between 8 and 128. Sorry, try again!");
		return;
	}

	// Confirmation of variable options

	let wantschar = confirm("Do you want to include upper or lower case alpha?");
	let wantsSpecial = confirm("Do you want to include special characters?");
	let wantsNumber = confirm("Do you want to include numbers?");

	// If they do not choose any password options
	if (
		wantschar === false &&
		wantsSpecial === false &&
		wantsNumber === false
	) {
		alert("Please choose a minimum of one option.");
		return;
	}

	// let criteria = {
	// 	length: passwordLength,
  //   char: wantschar,
  //   special: wantsSpecial,
	// 	number: wantsNumber
	// }
	// return criteria
}

// Event Listner to generate random password
generate.addEventListener("click", function() {
  var characters = char;
  wantsNumber ? (characters += numberArray) : "";
  wantsSpecial ? (characters += specialcharArray) : "";
  password.value = password(charNum.value, characters);
});

// loop to generate random password
function password(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;

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