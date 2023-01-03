var submitButton=document.getElementById('sub');
submitButton.disabled=true;

function validateLength(element){
    if(element.value.length>element.minlength){
        element.style.outline="1px solid green";
    } else {
        element.style.outline="1px solid red";
    }
}

function validatePassword(){
    const password=document.getElementById('password');
    const confirmPassword=document.getElementById('confirmPassword');
    console.log("hello form val pass");
    if(password.value==confirmPassword.value){
        confirmPassword.style.outline="1px solid green";
        submitButton.disabled=false;
    } else {
        confirmPassword.style.outline="1px solid red";
        submitButton.disabled=true;
    }
}

function validateInput(element){

}