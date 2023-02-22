
 var passwordLength = 8||128;
var characters = [];
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
 var symbols = ["@","%","&","*","!","#","^","~","<","?"]
 var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var generateBtn = document.querySelector("#generate");

// event listener for button

generateBtn.addEventListener("click", writePassword);

//function to print password

function writePassword(){
    var userConfirms = windowAlert();
    // var passwordText = document.querySelector("#password")

    if (userConfirms){
        var password = generatePassword();
        var passwordText= document.querySelector("#password")
    
       passwordText.value = password;
    }else{
    passwordText.value = "";
    }
  }
  function generatePassword(){
   var password = "";
   for (var i = 0; i < passwordLength; i++){
     var Letter = Math.floor(Math.random() * characters.length);
  
     password = password + characters[Letter];
  }
  return password
  }

function windowAlert(){
characters= [];

    var userInput = window.prompt("What is the length of the password?")

     passwordLength = parseInt(userInput)
  
    if (isNaN(passwordLength)){
      window.alert("That is not a number!")
      return
    }
     if (passwordLength < 8 || passwordLength > 128){
  window.alert("Password must be bewteen 8-128 characters")
    return
}
    var UserwantsNo = window.confirm("Would you like to include numbers in your password?")
   var UserwantsSymbols = window.confirm("Would you like symbols in your password?")
   var UserwantslowerCase= window.confirm("Would you like lowercase letters in your password?")
   var UserwantsUppercase = window.confirm("Would you like uppercase letters in your password?")

   if (UserwantsNo === true){
    characters=characters.concat(numbers)
  
   }
   if (UserwantsSymbols === true){
    characters=characters.concat(symbols)
   }
   if (UserwantslowerCase === true){
    characters=characters.concat(lowerCase)
   }
   if (UserwantsUppercase === true){
    characters=characters.concat(upperCase)

   }
   return true;
}



