let numbStars=0;

const rate=document.getElementById("rate");

const stars=document.querySelectorAll(".circle");

const submit=document.querySelectorAll(".submit");

const layer1=document.querySelectorAll(".first-layer");
const layer2=document.querySelectorAll(".second-layer");


stars.forEach((e)=>{
    e.addEventListener("click",(evn)=>{

        //reset buttons before change the color to orange
        if (numbStars>0) {
          stars[numbStars-1].style.backgroundColor="hsla(213, 19%, 18%,1)";
          stars[numbStars-1].addEventListener("mouseenter",(evn)=>{
            evn.currentTarget.style.backgroundColor="hsla(216, 12%, 54%,1)";
          })
          stars[numbStars-1].addEventListener("mouseout",evn=>{
            evn.currentTarget.style.backgroundColor="hsla(213, 19%, 18%,1)";
          })
        }
        //the activate button take the orange color
        evn.currentTarget.style.background="hsl(25, 97%, 53%)";
        //fix the problem when the button reset it didn't keep the original color
        //i have to add eventListener mouseout to fix it
        evn.currentTarget.addEventListener("mouseout",(evn)=>{
            evn.currentTarget.style.backgroundColor="hsl(25, 97%, 53%)";
        })
        const list1=evn.currentTarget.classList;
        numbStars=list1[1];
    })
})

submit[0].addEventListener("click",()=>{
    if (numbStars>0 && numbStars<6) {
        rate.innerHTML=` ${numbStars} `;
        layer1[0].style.display="none";
        layer2[0].style.display="flex";
    }
})