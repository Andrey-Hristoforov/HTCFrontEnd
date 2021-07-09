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

const tabs = document.getElementById("tabs");

const filmsTab = tabs.children[0];
const tvProgramTab = tabs.children[1];

const searchButton = document.getElementById('searchButton');

function OnFilmsTabClick ()
{
    let tvArticle = document.getElementsByClassName("tvProgram")[0];
    tvArticle.style.display = "none";
    let newArticle = document.getElementsByClassName("new")[0];
    newArticle.style.display = "block";
    let genresArticle = document.getElementsByClassName("genres")[0];
    genresArticle.style.display = "block";
}

function OnTvProgramTabTabClick ()
{
    let tvArticle = document.getElementsByClassName("tvProgram")[0];
    tvArticle.style.display = "block";
    let newArticle = document.getElementsByClassName("new")[0];
    newArticle.style.display = "none";
    let genresArticle = document.getElementsByClassName("genres")[0];
    genresArticle.style.display = "none";
}

OnFilmsTabClick();

filmsTab.onclick = OnFilmsTabClick;
tvProgramTab.onclick = OnTvProgramTabTabClick;

function Search()
{
    let searchQuery = searchButton.previousElementSibling.value;
    let newArticle = document.getElementsByClassName("new")[0];
    let filmsList = newArticle.lastElementChild.children;
    for(let i = 0; i < filmsList.length; i++)
    {
        filmsList[i].style.display = "block";
        if(!filmsList[i].lastElementChild.innerHTML.toLowerCase().includes(searchQuery.toLowerCase()))
            filmsList[i].style.display = "none";
    }
}

searchButton.onclick = Search;

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