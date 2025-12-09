function setTheme(){
    const saved = localStorage.getItem("theme");
    const html = document.documentElement;
    if (saved === "darkTheme"){
        html.classList.remove('lightTheme');
        html.classList.add('darkTheme');
        localStorage.setItem("theme", "darkTheme");
        }
    else {
        html.classList.remove('darkTheme');
        html.classList.add('lightTheme');
        localStorage.setItem("theme", "lightTheme");
    }
}

function updateThemeIcons(){
    const saved = localStorage.getItem("theme");
    const toglIcon = document.getElementById("themeToggleIcon");
    const gearIconWITH = document.getElementById("CECLogoWITH");
    const gearIconWOUT = document.getElementById("CECLogoWOTH");
    if(!toglIcon || !gearIconWITH || !gearIconWOUT) return;
    if(saved === "darkTheme"){
        toglIcon.src = "assets/icons/DARKMODE-IconWhite.svg";
        gearIconWITH.src = "assets/icons/CECGearWhite.svg";
        gearIconWOUT.src = "assets/icons/CECGearWhite.svg";
    }
    else {
        toglIcon.src = "assets/icons/DARKMODE-IconBlack.svg";
        gearIconWITH.src = "assets/icons/CECGearBlack.svg";
        gearIconWOUT.src = "assets/icons/CECGearBlack.svg";
    }
}

function changeTheme(){
    const html = document.documentElement;
    const toglIcon = document.getElementById("themeToggleIcon");
    const gearIconWITH = document.getElementById("CECLogoWITH");
    const gearIconWOUT = document.getElementById("CECLogoWOTH");

    if (html.classList.contains("lightTheme")){
        html.classList.remove('lightTheme');
        html.classList.add('darkTheme');
        localStorage.setItem("theme", "darkTheme");
        toglIcon.src = "assets/icons/DARKMODE-IconWhite.svg";
        gearIconWITH.src = "assets/icons/CECGearWhite.svg";
        gearIconWOUT.src = "assets/icons/CECGearWhite.svg";
        }
    else {
        html.classList.remove('darkTheme');
        html.classList.add('lightTheme');
        localStorage.setItem("theme", "lightTheme");
        toglIcon.src = "assets/icons/DARKMODE-IconBlack.svg";
        gearIconWITH.src = "assets/icons/CECGearBlack.svg";
        gearIconWOUT.src = "assets/icons/CECGearBlack.svg";
    }
}