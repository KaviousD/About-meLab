
"use strict";

let pica = prompt("What year did i graduate highschool")
let picalow = pica.toLowerCase()
 if (pica == 2021 )
   alert("You provided the correct anwser!")
  else { 
    alert("You provided the incorrect anwser try re spelling it")
  } 

  // This is Class 02 Lab soon to be modified

  let duna = prompt("What is the first goal from my 5 year plan")
let dunalow = duna.toLowerCase()
 if (duna == "Get certification")
   alert("You provided the correct anwser!")
  else { 
    alert("You provided the incorrect anwser try re spelling it")
  } 

  // Need to add arrays to widen the subject range

  let luffy = prompt("What is the second goal from my 5 year plan")
let luffylow = duna.toLowerCase()
 if (luffy == "create a stable income")
   alert("You provided the correct anwser!")
  else { 
    alert("You provided the incorrect anwser try re spelling it")
  }

  let Han = prompt("What is the third goal from my 5 year plan")
let hanlow = duna.toLowerCase()
 if (Han == "Create a working environment")
   alert("You provided the correct anwser!")
  else { 
    alert("You provided the incorrect anwser try re spelling it")
  }


  let Turntsnaco = prompt("What is the fourth goal from my 5 year plan")
let Turntsnacolow = duna.toLowerCase()
 if (Turntsnaco == "Travel to 3 different states")
   alert("You provided the correct anwser!")
  else { 
    alert("You provided the incorrect anwser try re spelling it")
  }

  <button id="button_A">Press me</button>
<h3 id="heading_A"></h3>

const buttonA = document.querySelector('#button_A')
const headingA = document.querySelector('#heading_A')

buttonA.onclick = () => {
    const name = prompt('what is your name');
    alert (`Hello ${name}, nice to see you!`);
    headingA.textContent = `welcome ${name}`;
}