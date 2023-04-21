let apropos = document.querySelectorAll(".apropos");
let aproposdenous = document.querySelector(".aproposdenous");
let indice = 0;

for(let i=0; i<apropos.length; i++)
{
    apropos[i].onclick = function(){
        if(indice===0)
        {
            indice=1;
            aproposdenous.style.opacity = "1";
            aproposdenous.style.pointerEvents = "all";
        }
        else
        {
            indice=0;
            aproposdenous.style.opacity = "0";
            aproposdenous.style.pointerEvents = "none";
        }
        return false;
    }

}
