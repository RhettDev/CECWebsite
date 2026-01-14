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
    const gearIcon = document.getElementById("CECLogo");
    const hamIcon = document.getElementById("hamburgerIcon");
    if(!toglIcon || !gearIcon) return;
    if(saved === "darkTheme"){
        toglIcon.src = "assets/icons/DARKMODE-IconWhite.svg";
        gearIcon.src = "assets/icons/CECGearWhite.svg";
        hamIcon.src = "assets/icons/hamburgerIconWhite.svg";
    }
    else {
        toglIcon.src = "assets/icons/DARKMODE-IconBlack.svg";
        gearIcon.src = "assets/icons/CECGearBlack.svg";
        hamIcon.src = "assets/icons/hamburgerIconBlack.svg";
    }
}

function changeTheme(){
    const html = document.documentElement;
    const toglIcon = document.getElementById("themeToggleIcon");
    const gearIcon = document.getElementById("CECLogo");
    const hamIcon = document.getElementById("hamburgerIcon");

    if (html.classList.contains("lightTheme")){
        html.classList.remove('lightTheme');
        html.classList.add('darkTheme');
        localStorage.setItem("theme", "darkTheme");
        toglIcon.src = "assets/icons/DARKMODE-IconWhite.svg";
        gearIcon.src = "assets/icons/CECGearWhite.svg";
        hamIcon.src = "assets/icons/hamburgerIconWhite.svg";
        }
    else {
        html.classList.remove('darkTheme');
        html.classList.add('lightTheme');
        localStorage.setItem("theme", "lightTheme");
        toglIcon.src = "assets/icons/DARKMODE-IconBlack.svg";
        gearIcon.src = "assets/icons/CECGearBlack.svg";
        hamIcon.src = "assets/icons/hamburgerIconBlack.svg";
    }
}