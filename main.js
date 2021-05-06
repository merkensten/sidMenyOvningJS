/* Klassnamnet vi kommer att anvanda oss utav */
const ON = "bi-toggle-on";
const OFF = "bi-toggle-off";
/* Hamta knappen som ska ga att trycka pa */
const button = document.querySelectorAll("#btnToggle");
/* Tar in ett element och byter ut klassnamnet "bi-toggle-off" till "bi-toggle-on" */
const setOn = (element) =>
  (element.className = element.className.replace(
    "bi-toggle-off",
    "bi-toggle-on"
  ));
/* Tar in ett element och byter ut klassnamnet "bi-toggle-on" till "bi-toggle-off" */
const setOff = (element) =>
  (element.className = element.className.replace(
    "bi-toggle-on",
    "bi-toggle-off"
  ));
/*
 * Varan eventlistener funktion som kors nar vi klickar pa en button.
 * Har kollar vi om elementet har klassen "bi-toggle-on", da ersatter vi den med "bi-toggle-off",
 * Annars sa ersatter vi "bi-toggle-off" med "bi-toggle-on".
 */
const btnClick = (e) =>
  e.target.className.includes(ON) ? setOff(e.target) : setOn(e.target);
/* Loopa igenom alla boxar och satt varan eventlistener "btnClick" pa "click" eventet */
button.forEach((btn) => btn.addEventListener("click", btnClick));

let aTag = document.querySelectorAll(".a-tag");
console.log(aTag);

// aTag[0].style.color = "blue"

// for(i = 0; i < aTag.length; i++) {
//     aTag[i].style.color = "blue"
// }

// Funktion för att ändra storleken på menyn
// function changeMenuSize() {
 
//     document.querySelector(".menu-container").style.width = "60px";
//     for (i = 0; i < aTag.length; i++) {
//       aTag[i].style.display = "none";
//     }
  
// }

// Funktion för att ändra storleken på menyn
// function changeMenuSize() {
 
//     if(document.querySelector(".menu-container").style.width = "160px") {
//         document.querySelector(".menu-container").style.width = "60px";
//     for (i = 0; i < aTag.length; i++) {
//       aTag[i].style.display = "none";
//     }
//     } else {
//         document.querySelector(".menu-container").style.width = "160px";
//     for (i = 0; i < aTag.length; i++) {
//       aTag[i].style.display = "block";
//     }
//     }
// }



// function toggleBack() {
//     document.querySelector(".menu-container").style.width = "160px";
//     for (i = 0; i < aTag.length; i++) {
//       aTag[i].style.display = "block";
//     }
// }

// document.querySelector(".menu-container").style.width = "60px"
// for(i = 0; i < aTag.length; i++) {
//     aTag[i].style.display = "none"
//

// Hämta in sidmenyn
let sideMenu = document.querySelector(".menu-container")
// Hämta in länkarna i sidmenyn
const btnToggleBack = document.querySelectorAll(".a-tag")
// Hämta in knappen för att expandera 
const btnExpand = document.querySelector(".btnExpand")
console.log(btnExpand)

function minimizeNav() {
  document.querySelector(".menu-container").style.width = "60px";
  // sideMenu.className = sideMenu.className.replace(
  //   "menu-container",
  //   "menu-container-small"
  // );
    for (i = 0; i < aTag.length; i++) {
      aTag[i].style.display = "none";
    }
    btnExpand.style.display = "inline"
}



function openNav() {
  document.querySelector(".menu-container").style.width = "160px";
    for (i = 0; i < aTag.length; i++) {
      aTag[i].style.display = "inline";
    }
    btnExpand.style.display = "none"
}

function shrinkAndGrowMenuOnInput() {
  if(sideMenu.style.width = "160px") {
    minimizeNav()
  } else {
    openNav()
  }
}