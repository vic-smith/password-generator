// Assignment code here
const lowercase ="abcdefghijklmonpqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*";
const newString = "";


const characters = []; 

console.log(characters,);


var passwordLength = "";
var passwordText = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    generatePassword();


function generatePassword(passwordLength, lowercase, uppercase, numbers, symbols) { 

confirm("Would you like to create a secure password?");
  if (true) {   
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
    passwordLength = parseInt(passwordLength);
    
    
    }
    console.log(passwordLength);
    if (passwordLength > 128 || passwordLength < 8){
    passwordLength = prompt("Password must be between 8 and 128 characters."); 
            
    
    }    

var lowercase = confirm("Would you like to include lowercase letters?");
  if (lowercase == true){
    alert("Password will include lowercase characters.");
    characters.push("abcdefghijklmonpqrstuvwxyz");
    }
    else {
    alert("Password will exclude lowercase characters.");
    } 
    console.log(characters);

var uppercase = confirm("Would you like to include uppercase letters?");
  if (uppercase == true){
    alert("Password will include uppercase characters.");
    characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");   
    }
    else{
    alert("Password will exclude uppercase characters.");
    }

    console.log(characters);

var numbers = confirm("Would you like to include numbers?");
  if (numbers == true){
    alert("Password will include numbers.");
    characters.push("0123456789");       
    }
    else{
    alert("Password will exclude numbers.");
    }

    console.log(characters);

var symbols = confirm("Would you like to include symbols?");
  if (symbols == true){
    alert("Password will include symbols.");
    characters.push("!@#$%^&*");  
    }
    else{
    alert("Password will exclude symbols.");
    }
  
    console.log(characters);

    const character = characters.join("");
    let charactersLength = character.length;
    console.log(character);

for (var i = 0; i<passwordLength; i++) {
    passwordText += character.charAt(Math.floor(Math.random() * charactersLength + 1));
}
   var password = document.getElementById("password");
   password.value = passwordText;
   return passwordText;
}
    


//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

};





