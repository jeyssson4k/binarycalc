let backgroundSection = document.getElementById("bg-movement");
let outlineInput = document.getElementById("decN");

let colors = ['#410066','#7200B3','#9100E6','#AE46EA','#4C1F66'];
let colorOutline = ['#EEC643','#141414','#EEF0F2','#0D21A1','#011638'];

let outlineColor = colorOutline[Math.floor(Math.random()*colorOutline.length)];
let linearUp = colors[Math.floor(Math.random()*colors.length)];
let linearDown = colors[Math.floor(Math.random()*colors.length)];

function colorAssignement() {
    backgroundSection.style.backgroundImage = `linear-gradient(${linearUp}, ${linearDown})`; 
}
colorAssignement();