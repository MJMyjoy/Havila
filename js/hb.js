let jourjs= document.querySelectorAll(".jourj-nb");
let noms= document.querySelectorAll(".hb-nom");


let today = new Date();
let days = [];


days[0] = new Date("07/07/2023");
days[1] = new Date("07/07/2023");
days[2] = new Date("07/16/2023");
days[3] = new Date("08/04/2023");
days[4] = new Date("10/18/2023");
days[5] = new Date("11/02/2023");
days[6] = new Date("11/19/2023");
// days[7] = new Date("01/01/2024");


noms[0].innerHTML = "Chrinovic MUKEBA";
noms[1].innerHTML = "Christine KABEMBO";
noms[2].innerHTML = "Ronny NKOYI";
noms[3].innerHTML = "Sharon-Rose ILUNGA";
noms[4].innerHTML = "Ruth LUMBALA";
noms[5].innerHTML = "Harmonie MUJINGA";
noms[6].innerHTML = "Rebecca ESSEDI";
noms[7].innerHTML = "En attente...";
// noms[8].innerHTML = "En attente...";




for(let i=0; i<jourjs.length; i++)
{
    /*Ici j’utilise les ternaires pour n’afficher la valeur exacte
    du jourj que si elle est supérieur à zéro */
    jourjs[i].innerHTML = days[i]>today ? Math.ceil(Math.abs(days[i]-today)/(1000 * 3600 * 24)) : 0;
}
