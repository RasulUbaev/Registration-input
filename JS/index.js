var $form =document.querySelector(`#form`);
let FName = document.createElement (`input`);
let LName = document.createElement (`input`);
let Email = document.createElement (`input`);
let password = document.createElement (`input`);
let btn = document.createElement (`button`);
let lists =document.querySelector (`.lists`);
let $result_menu =document.getElementById (`result_menu`);
let $btn__exit = document.getElementById(`btn__exit`);
let error_FName =document.createElement (`span`)
let error_LName =document.createElement (`span`)
let error_email =document.createElement (`span`)
let error_password =document.createElement (`span`)
let labelFName = document.createElement(`label`);
let labelLName = document.createElement(`label`);
let labelEmail = document.createElement(`label`);
let labelPassword = document.createElement(`label`);
let eye = document.getElementById(`eye`);


FName.id = `First name`;
FName.type = `text`;
FName.placeholder = `First Name`;
FName.required = `true`;
FName.style = `height: 100%; width: 100%; padding-left: 30px; border: 2px gray solid; minlength="4"; `
labelFName.style= `height: 12%;`
LName.id = `last name`;
LName.type = `text`;
LName.placeholder = `Last Name`;
LName.required = `true`;
LName.style = `height: 100%; width: 100%; padding-left: 30px; border: 2px gray solid; minlength="4"; `
labelLName.style= `height: 12%;`

Email.id = `Email`;
Email.type = `Email`;
Email.placeholder = `Email`;
Email.required = `true`;
Email.style = `height: 100%; width: 100%; padding-left: 30px; border: 2px gray solid; minlength="4"; `
labelEmail.style= `height: 12%;`

password.id = `password`;
password.type = `Password`;
password.placeholder = `Password`;
password.required = `true`;
password.style = `height: 100%; width: 100%; padding-left: 30px; border: 2px gray solid; minlength="4"; `
labelPassword.style= `height: 12%; position: relative;`

$form.append(labelFName);
labelFName.append(FName);
$form.append(labelLName);
labelLName.append(LName);
$form.append(labelEmail);
labelEmail.append(Email);
$form.append(labelPassword);
labelPassword.append(password);
labelPassword.append(eye);



$form.append(btn);

btn.textContent =`CLAIM YOUR FREE TRIAL`;
btn.style = `background-color: rgb(55,204,138);  height: 12%; padding-left: 30px; color: white; letter-spacing: 1.5px`

let usersInfor = []

function handleSubmit(e) {
    e.preventDefault()
    let user = {
        name: FName.value,
        LastName: LName.value,
        Email: Email.value,
        Password: password.value,
    }

    FName.value= ``,
    LName.value = ``,
    Email.value = ``,
    password.value = ``

    usersInfor.push(user);
    renderUsers();
}

$form.addEventListener (`submit`, handleSubmit)

function renderUsers (){
    lists.innerHTML= null;
    for (let i=0; i<usersInfor.length; i++) {

        let li = document.createElement(`li`);
        li.className = `list_item`;
        li.style= `background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,9,121,1) 35%, rgba(0,212,255,1) 100%); font-size: 16px; padding: 10px; border: 2px solid blue; color: white; border-radius: 5px;`
        lists.append(li);

        let FirstName =document.createElement (`p`)
        FirstName.textContent=(usersInfor[i]).name
        li.appendChild(FirstName);

        let  LastName = document.createElement(`p`) 
        LastName.textContent = (usersInfor[i]).LastName;
        li.appendChild(LastName);

        let Email = document.createElement(`p`) 
        Email.textContent = (usersInfor[i]).Email;
        li.appendChild(Email);

        let Password = document.createElement(`p`) 
        Password.textContent = (usersInfor[i]).Password;
        li.appendChild(Password);
    }
}

FName.addEventListener(`input`, function(e) {
        var value =e.target.value;
        labelFName.append(error_FName);
        var regOnlyLetters = new RegExp(/^[A-Za-z.\u0400-\u04FF]*$/);
        var number = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regOnlyLetters.test(value)){
            
            error_FName.textContent = ``; 
            error_FName.textContent =``
            
        }
    
    
        else if (number.test(value)) {
            error_FName.style.color = `red`
            error_FName.textContent = `Adding digits for your username check is straightforward:`
        }
    
        else {
            error_FName.style.color=`red` 
            error_FName.textContent = `Allowed only letters`
        }
    })


    LName.addEventListener(`input`, function(e) {
        labelLName.append(error_LName);
        var value =e.target.value;
    
        var regOnlyLetters = new RegExp(/^[A-Za-z.\u0400-\u04FF]*$/);
        var number = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regOnlyLetters.test(value)){
            error_LName.textContent = ``
        }
    
        else if (number.test(value)) {
            error_LName.style.color = `red`
            error_LName.textContent = `Adding digits for your username check is straightforward:`
        }
    
        else {
            error_LName.style.color=`red` 
            error_LName.textContent = `Allowed only letters`
        }
    })   


    Email.addEventListener(`input`, function(e) {
        labelEmail.append(error_email)
        var value =e.target.value;

    var regOnlyEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (regOnlyEmail.test(value)){
        error_email.textContent = ` `
    }
    else {
        error_email.style.color=`red` 
        error_email.textContent = `Allowed only email`
        
    }
})


password.addEventListener(`input`, function(e) {
    labelPassword.append(error_password)
    var value =e.target.value;

    var regOnlyPassword = new RegExp("(?=.*[!@#$%^&*;:№?())])");
    let minW = new RegExp(/'^\\d{4}$'/);
    if (regOnlyPassword.test(value)){
        error_password.textContent = ` `
    }

    else if (minW.test(value)) {
        error_password.style.color = `red`
        error_password.textContent = `44444`
    }
    else {
        error_password.style.color=`red` 
        error_password.textContent = ` Assert a string has at least one special character.`
    }   
})  

eye.onclick = function() {

    if (password.type === `text`){
        password.type = `password`
    }
    else {
        password.type = `text`
    }
}














    