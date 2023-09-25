function validate(){
    var mail= document.getElementById("text").value;

    var regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.([a-z]+)(.[a-z]+)?$/
}

if(regx.text(mail)){
    alert("Valid email required")
    return true
}
else{
    alert("Valid email required")
    return false;
}

