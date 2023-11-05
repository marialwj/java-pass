choiceArr =[]; {
var length= 8;
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialcharac = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '~'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function generatePassword() {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function writePassword() {
  var correctpassword = generatePrompts();
  var passwordText = document.querySelector("#password");

  if (correctpassword) {
    var generatedPassword = generatePassword();
    passwordText.value = generatedPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePrompts() {
  console.log("Hi! You clicked the button.")
  choiceArr = [];

length = parseInt(prompt("How many characters would you like your password to be? (8-128 characters"));
  if(isNaN(length) || length < 8 || length > 128 ) {
    alert("Length has to be a NUMERICAL value between 8-128 😋 Try Again!");
    return false;
}
  if (confirm("Hit 'OK' if you want upper case letters")) {
    choiceArr = choiceArr.concat(uppercase);
  }
  if (confirm("Hit 'OK' if you want lowercase case letters")) {
    choiceArr = choiceArr.concat(lowercase);
  }
  if (confirm("Hit 'OK' if you want special characters")) {
    choiceArr = choiceArr.concat(specialcharac);
  }
  if (confirm("Hit 'OK' if you want numbers")) {
    choiceArr = choiceArr.concat(numbers);
  }
  return true;
}
  
  

