const checkpassword = () =>{
    let password1 = document.getElementById("password1").value; 
    let password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
        document.getElementById("passworderror").innerHTML = "*Passwords do not match";
    }
    else {
        document.getElementById("passworderror").innerHTML = "";
    }
     
  }