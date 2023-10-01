
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 




const endDate="20 October 2023 12:00 AM"
document.getElementById("end-date").innerText=endDate;
const input=document.querySelectorAll("input");
const clock=()=>{
    const end= new Date(endDate)
    const now=new Date()
    console.log(end)
    console.log(now)
    const diff=(end-now)/1000;
    console.log(diff)
    //convert into days
    input[0].value=(Math.floor(diff/3600/24));
    input[1].value=(Math.floor(diff/3600)%24);
    input[2].value=((Math.floor(diff/60)%60));
  input[3].value=(Math.floor(diff)%60);
   
}
clock()
setInterval(() => {
  clock()
},
 1000);



