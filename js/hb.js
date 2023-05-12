let jourjs= document.querySelectorAll("jourj-nb");
let noms= document.querySelectorAll("hb-nom");
let imgs= document.querySelectorAll("hb-img");

let today = new Date();
let days = [];

days[0] = new Date("05/10/2023");
days[1] = new Date("07/07/2023");
days[2] = new Date("07/07/2023");
days[3] = new Date("07/16/2023");
days[4] = new Date("08/04/2023");
// days[6] = new Date("00/00/2024");


noms[0].innerHTML = "David MPALA";
noms[1].innerHTML = "Chrinovic MUKEBA";
noms[2].innerHTML = "Christine KABEMBO";
noms[3].innerHTML = "Ronny NKOYI";
noms[4].innerHTML = "Sharon-Rose ILUNGA";
// noms[5].innerHTML = "...";




for(let i=0; i<5;i++)
{
    /*Ici j’utilise les ternaires pour n’afficher la valeur exacte
    du jourj que si elle est supérieur à zéro */
    jourjs[i].innerHTML = days[i]>today ? Math.ceil(Math.abs(days[i]-today)/(1000 * 3600 * 24)) : 0;
}



/* Cette boucle ne parcourt que les cartes non attribuées
afin de leur faire afficher la carte par défaut */

for(let i=5; i<imgs.length;i++)
{
    imgs[i].src="hb/0.pmg";
}