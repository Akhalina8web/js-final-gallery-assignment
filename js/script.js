function upDate(previewPic){
    console.log("Event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
function addTabFocus() {
    console.log("Page loaded");

    let images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
// LIGHTBOX

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let previews = document.querySelectorAll(".preview");

let currentIndex = 0;

// Open lightbox
for (let i = 0; i < previews.length; i++) {

    previews[i].onclick = function() {

        currentIndex = i;

        lightbox.style.display = "flex";

        lightboxImg.src = previews[currentIndex].src;
        lightboxImg.alt = previews[currentIndex].alt;
    };
}


// Previous image
document.getElementById("prev").onclick = function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = previews.length - 1;
    }

    lightboxImg.src = previews[currentIndex].src;
    lightboxImg.alt = previews[currentIndex].alt;
};


// Next image
document.getElementById("next").onclick = function() {

    currentIndex++;

    if (currentIndex >= previews.length) {
        currentIndex = 0;
    }

    lightboxImg.src = previews[currentIndex].src;
    lightboxImg.alt = previews[currentIndex].alt;
};


// Close lightbox with X
document.querySelector(".close").onclick = function() {
    lightbox.style.display = "none";
};


// Close lightbox by clicking the dark background
lightbox.onclick = function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
};


// Close lightbox with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});