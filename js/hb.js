let jourj1= document.getElementById("jourj1");
let jourj2= document.getElementById("jourj2");
let jourj3= document.getElementById("jourj3");
let jourj4= document.getElementById("jourj4");
let jourj5= document.getElementById("jourj5");
let jourj6= document.getElementById("jourj6");

let day0 = new Date();
let day1 = new Date("05/06/2023");
let day2 = new Date("05/12/2023");
let day3 = new Date("07/07/2023");
let day4 = new Date("07/07/2023");
let day5 = new Date("07/16/2023");
let day6 = new Date("08/04/2023");


jourj1.innerHTML = Math.ceil(Math.abs(day1-day0)/(1000 * 3600 * 24));
jourj2.innerHTML = Math.ceil(Math.abs(day2-day0)/(1000 * 3600 * 24));
jourj3.innerHTML = Math.ceil(Math.abs(day3-day0)/(1000 * 3600 * 24));
jourj4.innerHTML = Math.ceil(Math.abs(day4-day0)/(1000 * 3600 * 24));
jourj5.innerHTML = Math.ceil(Math.abs(day5-day0)/(1000 * 3600 * 24));
jourj6.innerHTML = Math.ceil(Math.abs(day6-day0)/(1000 * 3600 * 24));
