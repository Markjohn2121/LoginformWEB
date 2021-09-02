



function validateForm(){


var password = document.getElementById("password").value;
var username = document.getElementById("username").value;
var error_message = document.getElementById("error_message");

if (password == 'valdez21' && username == 'mark') {
  
  
  alerts(password + "" + username);
  
} else {
   // show error message 
 error_message.style.opacity = "1";
 error_message.style.fontSize="18px";
 
error_message.innerHTML =   "Incorrect username or password!";

//removing password & username when incorrect
 document.getElementById("password").value = "";
document.getElementById("username").value = "";




// hide error message when user and pass is click
var pass = document.getElementById("password");
var user = document.getElementById("username");

// pass click event
pass.addEventListener("click",function(){
   //error message hide
error_message.style.opacity = "0";



   
});
//user click event
user.addEventListener("click",function(){
// error message hide
error_message.style.opacity = "0";

 
   
});




 
    

 
 
   return false;
}






}