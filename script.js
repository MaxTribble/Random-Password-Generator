// Assignment code here
//array of letters and numbers 
var number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
var symbol = ["!" , "@" , "#" , "$" , "%" , "&" , "*"]
var cap = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]
var noCap = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"] 
var characters  =  window.prompt ("How many characters");
var capitol = window.confirm ("Do you want capitol letters?");
var symbols = window.confirm ("Do you want symbols?");
var numbers = window.confirm ("Do you want numbers?");
//invasive pop up 
// Get references to the #generate element  
function validate() {
  
    
  
  window.alert ("Characters need to be between 8-128");
    var characters  =  window.prompt ("How many characters");
    return arguments.callee;
} 
for (
  {if (typeof parseInt(characters) === typeof 5) { window.alert ("Characters need to be between 8-128");
  var characters  =  window.prompt ("How many characters");}} 
  else {
 if (characters > 128) {
  window.alert ("Characters need to be between 8-128");
  var characters  =  window.prompt ("How many characters");
 }})
//if (characters > 128) {
  //window.alert ("Characters need to be between 8-128");
  //var characters  =  window.prompt ("How many characters");
    //} 
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  let component = noCap
  if (capitol) component = component.concat(cap)
  if (symbols) component = component.concat(symbol)
  if (numbers) component = component.concat(number)

  var passwordCharacters = []

  for (let i = 0; i < characters; i++) {
    var passwordS = component[Math.floor(Math.random() * component.length)]
    passwordCharacters.push(passwordS)
    //return passwordCharacters.String("")
  }
  console.log(passwordCharacters.join(""))
    
    console.log(capitol);
    console.log(symbol);
  //prompts for criteria
  //8-128 characters , lower case , upper case , numbers , special
  //validate it's within parameters
  //display password
  return passwordCharacters.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//characters
//paste password in the generate password doc