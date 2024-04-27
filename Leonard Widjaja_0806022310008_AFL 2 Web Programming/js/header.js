const header_text = document.querySelectorAll(".header-text");
const header_banner = document.getElementById("header-banner");
header_banner.setAttribute('style', "padding: 1.5%; background: none !important;");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let background = header_banner.style.background;
    var w = window.innerWidth;
    
    if(value == "0"){
        background = (w > 991) ? "none" : "black";
    } else{
        background = "black";
    }
    header_banner.setAttribute('style', "padding: 1.5%; background: " + background + " !important;");
})

function reportWindowSize(){
    let value = window.scrollY;
    let background;
    var w = window.innerWidth;
    if(value == "0"){
        background = (w > 991) ? "none" : "black";
    } else{
        background = "black";
    }
    header_banner.setAttribute('style', "padding: 1.5%; background: " + background + " !important;");
}

window.onresize = reportWindowSize;