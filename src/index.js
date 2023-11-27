import './style.css';
import Img from './img.jpg';

let content = document.getElementById("content");
let background = document.createElement("div");

background.id = "background";
background.style.backgroundImage = `url(${Img})`;
background.style.backgroundSize = "cover";
background.style.backgroundRepeat = "no-repeat";
background.style.opacity = "0.35";
background.style.position = "absolute";
background.style.top = "0";
background.style.left = "0";
background.style.width = "100%";
background.style.height = "100%";
background.style.zIndex = "-1";

content.appendChild(background);
