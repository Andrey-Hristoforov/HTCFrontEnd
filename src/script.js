console.log("Hey!");

let Authorised = false;

const shadowDiv = document.getElementById('shadowDiv');
shadowDiv.hidden = true;

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


const passwordInput = document.getElementById('passwordInput');

if(localStorage.getItem("login") != null)
{
    LogInDiv.hidden = true;
    LogOutDiv.hidden = false;
    LogOutDiv.firstElementChild.innerHTML = localStorage.getItem("login");
    loginForm.style.display = 'none';
    shadowDiv.hidden = true;
}

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
        localStorage.setItem("login", loginInput.value);
    }
    console.log(loginInput.value);
}

const logOutButton = document.getElementById("LogOutButton");
logOutButton.onclick = function ()
{
    LogOutDiv.hidden = true;
    LogInDiv.hidden = false;
    loginInput.value = "Логин";
    passwordInput.value = "Пароль";
    localStorage.setItem("login", null);
}


// loginInput.onblur = (function () не работает
// {
//     if(typeof this.value == "undefined" || this.value.length == 0)
//         this.value = "Логин";
//     console.log(")");
// });
// loginInput.onfocus = (function ()
// {
//     if(this.value.length == "Логин")
//         this.value = "";
//     console.log("(");
// });
// passwordInput.onblur = (function ()
// {
//     if(typeof this.value == "undefined" || this.value.length == 0)
//         this.value = "Пароль";
//     console.log(")");
// });
// passwordInput.onfocus = (function ()
// {
//     if(this.value.length == "Пароль")
//         this.value = "";
//     console.log("(");
// });