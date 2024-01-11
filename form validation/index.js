let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let retypePassword = document.querySelector("#retypePassword");
// let userName = document.querySelector("#userName");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

function checkEmail(input){
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regEx.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
};

function checkInputLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getName(input)} must be less then ${max} characters`);
    }else{
        showSuccess(input);
    }
}

function getName(){
    return input.id.charAt(0).toUppercase() + input.id.slice(1);
};