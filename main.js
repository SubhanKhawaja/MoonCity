let moon = document.getElementById('moon');
let cityleft = document.getElementById('cityleft');
let cityright = document.getElementById('cityright');
let heroText = document.querySelector('.hero p')

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY;
    moon.style.top = scrollValue * 0.8 + "px";
    heroText.style.marginTop = scrollValue * 1 + "px";
    cityleft.style.left = scrollValue * -1.2 + "px";
    cityright.style.left = scrollValue * 1.2 + "px";
})