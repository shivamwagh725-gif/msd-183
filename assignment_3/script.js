function validateForm(){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("mobileError").innerHTML="";

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerHTML="name should not be empty";
        valid=false;
    }
    else if(!/^[A-Za-z]+$/.test(name)){
        document.getElementById("nameError").innerHTML="name should contain the alphabet";
        valid=false;
    }

    if(email === ""){
        document.getElementById("emailError").innerHTML="email should not be empty";
        valid=false;
    }
    else if(!/^\S+@\S+\.\S+$/.test(email)){
        document.getElementById(emailError).innerHTML="email format invalid";
        valid=false;
    }

    if(mobile === ""){
        document.getElementById("mobileError").innerHTML="mobile number should not be empty";
        valid=false;
    }
    else if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("mobileError").innerHTML="mobile should contain the number";
        valid=false;
    }
    if(valid){
        document.getElementById("text").innerHTML = "form successfully submitted";
    }
    return valid;
}