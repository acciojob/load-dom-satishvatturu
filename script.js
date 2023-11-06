document.addEventListener("DOMContentLoaded", (e) => {
    let bodyEle = document.body;
    let element = document.createElement("p");
    element.innerText = "DOM load success";
    bodyEle.appendChild(element);
});