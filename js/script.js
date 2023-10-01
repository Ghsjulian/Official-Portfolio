"use strict";
function ghs__(tag) {
    return document.querySelector(tag);
}

let heading = document.querySelector(".heading");
let count = 0;
let countTwo = heading.dataset.title.length;
var colors = [
    "rgb(8,255,252)",
    "rgb(255,255,255)",
    "rgb(0,90,232)",
    "rgb(2,255,100)",
    "rgb(255,151,10)",
    "rgb(255,93,10)",
];
setInterval(() => {
    var randomIndex = Math.floor(Math.random() * colors.length);
    heading.style.color = colors[randomIndex];
}, 1000);
setTimeout(myFunc, 1000);

function myFunc() {
    let name = heading.dataset.title;
    heading.innerHTML = "";

    setInterval(() => {
        runFunc();
    }, 300);

    function runFunc() {
        if (count < name.length) {
            let createSpan = document.createElement("span");
            createSpan.setAttribute("class", " ");
            createSpan.setAttribute("class", "animationOne");
            createSpan.innerHTML = name.charAt(count);
            heading.append(createSpan);
            count++;
        } else {
            heading.children[countTwo - 1].className = "animationTwo";
            countTwo--;
            if (countTwo <= 0) {
                heading.innerHTML = " ";
                count = 0;
                countTwo = heading.dataset.title.length;
            }
        }
    }
}

ghs__(".mobile-nav").onclick = () => {
    var div = ghs__(".mobile-menu"),
        isopen = div.getAttribute("isopen");
    if (isopen === "false") {
        div.setAttribute("isopen", "true");
        div.style.display = "block";
    } else {
        div.setAttribute("isopen", "false");
        div.style.display = "none";
    }
};

var type = ghs__(".typewriter");
var ghsLogo = ghs__("#ghs-logo");

var task = [
    "Core PHP Developer",
    "JavaScript Developer",
    "Back-End Developer",
    "Professional Website Developer",
    "Nodejs & Express Developer",
    "Python Developer",
    "Programmer",
];
var img = [
    "ghs1.png",
    "ghs1.png",
    "ghs1.png",
    "ghs1.png",
    "ghs2.png",
    "ghs2.png",
    "ghs2.png",
    "ghs3.png",
    "ghs3.png",
    "ghs3.png"
    ]
setInterval(() => {
    var index = Math.floor(Math.random() * task.length);
    var imgIndex = Math.floor(Math.random() * img.length);
    var colorIndex = Math.floor(Math.random() * colors.length);
    type.style.color = colors[colorIndex];
    type.textContent = task[index];
    ghsLogo.src=`images/${img[imgIndex]}`
}, 6000);
