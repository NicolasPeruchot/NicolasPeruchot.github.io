var images = [
    "img/term1.png",
    "img/term2.png",
]


var i = 0;

setInterval(function () {
    var imageHead = document.getElementById("body");
    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}, 1000);




