//variable arrays to grab the password elements from
var number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
var symbol = ["!" , "@" , "#" , "$" , "%" , "&" , "*"]
var cap = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]
var noCap = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

//window prompt to get the length of password
var characters = window.prompt ("How long do you want your password to be? (Value from 8-128)");

//confirming wheather they want certain elements in their password with window pop ups
var capitol = window.confirm ("Do you want capitol letters?");
var symbols = window.confirm ("Do you want symbols?");
var numbers = window.confirm ("Do you want numbers?");

 //turning characters variable into a number instead of the default(string)
var characters = parseInt(characters)

//code running in a loop to make sure the user enters valid character
while (isNaN(characters) || characters < 8 || characters > 128){
      var characters  =  window.prompt ("Input valid number between 8-128.");
    } 

//connects the generate button tag from css and html and turns it into a new variable
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // starting with the non-capitol array, adding other arrays to it using concat, and making the concat list its own varible for later use
  let component = noCap
  if (capitol) component = component.concat(cap)
  if (symbols) component = component.concat(symbol)
  if (numbers) component = component.concat(number)

//open array to put the random characters in to
  var passwordCharacters = []

// random number generator to select a random item inside the array: component. Setting the maximum limit to the length of component to reach every item inside.
  for (let i = 0; i < characters; i++) {
    var passwords = component[Math.floor(Math.random() * component.length)]
    passwordCharacters.push(passwords) // pushing the randomized peices of the component array in to the empty array
  }
  return passwordCharacters.join("") // returning the password characters with the join function to make it all in to one string with no seperation
}

// setting the previous function that assembled our generated password to a variable, selecting the empty password line and displaying the assembled password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// event listener to detect a click on the generate button and call the write password function to display the new generated password
generateBtn.addEventListener("click", writePassword);
