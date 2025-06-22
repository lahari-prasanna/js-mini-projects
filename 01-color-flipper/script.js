const colors = [
  "#FF6B6B",  "#6BCB77","#4D96FF",  "#FFD93D",  "#845EC2",  "#00C9A7",  "#FF9671",  "#B0A8B9",  "#FFC75F",  "#D65DB1",  "#0081CF", "#F9F871", "#C34A36","#FFB085","#00B8A9"
];

const btn=document.getElementById("btn");
const colourText=document.getElementById("color");

btn.addEventListener("click",function(){
    const randomIndex=Math.floor(Math.random()*colors.length)
    const selectedColor=colors[randomIndex];
    document.body.style.backgroundColor=selectedColor;
    colourText.textContent=selectedColor;
})
