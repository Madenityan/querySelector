let btn = document.getElementById('btn-submit');
btn.setAttribute("style",
    "background: green; color:white; padding: 15px; outline: none; border:none; cursor:pointer");

let text = document.getElementById('text-about');
text.setAttribute("style",
    "color:grey; border: 1px solid green; padding: 60px");

function changeColor(elem,clr) {
    elem.style.color = clr;
}

function resize(elem,clr,color) {
    elem.style.backgroundColor = clr;
    elem.style.color = color;
}

function bigText(x) {
    x.style.fontSize = "20px";
    x.style.borderBottom = "1px solid red";
    x.style.color = "black";

}

function normalText(x) {
    x.style.fontSize = "18px";
    x.style.borderBottom = "1px solid grey";
}

