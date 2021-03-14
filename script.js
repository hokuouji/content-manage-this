let root = document.getElementById("root");
renderStartPage();
let navpage = document.getElementById("navbar");
let logIn = document.getElementById("loginBtn");
let guestView = document.getElementById("guestBtn");
let adminView = document.getElementById("adminBtn");
let mainPage = document.getElementById("mainPage");
if (!localStorage.getItem("title")) {
    localStorage.setItem("title", "Välkommen,");
  } else {
    loadTitle();
  }
if (!localStorage.getItem("text")) {
    localStorage.setItem("text", "Klicka på texten i adminläge för att ändra på den. Du loggar in via knappen till vänster.");
  } else {
    loadText();
  }
  window.onload = retrieveTitleColor();
  window.onload = retrieveTextColor();
  window.onload =retrieveTextFont();
  window.onload = retrieveTitleFont();

function renderStartPage() {
    let startPage =  
    `
    <nav id="navbar" class="nav__box">
        <h2 id="loginBtn" class="logIn__btn">Logga in</h2>
    </nav>

    <main id="mainPage" class="box__wrapper">
        <section id="editContent" class="allThemes">
            <h2 id="editTitle"> Välkommen!</h2>
            <p id="editText" >Logga in till vänster för att justera sidan.</p>
        </section>

    </main>
    `;
    root.insertAdjacentHTML("afterbegin", startPage);
}



logIn.addEventListener("click", (e) => {
    renderAdminControls(e.target.id);
})


function renderAdminControls () {

    var a=prompt("Lösenord tack!");
    if(a=="admin") 
        {
        alert ("Välkommen, admin!")
        navbar.innerHTML = "";
        let adminNav = `<h2 id="guestBtn" onclick="toggleGuestView ()" class="logIn__btn">Gästläge</h2>`
        navbar.insertAdjacentHTML("beforeend", adminNav);
        mainPage.innerHTML = "";
        let adminControls = `
            <section id="editContent" class="allThemes">
                <h2 id="editTitle" contentEditable="true" onkeyup="saveTitle()"> Välkommen!</h2>
                <h3>Justera titel</h3><input type="color" id="colorInput1">
            <button type="button" value="Verkställ" onclick="changeTitleColor()">Verkställ</button>

            <select id="titleFont" onchange="changeTitleFont()">
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            </select>


    
    <p id="editText" contentEditable="true" onkeyup="saveText()">Logga in till vänster för att justera sidan.</p>
                <h3>Ändra brödtextfärg</h3><input type="color" id="colorInput2">
        <button type="button" value="Verkställ" onclick="changeTextColor()">Verkställ</button>

        <select id="textFont" onchange="changeTextFont()">
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            </select>

            </section>

        <h3> Ändra bakgrundsfärg</h3>
        <input type ="color" id="bgColorInput">
        <button type ="button"  id="bgColorButton value="verkställ" onclick="changeBgColor ()">Verkställ</button>
        
      <div>  
      <button type="button" onclick="changeThemeOne()" class="theme__button" style="--theme-primary:#c146F3; --theme-secondary:#ddd;">
          </button>
      <button type="button" onclick="changeThemeTwo()" class="theme__button" style="--theme-primary:purple; --theme-secondary:yellow;">
          </button>
      <button type="button" onclick="changeThemeThree()" class="theme__button" style="--theme-primary:#F44336; --theme-secondary:#add8e6;">
          </button>
      <button type="button" onclick="changeThemeFour()"  class="theme__button" style="--theme-primary:green; --theme-secondary:white;">
          </button></div>
        `
        mainPage.insertAdjacentHTML("beforeend", adminControls)
        window.onload = loadTitle ();
        window.onload = retrieveTitleColor();
        window.onload = loadText ();
        window.onload = retrieveTextColor();
        window.onload = retrieveTitleFont();
        window.onload = retrieveTextFont();
        }
    else {
        alert("Du har tyvärr fel lösenord!");
    }   }


function toggleGuestView () {
        navbar.innerHTML = "";
        let guestNav = `<h2 id="adminBtn" class="logIn__btn" onclick="toggleAdminView ()">Adminläge</h2>`
        navbar.insertAdjacentHTML("beforeend", guestNav);
        mainPage.innerHTML = "";
        let guestControls =   `
        <main id="mainPage" class="box__wrapper">
            <section id="editContent" class="allThemes">
                <h2 id="editTitle"> Välkommen!</h2>
                <p id="editText" >Logga in till vänster för att justera sidan.</p>
            </section>
    
        </main>
        `
        mainPage.insertAdjacentHTML("beforeend", guestControls)
        window.onload = loadTitle ();
        window.onload = retrieveTitleColor();
        window.onload = retrieveTitleFont();
        window.onload = loadText ();
        window.onload = retrieveTextColor();
        window.onload = retrieveTextFont();
        }

        function toggleAdminView () {
            navbar.innerHTML = "";
        let adminNav = `<h2 id="guestBtn" onclick="toggleGuestView ()" class="logIn__btn">Gästläge</h2>`
        navbar.insertAdjacentHTML("beforeend", adminNav);
        mainPage.innerHTML = "";
        let adminControls = `
        <section id="editContent" class="allThemes">
            <h2 id="editTitle" contentEditable="true" onkeyup="saveTitle()"> Välkommen!</h2>
            <h3>Justera titel</h3><input type="color" id="colorInput1">
        <button type="button" value="Verkställ" onclick="changeTitleColor()">Verkställ</button>

        <select id="titleFont" onchange="changeTitleFont()">
        <option value="Arial">Arial</option>
        <option value="Calibri">Calibri</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Georgia">Georgia</option>
        </select>



<p id="editText" contentEditable="true" onkeyup="saveText()">Logga in till vänster för att justera sidan.</p>
            <h3>Ändra brödtextfärg</h3><input type="color" id="colorInput2">
    <button type="button" value="Verkställ" onclick="changeTextColor()">Verkställ</button>

    <select id="textFont" onchange="changeTextFont()">
        <option value="Arial">Arial</option>
        <option value="Calibri">Calibri</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Georgia">Georgia</option>
        </select>

        </section>

    <h3> Ändra bakgrundsfärg</h3>
    <input type ="color" id="bgColorInput">
    <button type ="button"  id="bgColorButton value="verkställ" onclick="changeBgColor ()">Verkställ</button>
    
  <div>  
  <button type="button" onclick="changeThemeOne()" class="theme__button" style="--theme-primary:#c146F3; --theme-secondary:#ddd;">
      </button>
  <button type="button" onclick="changeThemeTwo()" class="theme__button" style="--theme-primary:purple; --theme-secondary:yellow;">
      </button>
  <button type="button" onclick="changeThemeThree()" class="theme__button" style="--theme-primary:#F44336; --theme-secondary:#add8e6;">
      </button>
  <button type="button" onclick="changeThemeFour()"  class="theme__button" style="--theme-primary:green; --theme-secondary:white;">
      </button></div>
    `
        mainPage.insertAdjacentHTML("beforeend", adminControls);
        window.onload = loadTitle ();
        window.onload = loadText ();
        window.onload = retrieveTitleColor();
        window.onload = retrieveTextColor();
        window.onload = retrieveTitleFont();
        window.onload = retrieveTextFont();
        }


function saveTitle() {
    let newTitle = document.getElementById("editTitle"); 
    localStorage.setItem("title", newTitle.innerText);
}

function loadTitle () {
    let newTitle = document.getElementById("editTitle");
    newTitle.value = localStorage.getItem("title"); 
    newTitle.innerText = newTitle.value;
}

window.onload = loadTitle ();



function saveText() {
    let newText = document.getElementById("editText"); 
    localStorage.setItem("text", newText.innerText);
}

function loadText () {
    let newText = document.getElementById("editText");
    newText.value = localStorage.getItem("text"); 
    newText.innerText = newText.value;}

window.onload = loadText ();


function changeTitleColor() {
    let titleColor = document.getElementById("colorInput1").value;
      document.getElementById("editTitle").style.color = titleColor;
      localStorage.setItem("textcolorTitle", window.getComputedStyle(editTitle).color);}
 
 function retrieveTitleColor() {
 let titleColor = document.getElementById("editTitle");
 titleColor.value = localStorage.getItem("textcolorTitle")
 editTitle.style.color = titleColor.value;}
 


 function changeTitleFont() {
    let titleFont = document.getElementById("titleFont").value;
      document.getElementById("editTitle").style.fontFamily = titleFont;
      localStorage.setItem("titleFont", window.getComputedStyle(editTitle).fontFamily);}

 function retrieveTitleFont() {
    let titleFont = document.getElementById("editTitle");
    titleFont.value = localStorage.getItem("titleFont")
    editTitle.style.fontFamily = titleFont.value;}

    window.onload = retrieveTitleFont();


 function changeTextColor() {
   let textColor = document.getElementById("colorInput2").value;
     document.getElementById("editText").style.color = textColor;
     localStorage.setItem("textcolorText", window.getComputedStyle(editText).color);}

function retrieveTextColor() {
let textColor = document.getElementById("editText");
textColor.value = localStorage.getItem("textcolorText")
editText.style.color = textColor.value;}

window.onload = retrieveTextColor();

function changeTextFont() {
    let textFont = document.getElementById("textFont").value;
      document.getElementById("editText").style.fontFamily = textFont;
      localStorage.setItem("textFont", window.getComputedStyle(editText).fontFamily);}

function retrieveTextFont() {
        let textFont = document.getElementById("editText");
        textFont.value = localStorage.getItem("textFont")
        editText.style.fontFamily = textFont.value;}

window.onload =retrieveTextFont();

function changeBgColor () {
    let backgroundColor = document.getElementById("bgColorInput").value;
    document.getElementById("mainPage").style.backgroundColor = backgroundColor;
    localStorage.setItem("bgcolor", window.getComputedStyle(mainPage).backgroundColor);
}

function retrieveBgColor() {
    let backgroundColor = document.getElementById("mainPage");
    backgroundColor.value = localStorage.getItem("bgcolor");
    mainPage.style.backgroundColor = backgroundColor.value;}
    
    window.onload = retrieveBgColor();


function changeThemeOne() {
    let backgroundColor = document.getElementById("mainPage");
    localStorage.setItem("bgcolor", "rgb(193,70,243)");
    backgroundColor.value = localStorage.getItem("bgcolor");
    mainPage.style.backgroundColor = backgroundColor.value;
}

function changeThemeTwo() {
    let backgroundColor = document.getElementById("mainPage");
    localStorage.setItem("bgcolor", "rgb(160,32,240)");
    backgroundColor.value = localStorage.getItem("bgcolor");
    mainPage.style.backgroundColor = backgroundColor.value;
    let titleColor = document.getElementById("editTitle");
    localStorage.setItem("textcolorTitle", "rgb(255,255,0)");
    titleColor.value = localStorage.getItem("textcolorTitle");
    editTitle.style.color = titleColor.value;
    let textColor = document.getElementById("editText");
    localStorage.setItem("textcolorText", "rgb(255,255,0)");
    textColor.value = localStorage.getItem("textcolorText");
    editText.style.color = textColor.value;}

    function changeThemeThree() {
        let backgroundColor = document.getElementById("mainPage");
        localStorage.setItem("bgcolor", "rgb(244,67,54)");
        backgroundColor.value = localStorage.getItem("bgcolor");
        mainPage.style.backgroundColor = backgroundColor.value;
        let titleColor = document.getElementById("editTitle");
        localStorage.setItem("textcolorTitle", "rgb(173,216,230)");
        titleColor.value = localStorage.getItem("textcolorTitle");
        editTitle.style.color = titleColor.value;
        let textColor = document.getElementById("editText");
        localStorage.setItem("textcolorText", "rgb(173,216,230)");
        textColor.value = localStorage.getItem("textcolorText");
        editText.style.color = textColor.value;}

        function changeThemeFour() {
            let backgroundColor = document.getElementById("mainPage");
            localStorage.setItem("bgcolor", "rgb(0,255,0)");
            backgroundColor.value = localStorage.getItem("bgcolor");
            mainPage.style.backgroundColor = backgroundColor.value;
            let titleColor = document.getElementById("editTitle");
            localStorage.setItem("textcolorTitle", "rgb(255,255,255)");
            titleColor.value = localStorage.getItem("textcolorTitle");
            editTitle.style.color = titleColor.value;
            let textColor = document.getElementById("editText");
            localStorage.setItem("textcolorText", "rgb(255,255,255)");
            textColor.value = localStorage.getItem("textcolorText");
            editText.style.color = textColor.value;}
