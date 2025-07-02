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

// const copybtn=document.getElementById("cpy-btn");
// copybtn.addEventListener("click",function(){
//     const currentColor=colourText.textContent;
//     navigator.clipboard.writeText(currentColor).then(function () {
//     alert("Copied: " + currentColor);
//   });
// })
const copybtn = document.getElementById("cpy-btn");
const copyStatus = document.getElementById("copy-status");

copybtn.addEventListener("click", function () {
  const currentColor = colourText.textContent;
  navigator.clipboard.writeText(currentColor).then(function () {
    copyStatus.textContent = "Copied!";
    
    // Clear message after 2 seconds
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 2000);
  });
});
