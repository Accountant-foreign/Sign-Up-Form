var submitButton=document.getElementById('sub');
const confirmPassword=document.getElementById('confirmPassword');
const password=document.getElementById('password');

submitButton.disabled=true;

function validateLength(){
    let value=password.value;
    console.log(value.length)
    if(value.length>=5 && value.length<20){
        password.style.outline="1px solid green";
    } else {
        password.style.outline="1px solid red";
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