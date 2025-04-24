document.addEventListener("click",validate(submit))
function validate(){
    let input_fname = document.getElementById("first_name");
    let input_lname = document.getElementById("last_name");
    let input_email = document.getElementById("email");
    let input_number = document.getElementById("phone");
    let input_message = document.getElementById("message");

    if(input_fname.value==""||input_lname.value==""||input_email.value==""||input_number.value==""||input_message.value===""){
        alert("All fields must not be empty!");
        return false;
    }else if(!charOnly(input_fname.value)){
        alert("Your name should only contain characters!");
        return false;
    }else if(!charOnly(input_lname.value)){
        alert("Your name should only contain characters!");
        return false;
    }else if(!input_email.value.endsWith(".com")||!validEmail(input_email.value)){
        alert("Please enter a valid email address!");
        return false;
    }else if(!isNum(input_number.value)){
        alert("Your phone number must only contain numbers!");
    }else if(input_message.value.length<10){
        alert("The message must be more than 10 words!");
    }
    return true;
}

function isNum(element){
    for (let i = 0; i < element.length; i++) {
        if (element[i] < '0' || element[i] > '9') { // ASCII codes for '0' (48) to '9' (57)
            return false;
        }
    }
    return true;
}

function validEmail(element){
    let mark = 0;
    for(let i = 0;i<element.length;i++){
        if(element[i]=='@'){
            mark = 1;
        }
    }
    if(mark==1){
        return true;
    }else{
        return false;
    }
}

function charOnly(element){
    for(let i = 0;i<element.length;i++){
        if(element[i]>='a'&&element[i]<='z'){
            continue;
        }else if(element[i]>='A'&&element[i]<='Z'){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

validate();