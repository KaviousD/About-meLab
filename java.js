"use strict";

let username = "";

function signin() {
  username = prompt("Username?");
  if (username != "") {
    alert("Hello, " + username);
    document.getElementById("user").innerHTML =
      " Thx Bro " + username.toLocaleLowerCase();
  } else {
    alert("Iniviled User");
    document.getElementById("user").innerHTML =
      " i did not get this for mistakes";
  }
}
signin();

const quiz = {
  pica: prompt("What year did I graduate high school?"),
  picalow: "",
  duna: prompt("What is the first goal from my 5-year plan?"),
  dunalow: "",
  luffy: prompt("What is the second goal from my 5-year plan?"),
  luffylow: "",
  Han: prompt("What is the third goal from my 5-year plan?"),
  hanlow: "",
  promptE: prompt("What is the fourth goal from my 5-year plan?"),
  promptElow: "",

  checkAnswers: function () {
    this.picalow = this.pica.toLowerCase();
    if (this.picalow === "2021") {
      alert("You provided the correct answer!");
    } else {
      alert("You provided the incorrect answer. Try re-spelling it.");
    }

    this.dunalow = this.duna.toLowerCase();
    if (this.dunalow === "get certification") {
      alert("You provided the correct answer!");
    } else {
      alert("You provided the incorrect answer. Try re-spelling it.");
    }

    this.luffylow = this.luffy.toLowerCase();
    if (this.luffylow === "create a stable income") {
      alert("You provided the correct answer!");
    } else {
      alert("You provided the incorrect answer. Try re-spelling it.");
    }

    this.hanlow = this.Han.toLowerCase();
    if (this.hanlow === "create a working environment") {
      alert("You provided the correct answer!");
    } else {
      alert("You provided the incorrect answer. Try re-spelling it.");
    }

    this.promptElow = this.promptE.toLowerCase();
    if (this.promptElow === "travel to 3 different states") {
      alert("You provided the correct answer!");
    } else {
      alert("You provided the incorrect answer. Try re-spelling it.");
    }
  },
};

quiz.checkAnswers();

Render().quiz