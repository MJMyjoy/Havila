let jourjs= document.querySelectorAll(".jourj-nb");
let noms= document.querySelectorAll(".hb-nom");


let today = new Date();
let days = [];


days[0] = new Date("07/07/2023");
days[1] = new Date("07/07/2023");
days[2] = new Date("07/16/2023");
days[3] = new Date("08/04/2023");
// days[4] = new Date("00/00/2024"); ...


noms[0].innerHTML = "Chrinovic MUKEBA";
noms[1].innerHTML = "Christine KABEMBO";
noms[2].innerHTML = "Ronny NKOYI";
noms[3].innerHTML = "Sharon-Rose ILUNGA";
// noms[4].innerHTML = "..."; ...




for(let i=0; i<5; i++)
{
    /*Ici j’utilise les ternaires pour n’afficher la valeur exacte
    du jourj que si elle est supérieur à zéro */
    jourjs[i].innerHTML = days[i]>today ? Math.ceil(Math.abs(days[i]-today)/(1000 * 3600 * 24)) : 0;
}
