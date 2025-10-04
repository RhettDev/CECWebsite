// index.js - All scripts for index.html

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate(){ 
    let image = document.getElementById('CECGearLanding');
    if (gear) {
        const rotation = window.scrollY / 5; // Adjust divisor for speed
        // gear.style.transform = `rotate(${rotation}deg)`;
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
    // image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}