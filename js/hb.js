let jourjs= document.querySelectorAll(".jourj-nb");
let noms= document.querySelectorAll(".hb-nom");

let today = new Date();
let days = [];


days[0] = new Date("07/07/2023");
days[1] = new Date("07/07/2023");
days[2] = new Date("07/16/2023");
days[3] = new Date("08/04/2023");
days[4] = new Date("10/18/2023");
days[5] = new Date("10/21/2023");
days[6] = new Date("11/02/2023");
days[7] = new Date("11/19/2023");
// days[8] = new Date("01/31/2024");


noms[0].innerHTML = "Chrinovic MUKEBA";
noms[1].innerHTML = "Christine KABEMBO";
noms[2].innerHTML = "Ronny NKOYI";
noms[3].innerHTML = "Sharon-Rose ILUNGA";
noms[4].innerHTML = "Ruth LUMBALA";
noms[5].innerHTML = "Stephanie NANA";
noms[6].innerHTML = "Harmonie MUJINGA";
noms[7].innerHTML = "Rebecca ESSEDI";
noms[8].innerHTML = "En attente...";
noms[9].innerHTML = "En attente...";
// noms[10].innerHTML = "En attente...";




for(let i=0; i<jourjs.length; i++)
{
    /*Ici j’utilise les ternaires pour n’afficher la valeur exacte
    du jourj que si elle est supérieur à zéro */
    jourjs[i].innerHTML = days[i]>today ? Math.ceil(Math.abs(days[i]-today)/(1000 * 3600 * 24)) : 0;
}

/*
Les anniversaires à poster sur Havibirthday:


01/08/2024 : Elshame KASEKA
01/20/2024 : CHancelline KUMWIMBA
01/23/2024 : Esther KYUNGU

02/15/2024 : Ornella MASENGO
02/25/2024 : Majoie MIJI

03/06/2024 : Elgrace LUBUYE
03/10/2023 : Gloria KUMWIMBA

04/05/2024 : Elrise KATAMBA
04/21/2024 : Eliakim MWANZA

05/06/2024 : Blaise KISENGA
05/12/2024 : David MPALA

07/07/2024 : Chrinovic MUKEBA
07/07/2024 : Christine KABEMBO
07/16/2024 : Ronny NKOYI

08/04/2024 : Sharon-Rose ILUNGA

10/18/2024 : Ruth LUMBALA
10/21/2024 : Stephnie NANA

11/02/2024 : Harmonie MUJINGA
11/19/2024 : Rebecca ESSEDI

12/25/2024 : Elvine MUZALA

*/

