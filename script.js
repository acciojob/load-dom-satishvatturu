//your JS code here. If required.
let bodyEle = document.body; 
document.addEventListener("DOMContentLoaded", (e)=>{
  let element = document.createElement("p");
  element.innerText = "DOM load success";
  bodyEle.appendChild(element);
})