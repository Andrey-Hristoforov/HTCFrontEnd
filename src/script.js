console.log("Hey!");

let Authorised = false;

const shadowDiv = document.getElementById('shadowDiv');
    shadowDiv.hidden = true;

const header = document.getElementById('loginButtonHeader');

const LogInDiv = document.getElementById('LogInDiv');
// LogInDiv.hidden = true;
const LogOutDiv = document.getElementById('LogOutDiv');
LogOutDiv.hidden = true;

const loginForm = document.getElementById('loginFormId');
    loginForm.style.display = "none";

const loginButtonHeader = document.getElementById('loginButtonHeader');
    loginButtonHeader.onclick = function ()
    {
        loginForm.style.display = "flex";
        shadowDiv.hidden = false;
    }

const loginInput = document.getElementById('loginInput');
    loginInput.onblur = (function ()
    {
        if(typeof this.value == "undefined" || this.value.length == 0)
            this.value = "Логин";
        console.log(")");
    });
    loginInput.onfocus = (function ()
    {
        if(this.value.length == "Логин")
            this.value = "";
        console.log("(");
    });

const passwordInput = document.getElementById('passwordInput');
    passwordInput.onblur = (function ()
    {
        if(typeof this.value == "undefined" || this.value.length == 0)
            this.value = "Пароль";
        console.log(")");
    });
    passwordInput.onfocus = (function ()
    {
        if(this.value.length == "Пароль")
            this.value = "";
        console.log("(");
    });

const loginFormSubmitButton = document.getElementById('loginFormSubmitButton');
loginFormSubmitButton.onclick = function ()
{
    if(loginInput.value.length != 0 && loginInput.value != 'Логин')
    {
        LogInDiv.hidden = true;
        LogOutDiv.hidden = false;
        LogOutDiv.firstElementChild.innerHTML = loginInput.value;
        loginForm.style.display = 'none';
        shadowDiv.hidden = true;
    }
    console.log('aaaa');
}

const logOutButton = document.getElementById("LogOutButton");
logOutButton.onclick = function ()
{
    LogOutDiv.hidden = true;
    LogInDiv.hidden = false;
    loginInput.value = "Логин";
    passwordInput.value = "Пароль";
}

// const blurDefaultValueFunc = function (defaultValue)
// {
//     if(typeof this.value == "undefined" || this.value.length == 0)
//         this.value = defaultValue;
//     console.log(")");
// }
//
// const onFocusClear = function (defaultValue)
// {
//     if(this.value.length == defaultValue)
//         this.value = "";
//     console.log("(");
// }








// if(typeof header == null)
//     console.log('!');
//
// if(typeof loginForm == null)
//     console.log('!');
//
// if(typeof loginInput == null)
//     console.log('!');
//
// if(typeof passwordInput == null)
//     console.log('!');
// if(typeof loginFormSubmitButton == null)
//     console.log('!');