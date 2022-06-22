/*
Write a javascript code that prints out your name, height, and country on the screen
*/ 

const getName = document.querySelector(".name");
const getHeight = document.querySelector(".hgt");
const getCountry = document.querySelector(".country")

const name = prompt("What is your name? ");
const height = prompt("Your height, please? ");
const country = prompt("Your country of birth? ");

function displayText() {
    getName.append(name);
    getHeight.append(height);
    getCountry.append(country);
}


displayText();
