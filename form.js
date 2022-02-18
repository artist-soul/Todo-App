
function validate(callback){
   
    var username=document.getElementById("username").value;
    var password=document.getElementById("pwd").value;
    
        if(username == "admin" && password == "12345")
    
          {
            alert("Login Successful");
            return true;
          
          }
    
          else
          { 
            alert("invalid username or password"); 
            return false;
          }

 
}

function redirect(){
 
  document.location.href="todolist.html";
}
 validate(callback);